import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Section.css";
import Newbt from "../Button/Button";

function Section() {
  return (
    <div>
      <Navbar className="shadow" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand className="new-nav" href="#">
            All
          </Navbar.Brand>
          <Navbar.Brand className="new-nav" href="#">
            Open
          </Navbar.Brand>
          <Navbar.Brand className="new-nav" href="#">
            Completed
          </Navbar.Brand>
          <Navbar.Brand className="new-nav" href="#">
            Cancelled
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "80px" }}
              navbarScroll
            ></Nav>

            <Form className="d-flex ">
              <div class="form-group has-search">
                <span class="fa fa-angle-down form-control-feedback"></span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Sort By"
                  style={{ background: "#d9d9d9" }}
                />
              </div>

              <div class="form-group has-search ps-1 md-ps-2">
                <span class="fa fa-search form-control-feedback"></span>
                <input type="text" class="form-control" placeholder="Search" />
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
}

export default Section;
