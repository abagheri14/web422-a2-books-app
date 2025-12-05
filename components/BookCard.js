import useSWR from 'swr';
import Error from 'next/error';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';

const fetcher = (...args) => fetch(...args).then(r => r.json());

function coverMUrl(works) {
  const c = works?.covers?.[0];
  return c ? `https://covers.openlibrary.org/b/id/${c}-M.jpg` : '/no_image.png';
}

export default function BookCard({ workId }) {
  const { data, error } = useSWR(`https://openlibrary.org/works/${workId}.json`, fetcher);

  if (error || !data) return <Error statusCode={404} />;

  const title = data.title || '';
const firstPublished = (() => {
  const w = data;
  if (w.first_publish_date) return w.first_publish_date;              
  if (w.first_publish_year) return String(w.first_publish_year);     
  if (w.created?.value) return w.created.value.slice(0, 10);          
  return 'N/A';
})();

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={coverMUrl(data)}
        alt={title || 'Cover image'}
        className="object-fit-cover"
        onError={(e) => { e.currentTarget.src = '/no_image.png'; }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fs-6">{title || ''}</Card.Title>
        <Card.Text className="text-muted">First published: {firstPublished}</Card.Text>
        <div className="mt-auto">
          <Button as={Link} href={`/works/${workId}`} variant="secondary" size="sm">
            View details
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
