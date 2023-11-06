import React from "react";
import NameDisplay from "./DisplayName";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import InfoDisplay from "./InfoDisplay";

const LeadCard = ({ lead, onAccept, onDecline }) => {
    const {
      id,
      contactFirstName,
      dateCreated,      
      location,
      category,      
      price,      
      leadType,
      isAccepted,
      jobDescription
    } = lead;

  const serverDateStr = "2023-01-04 04:37:00";

  const jobDetails = jobDescription;
  
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
  const handleAcceptClick = () =>onAccept(lead);
  const handleDeclineClick = () => onDecline(lead);

  return (
    <div className="lead-card border-dark m-2">
      <div className="lead-info ">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            {" "}
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
              isAccepeted={true}
            ></InfoDisplay>
          </li>
          <li class="list-group-item">{jobDetails}</li>
          <li class="list-group-item">
            <Container>
              <Row>
                <Col xm={6} className="d-flex justify-content-start  mr-2 ml-2">
                  <div>
                    <Button
                      onClick={handleAcceptClick}
                      className="btn-warning mx-2 my-0"
                    >
                      Accept
                    </Button>
                  </div>
                  <div>
                    <Button
                      onClick={handleDeclineClick}
                      className="btn-secondary"
                    >
                      Decline
                    </Button>
                  </div>
                  {isAccepted ? (
                    <div className="amount m-2">
                      ${price} {leadType}
                    </div>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Container>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeadCard;
