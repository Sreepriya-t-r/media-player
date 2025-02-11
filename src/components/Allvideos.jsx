import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
const Allvideos = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        <h4>All videos</h4>
        <Card onClick={handleShow} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            height={"250px"}
          />
          <Card.Body>
            <div className="d-flex justify-content-between ">
              <Card.Title>Card Title</Card.Title>
              <Card.Text></Card.Text>
              <button className="btn">
                <i className="fa-solid fa-trash text-danger"></i>
              </button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <Modal show={show} onHide={handleClose} size="lg" centered  className="">
        <Modal.Header closeButton>
          <Modal.Title>Video Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
         
            width="760"
            height="315"
            src="https://www.youtube.com/embed/Po3jStA673E?si=v4MFVffAr0mGYmKA-&autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Allvideos;
