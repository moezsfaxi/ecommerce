import React from 'react'
import {Col,Container,Row } from "react-bootstrap"
import productBg from "../../Images/table.jpg"
import "./Banner.css"
export default function Banner({title}) {
  return (
  <div className='image-container' > 
        <img src={productBg} alt="Product-bg" />
        <div className='overlay'>
            <Container>
                <Row>
                    <Col>
                    <h2> {title }   </h2>
                    
                    </Col>

                    
                </Row>



            </Container>




        </div>

  </div>
  )
}


