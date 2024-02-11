import React,{useState,useEffect} from 'react'
import "./SearchBar.css"
import axios from '../../api/axios';


export default function SearchBar({setFilterList}) {
const [products,setProducts]=useState([])  
const [searchWord,setSearchWord]=useState(null);
  
  useEffect(()=>{
    axios.get('/product').then((result)=>{
   
    setProducts(result.data) 
    
    }).catch((err)=>{
     console.log("error",err)
    })
   },[])
const handleChange=(e)=>{
setSearchWord(e.target.value);
console.log(e.target.value)
console.log(searchWord)

setFilterList(
products.filter((item)=>
    item.productName?.toLocaleLowerCase().includes(searchWord?.toLocaleLowerCase())

     
)

)

}

  return (
    <div className="search-container">
    <input type="text" placeholder="Search..." onChange={handleChange} />
    <ion-icon name="search-outline" className="search-icon"></ion-icon>
  </div>
  )
}
