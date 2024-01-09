import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";

function Home() {
    return (
       
        <Row>
            <Col md={6} className="d-flex flex-direction-column align-items-center justify-content-center">
                <div class="box">
                    
                    <h1>Share the world with your friends,colleagues,Teammates...🫂</h1>
                    <p>Chat App lets you connect with the world🌍</p>
                    <LinkContainer to="/login">
                       <h1> <Button variant="success">
                            Get Started <i className="fas fa-comments home-message-icon"></i>
                        </Button>
                        </h1>
                    </LinkContainer>
                </div>
            </Col>
            <Col md={6} className="home__bg"></Col>
        </Row>
       
    );
}

export default Home;
