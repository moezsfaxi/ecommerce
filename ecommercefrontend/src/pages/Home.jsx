import React,{Fragment,useEffect,useState,useContext} from 'react'
import Wrapper from "../components/Wrapper/Wrapper"
import Section from "../components/Section";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import AuthContext from "../context/AuthProvider";

import axios from '../api/axios';
export default function Home() {
  const {auth,setAuth } = useContext(AuthContext);
    const [products,setProducts]=useState([])
    const [discountProducts,setDiscountProducts]=useState([])
    useEffect(()=>{
     axios.get('/product').then((result)=>{
    
     setProducts(result.data) 
    // console.log(auth)
     
     }).catch((err)=>{
      console.log("error",err)
     })
     axios.get('/discount').then((result)=>{
      setDiscountProducts(result.data) 
      }).catch((err)=>{
       console.log("error",err)
      })


    },[])



    const newArrivalData = products.filter(
        (item) => item.category === "mobile" || item.category === "wireless"
      );
      const bestSales = products.filter((item) => item.category === "sofa");
      useWindowScrollToTop();
  return (
    <Fragment>
    <SliderHome />
    <Wrapper />
    <Section
      title="Big Discount"
      bgColor="#f6f9fc"
      productItems={discountProducts}
    />
    <Section
      title="New Arrivals"
      bgColor="white"
      productItems={newArrivalData}
    />
    <Section title="Best Sales" bgColor="#f6f9fc" productItems={bestSales} />
  </Fragment>
  )
}
