import React,{ Fragment, useEffect, useState }  from 'react'
import Banner from "../components/Banner/Banner";
import { Container } from "react-bootstrap";
import ShopList from "../components/ShopList";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import ProductReviews from "../components/ProductReviews/ProductReview";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import axios from '../api/axios';

export default function Product() {
  const [products,setProducts]=useState([])
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { id } = useParams();
  console.log(id)
  useEffect(()=>{
    axios.get('/product').then((result)=>{
   
    setProducts(result.data) 
    console.log(result.data)
    console.log(selectedProduct)
     
    
    }).catch((err)=>{
     console.log("error",err)
    })

   },[])
   
   useEffect(()=>{
    setSelectedProduct(products.filter((item) => parseInt(item._id) === parseInt(id))[0]) 
    console.log((selectedProduct))
   },[products])
  




    
   // console.log(id)
 
      //
    const [relatedProducts, setRelatedProducts] = useState([]);
    useEffect(() => {
      window.scrollTo(0, 0);
      setSelectedProduct(
        products.filter((item) => parseInt(item._id) === parseInt(id))[0]
      );
      setRelatedProducts(
        products.filter(
          (item) =>
            item.category === selectedProduct?.category &&
            item._id !== selectedProduct?._id
        )
      );
    }, [selectedProduct, id]);
  
    useWindowScrollToTop();
  return (
    <Fragment>
    <Banner title={selectedProduct?.productName} />
    <ProductDetails selectedProduct={selectedProduct} />
    <ProductReviews selectedProduct={selectedProduct} />
    <section className="related-products">
      <Container>
        <h3>You might also like</h3>
      </Container>
      <ShopList productItems={relatedProducts} />
    </section>
  </Fragment>
  )
}
