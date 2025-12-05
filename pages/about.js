import PageHeader from '@/components/PageHeader';
import BookDetails from '@/components/BookDetails';

export default function About() {

  const workId = 'OL45883W';
  const book = { title: 'Sample Book', covers: [], subjects: [], first_publish_date: 'N/A' };

  return (
    <>
      <PageHeader text="About" subtext="Assignment 2 demo page" />
      <BookDetails book={book} workId={workId} showFavouriteBtn={false} />
    </>
  );
}
