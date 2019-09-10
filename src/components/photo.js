import React from "react";
import { Card, Form, Button, Navbar } from "react-bootstrap";
import "./App.css";
import "mdbreact";
import { Parallax } from "react-parallax";

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
      <Parallax bgImage={bg} strength={3000}>
        
        <div style={{ height: 11500 }}>
          <div style={{ insideStyles }}>
            <Navbar className="navbar navbar-dark bg-transparent" fixed="top">
              <div align="left">
                <img src="logo.png" width="200px"></img>
              </div>
            </Navbar>
            <div>
              <center>
                <img
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
                      <Card.Title align="left"  >{photo.title}</Card.Title>

                      <Form >
                        <Form.Group align="left" width="100px" controlId="formBasicEmail">
                          <Form.Control
                          
                            type="text"
                            placeholder="Comment here"
                          />
                        </Form.Group>
                        <Button variant="light" align="right" type="submit">
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
