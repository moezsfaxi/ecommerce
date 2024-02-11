import React,{useState,useEffect} from 'react'
import Select from 'react-select';
import axios from '../api/axios';


const options=[
    { value: "sofa", label: "Sofa" },
    { value: "chair", label: "Chair" },
    { value: "watch", label: "Watch" },
    { value: "mobile", label: "Mobile" },
    { value: "wireless", label: "Wireless" },

];

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "#0f3460",
        color: "white",
        borderRadius: "5px",
        border: "none",
        boxShadow: "none",
        width: "200px",
        height: "40px",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "#0f3460" : "white",
        color: state.isSelected ? "white" : "#0f3460",
        "&:hover": {
        backgroundColor: "#0f3460",
        color: "white",
        },
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "white",
    }),
};




export default function FilterSelect({setFilterList}) {
    const [products,setProducts]=useState([])  
    useEffect(()=>{
        axios.get('/product').then((result)=>{
       
        setProducts(result.data) 
        
        }).catch((err)=>{
         console.log("error",err)
        })
       
       },[])

    const handleChange=(selectedOption)=>{
       setFilterList(products.filter(item => item.category===selectedOption.value )) 


    }

  return (
    <Select
    options={options}
    defaultValue={{value: "", label: "Filter By Category" }}
    styles={customStyles}
    onChange={handleChange}
    />
  )
}
