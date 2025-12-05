import Link from 'next/link';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function MainNav() {
  return (
    <Navbar bg="light" expand="lg" className="mb-4 border-bottom">
      <Container>
        <Navbar.Brand as={Link} href="/">WEB422 A2</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
            {/* remove "Books" link */}
            <Nav.Link as={Link} href="/favourites">Favourites</Nav.Link>
            <Nav.Link as={Link} href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
