import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";

const InfoDisplay = ({ location, id, description, amount, leadType,isAccepted}) => {
  return (
    <div className="info-display">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={8}>
            <div className="info-text d-flex justify-content-between ">
              <div className="pincode">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "gray" }}
                />
                <span style={{ marginRight: "5px", marginLeft: "15px" }}>
                  {location}
                </span>
              </div>
              <div className="description">
                <FontAwesomeIcon icon={faBriefcase} style={{ color: "gray" }} />
                {`   ${description}`}
              </div>
              <div className="job-id">Job ID: {id}</div>
              {isAccepted ? (
                <div className="amount">
                  ${amount} { leadType }
                </div>
              ) : (
                ""
              )}
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default InfoDisplay;
