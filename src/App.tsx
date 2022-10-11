import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App" role="banner">
            <h1 className="banner">
                Madox Hussey - Hello World - COS420 with React Hooks and
                TypeScript with React Hooks and TypeScript
            </h1>
            <img
                src="https://image.shutterstock.com/image-vector/face-emoticon-icon-vector-logo-260nw-1714204030.jpg"
                alt="A smiley face"
            />
            <Container>
                <Row>
                    <Col>
                        <div className="App-rectangle">Red box</div>
                        <ul>
                            <li>First item</li>
                            <li>Second item</li>
                            <li>Third item</li>
                        </ul>
                    </Col>
                    <Col>
                        <div className="App-rectangle">Red box</div>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
