import React from 'react'
import { Container, Row } from "react-bootstrap";
import  ProductCard from "./ProductCard/ProductCard"


export default function Section({ title, bgColor, productItems }) {
  return (
    <section style={{ background: bgColor }}>
    <Container>
      <div className="heading">
        <h1>{title}</h1>
      </div>
      <Row className="justify-content-center">
        {productItems.map((productItem) => {
         
          return (
            <ProductCard
              key={productItem._id}
              title={title}
              productItem={productItem}
            />
          );
        })}
      </Row>
    </Container>
  </section>
  )
}
