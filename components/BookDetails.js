import useSWR from 'swr';
import { useEffect, useMemo, useState } from 'react';
import { Button, Col, Row, Spinner } from 'react-bootstrap';
import { useAtom } from 'jotai';
import { favouritesAtom } from '@/store';
import { addToFavourites, removeFromFavourites } from '@/lib/userData';

const fetcher = (...args) => fetch(...args).then(r => r.json());

function coverUrl(works) {
  const c = works?.covers?.[0];
  return c ? `https://covers.openlibrary.org/b/id/${c}-L.jpg` : '/no_image.png';
}

export default function BookDetails({ book, workId, showFavouriteBtn = true }) {
  const shouldFetch = !book && workId;
  const { data, error, isLoading } = useSWR(
    shouldFetch ? `https://openlibrary.org/works/${workId}.json` : null,
    fetcher
  );

  const resolved = book || data;

  const [favouritesList, setFavouritesList] = useAtom(favouritesAtom);
  
  // The 'initiallyAdded' calculation is now redundant, but kept for clarity's sake.
  // The useEffect below handles the primary state management (Assignment Step 4).
  const initiallyAdded = useMemo(
    () => favouritesList?.includes(workId ?? ''), // Add optional chaining '?'
    [favouritesList, workId]
  );
  
  const [showAdded, setShowAdded] = useState(initiallyAdded);

  useEffect(() => {
    // If favouritesList is undefined (loading), treat as not added. Otherwise, check the list.
    setShowAdded(favouritesList?.includes(workId));
  }, [favouritesList, workId]);

  async function favouritesClicked() {
    if (!workId) return;

    let updatedFavouritesList = [];

    if (showAdded) {
      // It is a favourite, so remove it using the API (Assignment Step 4)
      updatedFavouritesList = await removeFromFavourites(workId);
    } else {
      // It is NOT a favourite, so add it using the API (Assignment Step 4)
      updatedFavouritesList = await addToFavourites(workId);
    }

    // Update the global atom with the NEW list returned from the API
    setFavouritesList(updatedFavouritesList);
  }

  if (error) return <p className="text-danger">Failed to load book.</p>;
  if (isLoading) return <Spinner animation="border" role="status" />;

  if (!resolved) return <p>No data.</p>;

  const title = resolved.title || '';
  const description =
    typeof resolved.description === 'string'
      ? resolved.description
      : resolved.description?.value || 'No description available.';
const firstPublished = (() => {
  const w = resolved;
  if (w.first_publish_date) return w.first_publish_date;
  if (w.first_publish_year) return String(w.first_publish_year);
  if (w.created?.value) return w.created.value.slice(0, 10);
  return 'N/A';
})();
  const subjects = resolved.subjects || [];

  return (
    <Row className="gy-3">
      <Col lg="4">
        <img
          src={coverUrl(resolved)}
          alt={title || 'Cover image'}
          className="img-fluid rounded border"
          onError={(e) => { e.currentTarget.src = '/no_image.png'; }}
        />
      </Col>
      <Col lg="8">
        <h2 className="h3 mb-3">{title}</h2>
        <p className="mb-1"><strong>First Published:</strong> {firstPublished}</p>
        <p className="mb-2"><strong>Subjects:</strong> {subjects.length ? subjects.join(', ') : 'N/A'}</p>
        <p style={{ whiteSpace: 'pre-wrap' }}>{description}</p>

        {showFavouriteBtn ? (
          <Button
            variant={showAdded ? 'primary' : 'outline-primary'}
            onClick={favouritesClicked} // Calls the updated async function
            className="mt-3"
          >
            {showAdded ? '- Remove from Favourites' : '+ Add to Favourites'}
          </Button>
        ) : null}
      </Col>
    </Row>
  );
}
