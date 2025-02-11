import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
const Add = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <div className='d-flex '>
        <h4 className='me-3'>Upload New Video</h4>
        <button onClick={handleShow} className='rounded-circle  border-0 btn btn-warning '> <i className="fa-solid fa-plus"></i></button>
    </div>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Uploading Video Details !!!</Modal.Title>
    </Modal.Header>
    <div className='border border-2 m-2'>
    <Modal.Body>
        
        <FloatingLabel
            controlId="floatingInput"
            label="Video Caption"
          
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Video Image URL">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
    
          <FloatingLabel className='mt-3' controlId="floatingPassword" label="Video Youtube Link">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
    
        </Modal.Body>   
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="info" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
    </div>
   
  </Modal>
    </>
   

  )
}

export default Add