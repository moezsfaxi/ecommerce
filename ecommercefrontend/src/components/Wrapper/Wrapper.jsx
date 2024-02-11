import React from "react"
import "./Wrapper.css"
import { Col, Container, Row } from "react-bootstrap"
//import { serviceData } from "../../utils/products"

export default function Wrapper() {
  const services = [
    {
      icon: <ion-icon name="car"></ion-icon>,
      title: "Free Shipping",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#fdefe6",
    },
    {
      icon: <ion-icon name="card"></ion-icon>,
      title: "Safe Payment",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#ceebe9",
    },
    {
      icon: <ion-icon name="shield-half-outline"></ion-icon>,
      title: "Secure Payment",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#e2f2b2",
    },
    {
      icon: <ion-icon name="headset"></ion-icon>,
      title: " Back Guarantee",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#d6e5fb",
    },
  ];

  return (
    <section className='wrapper background'>
    <Container>
      <Row>
      {services.map((val, index) => {
        return (
          <Col md={3} sm={5} xs={9} style={{backgroundColor:val.bg}} className='feature' key={index}>
            <div className='icon'>
              {val.icon}
            </div>
            <h3>{val.title}</h3>
            <p>{val.subtitle}</p>
          </Col>
        )
      })}
      </Row>
    </Container>
  </section>
  )
}
