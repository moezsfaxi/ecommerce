import React from 'react'
import './create.css'
import axios from '../../api/axios';
export default function () {

   const handlesubmit=(e)=>{
     //console.log(e.target.productName.value)
    e.preventDefault();
    const newpost=
      {     
        productName:e.target.productName.value,
        imgUrl:e.target.imgUrl.value,
        category:e.target.category.value,
        price:e.target.price.value,
        shortDesc:e.target.shortDesc.value,
        description:e.target.description.value,
        reviews:[{
            rating:e.target.rating.value,
            text:e.target.ratingdescription.value,
        }],
        avgRating:e.target.avgRating.value,
    }
axios.post('/products',newpost).then((respose)=>{
console.log(respose)

}).catch((err)=>{
  console.log(err)
})


   } 
   const handlesubmitfordiscount=(e)=>{
    const newpost=
    {     
      productName:e.target.productName.value,
      imgUrl:e.target.imgUrl.value,
      category:e.target.category.value,
      price:e.target.price.value,
      discount:e.target.discount.value,
      shortDesc:e.target.shortDesc.value,
      description:e.target.description.value,
      reviews:[{
          rating:e.target.rating.value,
          text:e.target.ratingdescription.value,
      }],
      avgRating:e.target.avgRating.value,
  }
  axios.post('/discounts',newpost).then((respose)=>{
    console.log(respose)
    
    }).catch((err)=>{
      console.log(err)
    })
    




   }
   const handlesubmitforslider=(e)=>{
    const newpost={
    
      title:e.target.productName.value,
      desc:e.target.description.value,
      cover:e.target.imgUrl.value
      
      }


    
   }





  return (
    <div className='createlayout'>
     <div className='maingrid'>
        {/* 1*/}
        <form className='createform grid-item' onSubmit={handlesubmit} >
 
 <legend>create post for products  </legend>      
 <label htmlFor="productName">productName:</label>    
 <input required type="text" id='productName' />   
 <label htmlFor="imgUrl">imgUrl:</label>    
 <input required type="text" id='imgUrl' />   
 <label htmlFor="category">category:</label>    
 <input required type="text" id='category' />   
 <label htmlFor="price">price:</label>    
 <input required type="number" step="0.01" id='price' />   
 <label htmlFor="shortDesc">shortDesc:</label>    
 <input required type="text" id='shortDesc' />   
 <label htmlFor="description"> description:</label>    
 <input required type="text" id='description' />  
 <label required htmlFor="rating">rating:</label>    
 <input required type="number" step="0.01" id='rating' />   
 <label htmlFor="ratingdescription">rating description:</label>    
 <input required type="text" id='ratingdescription' />   
 <label htmlFor="avgRating">avgRating:</label>    
 <input required type="number" step="0.01" id='avgRating' />        
 <button>send form</button>        
</form>   

        {/* 2*/}
        <form className='createform grid-item' onSubmit={handlesubmitfordiscount} >
 
 <legend>create post for discount </legend>      
 <label htmlFor="productName">productName:</label>    
 <input required type="text" id='productName' />   
 <label htmlFor="imgUrl">imgUrl:</label>    
 <input required type="text" id='imgUrl' />   
 <label htmlFor="category">category:</label>    
 <input required type="text" id='category' />   
 <label htmlFor="price">price:</label>    
 <input required type="number" step="0.01" id='price' />  
 <label htmlFor="discount">discount:</label>    
 <input required type="number" id='discount' />   
 <label htmlFor="shortDesc">shortDesc:</label>    
 <input required type="text" id='shortDesc' />   
 <label htmlFor="rating">rating:</label>    
 <input required type="number" step="0.01" id='rating' />   
 <label htmlFor="ratingdescription">rating description:</label>    
 <input required type="text" id='ratingdescription' />   
 <label htmlFor="avgRating">avgRating:</label>    
 <input required type="number" step="0.01" id='avgRating' />        
 <button>send form</button>        
</form>   
        {/* 3*/}
        <form className='createform grid-item' onSubmit={handlesubmitforslider} >
 
 <legend>create post for the slider  </legend>      
 <label htmlFor="productName">productName:</label>    
 <input required type="text" id='productName' />   
 <label htmlFor="imgUrl">imgUrl:</label>    
 <input required type="text" id='imgUrl' />      
 <label htmlFor="description"> description:</label>    
 <input required type="text" id='description' />   
       
 <button>send form</button>        
</form>   
        
    </div>  


    </div>
  )

  }