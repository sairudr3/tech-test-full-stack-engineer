import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export function DeclineModel({ modelClose, show }) {
  const handleClose = () => modelClose();

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>HiPages</Modal.Title>
        </Modal.Header>
        <Modal.Body>Happy to implment if required !</Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      ;
    </>
  );
}

