import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Table, Button, Spinner } from 'react-bootstrap';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

const fetcher = (...args) => fetch(...args).then(r => r.json());

export default function Books() {
  const router = useRouter();
  const queryString = useMemo(() => new URLSearchParams(router.query).toString(), [router.query]);

  const [page, setPage] = useState(1);
  useEffect(() => setPage(1), [queryString]);

  const { data, error, isLoading } = useSWR(
    queryString ? `https://openlibrary.org/search.json?${queryString}&page=${page}&limit=10` : null,
    fetcher
  );

  const subtext = useMemo(() => {
    const entries = Object.entries(router.query);
    if (!entries.length) return '';
    return entries.map(([k, v]) => `${k}=${v}`).join(' • ');
  }, [router.query]);

  if (error) return <p className="text-danger">Failed to load results.</p>;

  return (
    <>
      <PageHeader text="Search Results" subtext={subtext} />

      {isLoading ? (
        <Spinner animation="border" role="status" />
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Title</th>
                <th>Authors</th>
                <th>First Publish Year</th>
                <th>Work</th>
              </tr>
            </thead>
            <tbody>
              {(data?.docs || []).map((doc) => {
                const authors = doc.author_name?.join(', ') || 'N/A';
                const title = doc.title || 'Untitled';
                const year = doc.first_publish_year || 'N/A';
                const workKey = doc.key; // e.g., "/works/OL12345W"
                const workId = workKey?.split('/').pop();

                return (
                  <tr key={`${workKey}-${doc.cover_i || ''}`}>
                    <td>{title}</td>
                    <td>{authors}</td>
                    <td>{year}</td>
                    <td>
                      {workId ? (
                        <Button as={Link} href={`/works/${workId}`} size="sm" variant="secondary">
                          View
                        </Button>
                      ) : 'N/A'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          <div className="d-flex gap-2">
            <Button
              variant="outline-secondary"
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              ← Prev
            </Button>
            <span className="align-self-center">Page {page}</span>
            <Button
              variant="outline-secondary"
              onClick={() => setPage(p => p + 1)}
              disabled={!data || (data.docs || []).length < 10}
            >
              Next →
            </Button>
          </div>
        </>
      )}
    </>
  );
}
