import React from "react";
import { Link } from "react-router-dom";
import gifImg from "../assets/images/33a46f727dbe790d436616a1f56fce9c.gif";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cardImg1 from "../assets/images/cardImg1.jpg";
import cardImg2 from "../assets/images/cardImg2.jpg";
import cardImg3 from "../assets/images/cardImg3.jpg";

const Content = () => {
  return (
      <div className="container  ">
        <div className="row align-items-center ">
          <div className="col-5">
            <h1>
              Welcome to <span className="text-warning">Media Player</span>
            </h1>
            <p>
              Our app features a powerful and intuitive media player designed
              for seamless playback of audio and video content. It supports
              multiple formats, including MP4, WebM, Ogg, and more, ensuring
              smooth and high-quality performance across devices. With a
              user-friendly interface, responsive controls, and plugin-free
              playback, the media player enhances the viewing and listening
              experience. Additional features like play, pause, seek, volume
              control, and fullscreen mode provide complete control over media
              consumption. Optimized for speed and compatibility, it delivers a
              flawless multimedia experience.
            </p>
            <Link to={"/home"} className="btn btn-info">
              Get Started{" "}
            </Link>
          </div>
        <div className="col-1"></div>
          <div className="col-6">
            <img src={gifImg} alt="gif" />
          </div>
        </div>
    
        <div className="mt-5">
          <h1 className="text-center">Features</h1>
          <div className="row">
     
        <div className="col-3" style={{ display: "flex" }}>
        <Card style={{ width: "18rem",height:'20rem', margin: "10px" }}>
            <Card.Img variant="top" src={cardImg1} />
            <Card.Body>
              <Card.Text>
                Managing Videos
                <p>User can upload,view and remove the videos</p>
              </Card.Text>
            </Card.Body>
          </Card>

        </div>
        <div className="col-1"></div>
        <div className="col-4">
        <Card style={{ width: "18rem",height:'20rem', margin: "10px" }}>
            <Card.Img variant="top" src={cardImg3} />
            <Card.Body>
              <Card.Text>
                Managing Videos
                <p>User can upload,view and remove the videos</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
        <Card style={{ width: "18rem",height:'20rem', margin: "10px" }}>
            <Card.Img variant="top" src={cardImg2} />
            <Card.Body>
              <Card.Text>
                Managing Videos
                <p>User can upload,view and remove the videos</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
        </div>

      
          <div className="row border border-3 rounded-5 p-5 m-5">
            <div className="col-5">
              <h3 className="text-danger fw-bolder">Simple,Fastr and Powerful</h3>
            <span className="text-warning">Play Everything:</span><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae aliquam maxime inventore aliquid corrupti recusandae, provident eligendi dolorum unde, vel labore neque rerum. Mollitia molestiae quas totam quaerat delectus quibusdam!</p>
            <span className="text-warning">Play Everything:</span><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae aliquam maxime inventore aliquid corrupti recusandae, provident eligendi dolorum unde, vel labore neque rerum. Mollitia molestiae quas totam quaerat delectus quibusdam!</p>
            <span className="text-warning">Play Everything:</span><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae aliquam maxime inventore aliquid corrupti recusandae, provident eligendi dolorum unde, vel labore neque rerum. Mollitia molestiae quas totam quaerat delectus quibusdam!</p>
            </div>
            <div className="col-1"></div>
            <div className="col-6 " >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Po3jStA673E?si=94prqobrinkkP74u" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
      
      </div>
  );
};

export default Content;
