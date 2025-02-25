import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";

// import Allvideos from "./Allvideos";
import {
  createCategory,
  deleteCategory,
  deleteVideo,
  getAllVideo,
  getCategory,
  getSingleVideo,
  updateCatgories,
} from "../services/allAPI";

const AllCategories = ({ setVideoDeleteResponse, catVdoDeleteResponse }) => {
  const [show, setShow] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [categoryName, setCategory] = useState("");
  const [data, setData] = useState([]);
  // const [vdata, setVData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleClose = () => setShow(false);
  const handleCloseVideo = () => setShowVideo(false);
  const handleShow = () => setShow(true);

  const createNewCategory = async () => {
    if (categoryName) {
      try {
        const category = { categoryName, Allvideos: [] };
        await createCategory(category);
        setShow(false);
        setCategory("");
        getCategorys();
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("pls fill the form");
    }
  };

  useEffect(() => {
    getCategorys();
  }, [ catVdoDeleteResponse]);

  const getCategorys = async () => {
    try {
      let apiResponse = await getCategory();

      setData(apiResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteClick = async (id) => {
    try {
      await deleteCategory(id);
      getCategorys();
    } catch (error) {
      console.log(error);
    }
  };

  const dragOverContent = (e) => {
    e.preventDefault();
  };

  const dropped = async (e, catData) => {
    let vId = e.dataTransfer.getData("id");
    console.log(data);
    try {
      let response = await getSingleVideo(vId);
      // setVData(response.data)
      if (response.status >= 200 && response.status <= 300) {
        catData.Allvideos.push(response.data);
        await updateCatgories(catData.id, catData);
        // console.log(catData);

        let deleteResponse = await deleteVideo(vId);
        setVideoDeleteResponse(deleteResponse);
      }
    } catch (error) {
      console.log(error);
    }

    //  console.log(response.data);
  };

  const handleShowVideo = (video) => {
    setSelectedVideo(video);
    setShowVideo(video);
  };

  const handleCatogoryDrag = (e, categoryId, videoObj) => {
    console.log(`started dragging ${videoObj} in ${categoryId}`);

    let dataToTransfer = {
      videoObj,
      categoryId,
    }
    e.dataTransfer.setData("fromCategoryVideo",JSON.stringify(dataToTransfer))
  };

  return (
    <>
      <div>
        <div className="d-flex">
          <h4 className="me-3">Add catageory</h4>
          <button
            onClick={handleShow}
            className="rounded-circle border-0 btn btn-warning"
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      {data.length > 0 ? (
        data.map((val, index) => (
          <div
            key={index}
            className="container border border-1 "
            onDragOver={(e) => dragOverContent(e)}
            onDrop={(e) => dropped(e, val)}
            style={{ minHeight: "500px" }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <h4>{val.categoryName}</h4>
              <button
                onClick={() => onDeleteClick(val.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
            <div className="row">
              {val.Allvideos.map((a) => (
                <div
                  draggable={true}
                  onDragStart={(e) => handleCatogoryDrag(e, val.id, a)}
                  key={index}
                  className="col-6"
                >
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      onClick={() => handleShowVideo(a)}
                      variant="top"
                      src={a.imageURL}
                      height={"200px"}
                    />
                    <Card.Body>
                      <h5>{index + 1}</h5>
                      <div className="d-flex justify-content-between align-items-center ">
                        <Card.Title
                        //  onClick={() => handleShow(a)}
                        >
                          {a.caption}
                        </Card.Title>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <h5>No Category Found</h5>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>AllCategories</Modal.Title>
        </Modal.Header>

        <div className="border border-2 m-2">
          <Modal.Body>
            <FloatingLabel
              controlId="floatingCaption"
              label="add "
              className="mb-3"
            >
              <Form.Control
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="Enter video caption"
              />
            </FloatingLabel>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="info" onClick={createNewCategory}>
              Save Changes
            </Button>
          </Modal.Footer>
        </div>
      </Modal>

      {selectedVideo && (
        <Modal
          show={showVideo}
          onHide={handleCloseVideo}
          size="lg"
          centered
          className=""
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedVideo.caption}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              width="760"
              height="315"
              src={`https://www.youtube.com/embed/${selectedVideo.videoLink}&autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default AllCategories;
