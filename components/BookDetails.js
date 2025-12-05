import useSWR from 'swr';
import { useEffect, useMemo, useState } from 'react';
import { Button, Col, Row, Spinner } from 'react-bootstrap';
import { useAtom } from 'jotai';
import { favouritesAtom } from '@/store';

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
  const initiallyAdded = useMemo(
    () => favouritesList.includes(workId ?? ''),
    [favouritesList, workId]
  );
  const [showAdded, setShowAdded] = useState(initiallyAdded);

  useEffect(() => setShowAdded(initiallyAdded), [initiallyAdded]);

  function favouritesClicked() {
    if (!workId) return;
    if (showAdded) {
      setFavouritesList(current => current.filter(fav => fav !== workId));
      setShowAdded(false);
    } else {
      setFavouritesList(current => [...current, workId]);
      setShowAdded(true);
    }
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
            onClick={favouritesClicked}
            className="mt-3"
          >
            {showAdded ? '+ Favourite (added)' : '+ Favourite'}
          </Button>
        ) : null}
      </Col>
    </Row>
  );
}
