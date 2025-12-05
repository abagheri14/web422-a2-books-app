import { useRouter } from 'next/router';
import useSWR from 'swr';
import PageHeader from '@/components/PageHeader';
import BookDetails from '@/components/BookDetails';
import { Spinner } from 'react-bootstrap';

const fetcher = (...args) => fetch(...args).then(r => r.json());

export default function WorkDetails() {
  const router = useRouter();
  const { workId } = router.query;

  const { data, error, isLoading } = useSWR(
    workId ? `https://openlibrary.org/works/${workId}.json` : null,
    fetcher
  );

  if (error) return <p className="text-danger">Failed to load work.</p>;
  if (isLoading) return <Spinner animation="border" role="status" />;

  return (
    <>
      <PageHeader text="Work Details" subtext={workId} />
      <BookDetails book={data} workId={workId} />
    </>
  );
}
