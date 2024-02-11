import React,{useEffect,useState} from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Container } from "react-bootstrap"
import  Slidercard from "./SliderCard/Slidercard"
//import { SliderData } from "../utils/products"
import axios from '../api/axios';

export default function SliderHome() {
  const [sliderdata,setSliderdata]=useState([])
  useEffect(()=>{
    axios.get('/slider').then((result)=>{
    
      setSliderdata(result.data) 
     
      }).catch((err)=>{
       console.log("error",err)
      })



  },[])



    const settings = {
        nav:false,
        infinite: true,
        speed:500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
        autoplay: true,
      }
  return (
    <section className='homeSlide'>
    <Container>
      <Slider {...settings}>
      {sliderdata.map((value, index) => {
        return (
          <Slidercard key={index} title={value.title} cover={value.cover} desc={value.desc} />
        )
      })}
    </Slider>
    </Container>
  </section>
  )
}
