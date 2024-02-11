import React,{useEffect,useState} from 'react'
import axios from '../../api/axios';
import DeleteButton from './DeleteButton';


export default function Deletepost() {
    const [products,setProducts]=useState([])  ;
    const [sliderdata,setSliderdata]=useState([])
    const [discountProducts,setDiscountProducts]=useState([])
    

    useEffect(()=>{
        axios.get('/product').then((result)=>{
       
        setProducts(result.data) 
        
        }).catch((err)=>{
         console.log("error",err)
        })
        //
        axios.get('/discount').then((result)=>{
            setDiscountProducts(result.data) 
            }).catch((err)=>{
             console.log("error",err)
            })
        //
        axios.get('/slider').then((result)=>{
        
        setSliderdata(result.data) 
        
               
        }).catch((err)=>{
                 console.log("error",err)
        })    
      


       },[])
     
 
       


  return (
    <div>
     <h1>products</h1>
     <ol>
    {products.map((item)=> <li key={item._id} > {item.productName} <img src={item.imgUrl} alt={item.productName} />   <DeleteButton idofthedeletedpost={item._id} type={"product"} /> </li> )}  
      
    </ol>   

    <h1>discount</h1>
     <ol>
    {discountProducts.map((item)=> <li key={item._id} > {item.productName} <img src={item.imgUrl} alt={item.productName} />    <DeleteButton idofthedeletedpost={item._id} type={"discount"} /> </li> ) }  
    </ol>    
    <h1>slider</h1>
     
    {sliderdata.map((item)=>  {
     return   (<div key={item._id} >
      <img src={item.cover} alt={item.title} /> 
      <DeleteButton idofthedeletedpost={item._id} type={"slider"} />

     </div>) } )}      
    
    </div>
  )
}
