import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import TextField from "@mui/material/TextField";
const ApplicationModal = ({ jobRole, showModal, toggleModal }) => {
  return (
    <Modal show={showModal} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          Confirm Application for <span className="fw-bold">{jobRole}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TextField id="name" label="Name" variant="outlined" />
        <TextField id="email-id" label="Email" variant="outlined" />
        <h6 className="my-2">Upload Resume</h6>
        <input type="file" id="resume" name="myfile" />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleModal}>
          Close
        </Button>
        <Button variant="primary" onClick={toggleModal}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ApplicationModal;
