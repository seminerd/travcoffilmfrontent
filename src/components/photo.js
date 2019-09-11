import React from "react";
import { Card, Form, Navbar } from "react-bootstrap";
import "./App.css";
import { Button } from "mdbreact";
import { Parallax } from "react-parallax";
var width = window.screen.availWidth;
var height = window.screen.availHeight;
var ratio = (height/width);
const strength = width*1.5;
const fix = ratio/0.041;
const bg = "bg.jpg";
const insideStyles = {
  padding: 20,
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
const Photos = ({ photos }) => {
  return (
    <React.Fragment>
      <Parallax bgImage={bg} bgImageWidth={width*1.5} bgImageHeight={width*10} strength={width*2}>
        <div >
          <div style={{ insideStyles }}>
            <Navbar className="navbar navbar-dark bg-transparent" fixed="top">
              <div align="left">
                <img src="logo.png" alt="logo" width="200px"></img>
              </div>
            </Navbar>
            <div>
              <center>
                <img
                  alt="header"
                  src="enjoy.png"
                  width="300px"
                  style={{ marginBottom: "60px", marginTop: "50px" }}
                ></img>
              </center>
            </div>
            {photos.map(photo => (
              <div key={photo.id} style={{ marginBottom: "40px" }}>
                <center>
                  <Card
                    className="shadow hoverable"
                    style={{
                      width: "42rem"
                    }}
                  >
                    <Card.Img
                      variant="top"
                      key={photo.id}
                      src={photo.source}
                      alt={photo.id}
                    />
                    <Card.Body>
                      <Card.Title align="left">{photo.title}</Card.Title>

                      <Form align="right">
                        <Form.Group
                          align="left"
                          width="100px"
                          controlId="formBasicEmail"
                        >
                          <Form.Control
                            type="text"
                            placeholder="Comment here"
                          />
                        </Form.Group>
                        <Button type="button" className="btn btn-light-blue">
                          comment~
                        </Button>
                      </Form>

                      <Card.Text></Card.Text>
                    </Card.Body>
                  </Card>
                </center>
              </div>
            ))}
          </div>
          <div>
            <center>
              <img
                alt="footer"
                src="footer.npg.png"
                width="400px"
                style={{ marginTop: "50px" }}
              ></img>
            </center>
          </div>
        </div>
      </Parallax>
    </React.Fragment>
  );
};
export default Photos;
