import Link from 'next/link';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { isAuthenticated, removeToken } from '@/lib/authenticate';
import { useRouter } from 'next/router';

export default function MainNav() {
  const router = useRouter();
  const loggedIn = isAuthenticated();

  function handleLogout() {
    removeToken();
    router.push("/login");
  }

  return (
    <Navbar bg="light" expand="lg" className="mb-4 border-bottom shadow-sm">
      <Container>
        <Navbar.Brand as={Link} href="/">WEB422 A3</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/books">Books</Nav.Link>
            <Nav.Link as={Link} href="/about">About</Nav.Link>

            {loggedIn && (
              <Nav.Link as={Link} href="/favourites">Favourites</Nav.Link>
            )}
          </Nav>

          <Nav>
            {!loggedIn ? (
              <>
                <Nav.Link as={Link} href="/login">Login</Nav.Link>
                <Nav.Link as={Link} href="/register">Register</Nav.Link>
              </>
            ) : (
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
