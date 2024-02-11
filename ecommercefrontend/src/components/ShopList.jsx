import React , {useEffect} from 'react'
import { Row } from 'react-bootstrap';
import ProductCard from "./ProductCard/ProductCard"

export default function ShopList({productItems}) {
    useEffect(() => {}, [productItems]);
    if (productItems.length === 0) {
        return <h1 className="not-found">Product Not Found !!</h1>;
      }
  return (
    <Row className="justify-content-center">
    {productItems.map((productItem) => {
      return (
        <ProductCard
          key={productItem._id}
          title={null}
          productItem={productItem}
        />
      );
    })}
  </Row>
  )
}
