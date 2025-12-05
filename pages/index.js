import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Button, Col, Form, Row } from 'react-bootstrap';
import PageHeader from '@/components/PageHeader';

export default function Home() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      author: '',
      title: '',
      subject: '',
      language: '',
      first_publish_year: ''
    }
  });

  function onSubmit(data) {
    const filtered = Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v !== '')
    );
    router.push({
      pathname: '/books',
      query: filtered
    });
  }

  return (
    <>
      <PageHeader text="Search" subtext="Find books on Open Library" />

      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Row className="gy-3">
          <Col md={6}>
            <Form.Label>Author *</Form.Label>
            <Form.Control
              type="text"
              placeholder="eg. Douglas"
              isInvalid={!!errors.author}
              {...register('author', { required: 'Author is required' })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.author?.message}
            </Form.Control.Feedback>
          </Col>

          <Col md={6}>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="eg. Galaxy" {...register('title')} />
          </Col>

          <Col md={6}>
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="eg. space" {...register('subject')} />
          </Col>

          <Col md={3}>
            <Form.Label>Language</Form.Label>
            <Form.Control type="text" placeholder="eg. eng" {...register('language')} />
          </Col>

          <Col md={3}>
            <Form.Label>First Publish Year</Form.Label>
            <Form.Control type="number" placeholder="eg. 1979" {...register('first_publish_year')} />
          </Col>

          <Col xs="12" className="pt-2">
            <Button type="submit" variant="primary">Search</Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
