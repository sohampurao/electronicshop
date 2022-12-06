import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

export default function Navigationbar() {
  return (
    <div>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Gada Electronics</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}
