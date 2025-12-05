import '../public/styles/bootstrap.min.css';
import MainNav from '@/components/MainNav';
import { Container } from 'react-bootstrap';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainNav />
      <Container className="pb-5">
        <Component {...pageProps} />
      </Container>
    </>
  );
}
