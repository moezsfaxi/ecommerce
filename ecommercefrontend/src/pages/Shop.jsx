import React,{useEffect} from 'react'
import { Col, Container, Row } from "react-bootstrap";
import FilterSelect from "../components/FilterSelect";
import SearchBar from "../components/SearchBar/SearchBar";
import { Fragment, useState } from "react";
//import { products } from "../utils/products";
import ShopList from "../components/ShopList";
import Banner from "../components/Banner/Banner";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import axios from '../api/axios';

export default function Shop() {
  const [products,setProducts]=useState([])
  const [filterList, setFilterList] = useState([]);
 
 
 
  useEffect(()=>{
    axios.get('/product').then((result)=>{
   
    setProducts(result.data) 

   
    
    }).catch((err)=>{
     console.log("error",err)
    })

   


   },[])
   useEffect(()=>{
    setFilterList(products.filter((item) => item.category === "sofa" ))

   },[products])
  
  
   useWindowScrollToTop();


    
  return (
    <Fragment>
      <Banner title="product" />
      <section className="filter-bar">
        <Container className="filter-bar-contianer">
          <Row className="justify-content-center">
            <Col md={4}>
              <FilterSelect setFilterList={setFilterList} />
            </Col>
            <Col md={8}>
              <SearchBar setFilterList={setFilterList} />
            </Col>
          </Row>
        </Container>
        <Container>
          <ShopList productItems={filterList} />
        </Container>
      </section>
    </Fragment>
  )
}
