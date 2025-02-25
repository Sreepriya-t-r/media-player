import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { uploadVideo } from "../services/allAPI";

const Add = ({setVideoResp}) => {
  const [video, setVideo] = useState({
    caption: "",
    imageURL: "",
    videoLink: "",
  });
  console.log(video);

  const [error, setError] = useState(false);

  const seperateimgUrl = (value) => {
    if (value.includes(".be/")) {
      const videoId = value.split(".be/")[1];
      setError(false);
      setVideo({ ...video, videoLink: videoId });
      console.log(videoId);
     
    } else {
      setError(true);
      console.error("invalid utube link");
    }
  };

  // modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = async () => {
    if (video.caption && video.imageURL && video.videoLink) {
      console.log("success");
      try {
        let response = await uploadVideo(video);
        setVideoResp(response)
        
        // console.log(response);
        if (response.status >= 200 && response.status <= 300) {
          alert("successfully addedd your video");

          setShow(false);
          setVideo({
            caption: "",
            imageURL: "",
            videoLink: "",
          });
        }else{
          alert("error occurred pls contact admin")
        }
      } 
      catch {
        console.log("error occured");
      }
    } else {
      alert("Please fill the form.");
    }
  };

  return (
    <>
      <div className="d-flex ">
        <h4 className="me-3">Upload New Video</h4>
        <button
          onClick={handleShow}
          className="rounded-circle  border-0 btn btn-warning "
        >
          {" "}
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Uploading Video Details !!!</Modal.Title>
        </Modal.Header>
        <div className="border border-2 m-2">
          <Modal.Body>
            <FloatingLabel
              controlId="floatingInput"
              label="Video Caption"
              className="mb-3"
            >
              <Form.Control
                onChange={(e) => {
                  setVideo({ ...video, caption:e.target.value });
                }}
                type="text"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Video Image URL">
              <Form.Control
                onChange={(e) => {
                  setVideo({ ...video, imageURL: e.target.value });
                }}
                type="text"
                placeholder="image"
              />
            </FloatingLabel>

            <FloatingLabel
              className="mt-3"
              controlId="floatingPassword"
              label="Video Youtube Link"
            >
              <Form.Control
                onChange={(e) => {
                  seperateimgUrl(e.target.value);
                }}
                type="text"
                placeholder="text"
              />
            </FloatingLabel>

            <div>
              <p className="text-danger">{error ? "Invalid" : ""}</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="info" onClick={handleSave}>
              save changes
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default Add;
