import React from "react";
import Slider from "../Components/Slider";
import { Container, Row, Col, Card,Button } from "react-bootstrap";
import image from "../1.jpg"


export function Home(){

    return(
        <>
        <Slider />
        <Container style={{paddingTop: '50px'}}>
            <Row>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>Card 1k</Card.Title>
                            <Card.Text>Web Developer</Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>Card 2</Card.Title>
                            <Card.Text>Web Developer</Card.Text>
                            <Button variant="primary" >Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>Card 3 </Card.Title>
                            <Card.Text>Web Developer</Card.Text>
                            <Button variant="primary" >Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Container style={{marginTop: '40px', marginBottom: '40px'}}>
            <Row>
                <Col md={7}>
                    <img src={image} height={400} alt="cosmos"/>
                </Col>
                <Col md={5}>
                    <h2>Web Developer</h2>
                    <p>In the vast expanse of the universe, countless stars twinkle like distant diamonds. These celestial giants, born from collapsing clouds of gas and dust, burn for billions of years, fusing lighter elements into heavier ones. Their immense heat and light bathe planets in their glow, sustaining life as we know it.
                        Stars come in a dazzling array of sizes and colors, each with its own unique story. Some are colossal red giants, while others are diminutive and faint. Some burn with a fierce blue or white light, while others emit a gentle red or orange glow. Their diversity reflects their different ages, compositions, and eventual fates.
                        Studying stars allows us to understand the origins of our own solar system and potentially discover planets capable of harboring life. Their light whispers tales of the universe's history, from the Big Bang to the formation of galaxies and the ongoing cycle of stellar birth and death. As we gaze upon the starry night sky, we are reminded of our place in this vast and wondrous cosmos.</p>
                </Col>
            </Row>
        </Container>
        
        </>
    )
}