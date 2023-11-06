import React from "react";
import LeadCard from "./LeadCard";
import { Card, Container } from "react-bootstrap";

const InvitedTab = ({ invitedLeads, onAccept, onDecline }) => {
  return (
    <div className="invited-tab">
      {invitedLeads.map((lead) => (
        <Container fluid="md" className="p-1 m-1">
          <Card>
            <Card.Body>
              <div class="container-fluid border-primary">
                <LeadCard
                  key={lead.id}
                  lead={lead}
                  onAccept={() => onAccept(lead)}
                  onDecline={() => onDecline(lead)}
                />
              </div>
            </Card.Body>
          </Card>
        </Container>
      ))}
    </div>
  );
      
};

export default InvitedTab;
