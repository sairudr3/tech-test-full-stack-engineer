import React, { Fragment, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Container, Row, Stack, Tab, Tabs } from 'react-bootstrap';
import InvitedTab from './components/InvitedTab';
import AcceptedTab from './components/AcceptedTab';
import Col from 'react-bootstrap/Col';
import './App.css'; 

import { fetchData, acceptInviteData } from './api/ApiService';
import { DeclineModel } from './model/DeclineModel';

function App() {
  const [data, setData] = useState([]);
  const [acceptedData, setAcceptedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);  

  useEffect(() => {
    // async function fetchDataAsync() {
    //   try {
    //     const result = await fetchData('inviteData');
    //     setData(result);
    //   } catch (error) {
    //     console.error(error);
    //   } finally {
    //     setLoading(false);
    //   }
    // }

    // fetchDataAsync();
  }, []);

  const handleAccept = (lead) => {
    console.log('lead here ', lead);
    acceptInviteData(lead);
    const filteredData = data.filter((item) => lead.id != item.id);
    setData(filteredData);
  };

  const handleDecline = (lead) => {
    console.log('lead here ', lead);
    setShow(true);
  };

  const handleTabSelect = (key) => {    
    console.log('Tab selected:', key);

    async function fetchDataAsync() {
      try {
        const result = await fetchData(key);
        if (key == 'inviteData') setData(result);
        
        if (key == 'acceptedData') 
        setAcceptedData(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchDataAsync();
  };

  return (
    <div>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <Container fluid="true">
          <Row>
            <Col>
              <Tabs
                defaultActiveKey="profile"
                id="justify-profile"
                className="mb-4"
                justify
                onSelect={handleTabSelect}
              >
                <Tab eventKey="inviteData" title="Invited">
                  <InvitedTab
                    invitedLeads={data}
                    onAccept={handleAccept}
                    onDecline={handleDecline}
                  />
                </Tab>
                <Tab eventKey="acceptedData" title="Accepted">
                  {acceptedData.map((lead) => (
                    <Container fluid="md" className="p-1 m-1">
                      <Card>
                        <Card.Body>
                          <div class="container-fluid border-primary">
                            <AcceptedTab
                              key={lead.id}
                              lead={lead}
                              onAccept={handleAccept}
                              onDecline={handleDecline}
                            />
                          </div>
                        </Card.Body>
                      </Card>
                    </Container>
                  ))}
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      )}
      {<DeclineModel modelClose={handleClose} show={show}></DeclineModel>}
    </div>
  );
}

export default App;
