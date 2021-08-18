import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import homepagePhoto from "../../Images/photo-1.jpg";

const Home = () => {
  return (
    <section>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Photographer On Budget</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/company">Company</Nav.Link>
              <Nav.Link href="/freelancer">Freelancer</Nav.Link>
              <NavDropdown title="Event" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/wedding">Wedding</NavDropdown.Item>
                <NavDropdown.Item href="/birthday">Birthday</NavDropdown.Item>
                <NavDropdown.Item href="/official">
                  Office Party
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/program">
                  Organizational Program
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link eventKey={2} href="/urgent">
                Urgent Need!
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='bg-image'>
      <Image src={homepagePhoto} className="d-block mx-auto img-fluid w-100" >
      </Image>
      </div>
    </section>
  );
};

export default Home;
