import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import "./Button.css";
import axios from "axios";
import { Row } from "react-bootstrap";
import Swal from "sweetalert2/dist/sweetalert2.js";

function Buttons() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");
  const [vacancy, setVacancy] = useState("");
  const [hired, setHired] = useState("");
  const [application, setApplication] = useState("");
  const [refresh, setRefresh] = useState(false);



  const submitHandler = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      budget: budget,
      vacancy: vacancy,
      hired: hired,
      application: application,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post("http://localhost:5001/api", data);
    console.log(response.data.success);
    if (response.data.success) {
      setRefresh(!refresh);
    }
  };

  return (
    <>
      <div className="text-center" style={{ width: "90%" }}>
        <Button variant="primary" onClick={handleShow}>
          Create <AddCircleOutlineRoundedIcon />
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} style={{ zIndex: 9999 }}>
        <Modal.Header closeButton>
          <Modal.Title>Add Detials</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Gig Name</Form.Label>
              <Form.Control
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tottal Budget</Form.Label>
              <Form.Control
                type="Number"
                placeholder=""
                autoFocus
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Required</Form.Label>
              <Form.Control
                type="Number"
                placeholder=""
                autoFocus
                value={vacancy}
                onChange={(e) => setVacancy(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Hired</Form.Label>
              <Form.Control
                type="Number"
                placeholder=""
                autoFocus
                value={hired}
                onChange={(e) => setHired(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Application</Form.Label>
              <Form.Control
                type="Number"
                placeholder=""
                autoFocus
                value={application}
                onChange={(e) => setApplication(e.target.value)}
              />
            </Form.Group>
            <Row className="btn-new">
              <Button
                className="w-25"
                variant="secondary"
                onClick={handleClose}
              >
                Close
              </Button>
              <Button
                className="w-25 ms-2"
                type="submit"
                variant="success"
                onClick={handleClose}
              >
                Submit
              </Button>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Buttons;
