import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import photo from '../3.jpg'

export default function Slider(){
    return(
    <Carousel>
        <Carousel.Item style={{'height':''}}>
            <img 
                className="d-block w-100"
                src={photo}
                alt="1st slide"
            />
            <Carousel.Caption>
                <h1>1st slide</h1>
                <h3>Web Developer</h3>
            </Carousel.Caption>
            
        </Carousel.Item>
        <Carousel.Item >
            <img 
                className="d-block w-100"
                src={photo}
                alt="1st slide"
            />
            <Carousel.Caption>
                <h1>2nd slide</h1>
                <h3>Web Developer</h3>
            </Carousel.Caption>
            
        </Carousel.Item>
        <Carousel.Item >
            <img 
                className="d-block w-100"
                src={photo}
                alt="1st slide"
            />
            <Carousel.Caption>
                <h1>3rd slide</h1>
                <h3>Web Developer</h3>
            </Carousel.Caption>
            
        </Carousel.Item>
        
    </Carousel>
)}