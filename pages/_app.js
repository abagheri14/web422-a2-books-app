// pages/_app.js
import '../public/styles/bootstrap.min.css';
import MainNav from '@/components/MainNav';
import { Container } from 'react-bootstrap';
import RouteGuard from '@/components/RouteGuard'; // Import the new component

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainNav />
      {}
      <RouteGuard>
        <Container className="pb-5">
          <Component {...pageProps} />
        </Container>
      </RouteGuard>
    </>
  );
}
