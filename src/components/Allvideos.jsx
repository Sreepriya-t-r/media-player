import React, { useEffect } from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import {
  addHistory,
  deleteVideo,
  getAllVideo,
  getSingleCategory,
  updateCatgories,
  uploadVideo,
} from "../services/allAPI";

const Allvideos = ({ videResp, videoDeleteResponse, setCatDeleteResponse }) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  //video modal
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = async (video) => {
    const { caption, videoLink } = video;
    console.log(caption, videoLink);

    let date = new Date();

    let formatedDate = date.toLocaleString("en-IN", { timeZoneName: "short" });

    const payload = { caption, videoLink, formatedDate };
    try {
      // apiResponse
      await addHistory(payload);
    } catch (error) {
      console.log(error);
    }

    setSelectedVideo(video);
    setShow(true);
  };

  useEffect(() => {
    getVideo();
  }, [videResp, videoDeleteResponse]);

  const onDeleteClick = async (id) => {
    try {
      await deleteVideo(id);
      getVideo();
    } catch (error) {
      alert(error);
    }
  };

  const getVideo = async () => {
    try {
      let apiResponse = await getAllVideo();
      console.log(apiResponse);
      if (apiResponse.status >= 200 && apiResponse.status <= 300) {
        setData(apiResponse.data);
      } else {
        console.log("error");
      }
    } catch {
      alert("error occurred");
    }
  };
  console.log(data);

  const onVideoDrag = (e, id) => {
    console.log(e, id);
    e.dataTransfer.setData("id", id);
  };
  const onDragOverDiv = (e) => {
    e.preventDefault();
  };

  const onVideoDrop = async (e) => {
    let { categoryId, videoObj } = JSON.parse(
      e.dataTransfer.getData("fromCategoryVideo")
    );
    console.log(categoryId, videoObj);
    //upload vdo to all vdo
    await uploadVideo(videoObj);
    getVideo();

    //get cat details  
    let apiResponse = await getSingleCategory(categoryId);
    console.log(apiResponse);
    let currentAllVideos=apiResponse.data.Allvideos
    let sortedVideo=currentAllVideos.filter((item)=>item.id!=videoObj.id)
    // console.log(sortedVideo);

    const payload = {
      id:categoryId,
      categoryName:apiResponse.data.categoryName,
      Allvideos:sortedVideo
    }
  let deleteResponse=  await updateCatgories(categoryId,payload)
  setCatDeleteResponse(deleteResponse)

  };
  return (
    <>
      <div
        onDragOver={(e) => onDragOverDiv(e)}
        onDrop={(e) => onVideoDrop(e)}
        className="border border-1"
        style={{ minHeight: "100%" }}
      >
        <h4>All videos</h4>
        <div className="d-flex flex-wrap gap-5 ">
          {data.map((a, index) => (
            <div className=" " key={index}>
              <Card
                draggable={true}
                onDragStart={(e) => onVideoDrag(e, a.id)}
                style={{ width: "18rem" }}
              >
                <Card.Img
                  onClick={() => handleShow(a)}
                  variant="top"
                  src={a.imageURL}
                  height={"250px"}
                />
                <Card.Body>
                  <h5>{index + 1}</h5>
                  <div className="d-flex justify-content-between align-items-center ">
                    <Card.Title onClick={() => handleShow(a)}>
                      {a.caption}
                    </Card.Title>
                    <button onClick={() => onDeleteClick(a.id)} className="btn">
                      <i className="fa-solid fa-trash text-danger"></i>
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      {selectedVideo && (
        <Modal show={show} onHide={handleClose} size="lg" centered className="">
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

export default Allvideos;
