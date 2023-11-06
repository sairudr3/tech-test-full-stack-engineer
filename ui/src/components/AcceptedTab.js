import React from "react";
import LeadCard from "./LeadCard";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import NameDisplay from "./DisplayName";
import InfoDisplay from "./InfoDisplay";
import { Col, Container, Row } from "react-bootstrap";
import {
  faEnvelope,
  faContactBook,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AcceptedTab = ({ lead, onAccept, onDecline, isAccepeted = false }) => {
  const {
    id,
    contactFirstName,
    dateCreated,    
    location,
    category,    
    price,    
    contactno,
    email,
    leadType,
    jobDescription,
  } = lead;
  

  const options = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true, // Use 12-hour clock (e.g., AM/PM)
  };

  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(
    new Date(dateCreated),
  );
  const handleAcceptClick = () => {    
    onAccept(lead);
  };

  const handleDeclineClick = () => {
    
    onDecline(lead);
  };

  return (
    <div className="lead-card border-dark m-2">
      <div className="lead-info ">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <NameDisplay
              name={contactFirstName}
              date={formattedDate}
            ></NameDisplay>
          </li>
          <li class="list-group-item">
            <InfoDisplay
              location={location}
              id={id}
              description={category}
              amount={price}
              leadType={leadType}
              isAccepted={true}
            ></InfoDisplay>
          </li>
          <li className="list-group-item">
            <div className="d-flex flex-column bd-highlight mb-3">
              <div className="d-flex">
                <div>
                  <FontAwesomeIcon icon={faPhone} style={{ color: 'gray' }} />
                  <span className="orange-text">{contactno}</span>
                </div>
                <div>
                  <span className="orange-text"></span>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: 'gray' }}
                  />
                  <span className="orange-text">{email}</span>
                </div>
              </div>
              <div className="m-3">
                {jobDescription}
                <a href="/more-details">(See photos)</a>
              </div>
            </div>
          </li>
          {isAccepeted && (
            <li class="list-group-item">
              <Container>
                <Row className="d-flex justify-content-start">
                  <Col xs={3}>
                    <Button
                      onClick={handleAcceptClick}
                      className="btn-warning m-2"
                    >
                      Accept
                    </Button>
                    <Button onClick={handleDeclineClick} variant="secondary">
                      Decline
                    </Button>
                  </Col>
                </Row>
              </Container>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AcceptedTab;
