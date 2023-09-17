import React from 'react';
import {Container, Navbar as BSNavbar} from 'react-bootstrap';

export default function Navbar() {
  return (
    <BSNavbar expand="md">
      <Container className="py-2 mx-2 mx-sm-auto">
        <BSNavbar.Brand href="/">
          <span className="fw-bold text-primary">PHP Editor</span>
        </BSNavbar.Brand>
      </Container>
    </BSNavbar>
  );
}
