import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { Store } from '../Store';

export default function Navigationbar() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <div>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Gada Electronics</Navbar.Brand>
            </LinkContainer>
            <Nav className="ms-auto">
              <Link to="/cart" className="nav-link text-white">
                Cart
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger ms-1 fs-smaller">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}
