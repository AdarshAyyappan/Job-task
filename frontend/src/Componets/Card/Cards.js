import React from "react";
import { Card, CardGroup, ProgressBar } from "react-bootstrap";
import User from "../../icons/gigname.png";
import Date from "../../icons/gigCalender.png";
import Money from "../../icons/gigBudget.png";
import { Row, Col } from "react-bootstrap";
import "./Cards.css";
import { useEffect, useState } from "react";
import { borderRadius } from "@mui/system";
import axios from "axios";

import Swal from "sweetalert2/dist/sweetalert2.all";
import moment, * as moments from "moment";

function Cards() {
  const [adminDetials, setAdminDetials] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const getDetails = async () => {
      const { data } = await axios.get("http://localhost:5001/api");

      setAdminDetials(data);
      setRefresh(!refresh);
    };

    getDetails();
  }, [refresh]);

  const deleteHandler = async (id) => {
    const { data } = await axios.delete(
      `http://localhost:5001/api/delete/${id}`
    );
    Swal.fire("item removed successfully !");
    setRefresh(!refresh);
  };

  return (
    <>
      <Row>
        <div className="container bg p-4">
          <div style={{ background: "white" }}>
            <Row>
              {adminDetials &&
                adminDetials.length > 0 &&
                adminDetials.map((val) => {
                  return (
                    <Col
                      lg={4}
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        padding: "20px",
                      }}
                    >
                      <Card
                        calassName="ccc"
                        style={{
                          width: "18rem",
                          borderRadius: "5px",
                          position: "center",
                          marginTop: "20px",
                          margine: "20px",
                          marginLeft: "1%",
                          padding: "5px",
                        }}
                      >
                        <Card.Body class="c1">
                          <Row
                            style={{
                              float: "right",
                              position: "absolute",
                              right: "2rem",
                            }}
                          >
                            <i
                              className="fa fa-trash-o justify-content-end cursor-pointer"
                              style={{ fontsize: "50px", color: "red" }}
                              onClick={() => {
                                deleteHandler(val._id);
                              }}
                            ></i>
                          </Row>

                          <Row className="first-side ">
                            <img style={{ width: "4rem" }} src={User} />

                            <Col>
                              <h1 className="on-tag">Gig Name</h1>
                              <h2 className="on-tag1">{val.name}</h2>
                            </Col>
                          </Row>

                          <Row className="first-side ">
                            <img style={{ width: "4rem" }} src={Date} />
                            <Col>
                              <h1 className="on-tag">Required Date</h1>
                              <h2 className="on-tag1">
                                {" "}
                                {moment(val.createdAt).format(
                                  "DD/MM/YYYY"
                                )}{" "}
                              </h2>
                            </Col>
                          </Row>

                          <Row className="first-side ">
                            <img style={{ width: "4rem" }} src={Money} />
                            <Col>
                              <h1 className="on-tag">Tottal Budget</h1>
                              <h2 className="on-tag1">INR {val.budget}</h2>
                            </Col>
                          </Row>

                          <Col className="progressbar ps-2 pt-3">
                            <h2 style={{ fontSize: 17, marginLeft: "70px" }}>
                              {Math.floor((val.hired / val.vacancy) * 100)}%
                              Secured
                            </h2>

                            <ProgressBar
                              variant="success"
                              // now={30}
                              now={(val.hired / val.vacancy) * 100}
                            />

                            <h2
                              style={{
                                fontSize: 17,
                                marginLeft: "70px",
                                paddingTop: "10px",
                              }}
                            >
                              Tottal Resources
                            </h2>
                          </Col>

                          <Row>
                            <Col>
                              <h2 style={{ fontSize: 15 }}>Required</h2>
                              <h2 style={{ fontSize: 15, marginLeft: "20px" }}>
                                {val.vacancy}
                              </h2>
                            </Col>

                            <Col>
                              <h2 style={{ fontSize: 15 }}>Hired</h2>
                              <h2 style={{ fontSize: 15, marginLeft: "12px" }}>
                                {val.hired}
                              </h2>
                            </Col>

                            <Col>
                              <h2 style={{ fontSize: 15 }}>Application</h2>
                              <h2 style={{ fontSize: 15, marginLeft: "20px" }}>
                                {val.application}
                              </h2>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
            </Row>
          </div>
        </div>
      </Row>
    </>
  );
}

export default Cards;
