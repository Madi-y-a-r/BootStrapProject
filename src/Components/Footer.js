import React from "react";
import { Container } from "react-bootstrap";


export  function Footer(){
    return(
        <>
        <Container fluid style={{ backgroundColor:'#212529', color:'white'}}>
            <Container style={{display:'flex', justifyContent: 'space-between', padding: '10px'}}>
                <p> Web Developer Blog</p>
            </Container>

        </Container>
        </>
    )
}