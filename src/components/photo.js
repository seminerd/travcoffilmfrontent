import React from "react";
import { Card, Form, Button, Navbar } from "react-bootstrap";
import "./App.css";
import "mdbreact";

const Photos = ({ photos }) => {
  return (
    <React.Fragment>
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
                width: "45rem"
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

                {/* <Form align="left">
                <Form.Group width="100px" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Comment here" />
                </Form.Group>
                <Button variant="light" type="submit">
                  Comment
                </Button>
              </Form> */}

                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </center>
        </div>
      ))}
      <div>
        <center>
          <img
            src="footer.npg.png"
            width="400px"
            style={{ marginTop: "50px" }}
          ></img>
        </center>
      </div>
    </React.Fragment>
  );
};
export default Photos;
