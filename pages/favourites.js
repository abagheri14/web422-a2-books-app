import { useAtom } from 'jotai';
import { favouritesAtom } from '@/store';
import PageHeader from '@/components/PageHeader';
import { Col, Row } from 'react-bootstrap';
import BookCard from '@/components/BookCard';

export default function Favourites() {
  const [favouritesList] = useAtom(favouritesAtom);

  if (!favouritesList.length) {
    return (
      <>
        <PageHeader text="Nothing Here" subtext="Add a book to favourites from its details page." />
      </>
    );
  }

  return (
    <>
      <PageHeader text="Favourites" subtext="Your favourite books" />
      <Row className="gy-4">
        {favouritesList.map((workId) => (
          <Col key={workId} lg={3} md={6}>
            <BookCard workId={workId} />
          </Col>
        ))}
      </Row>
    </>
  );
}
