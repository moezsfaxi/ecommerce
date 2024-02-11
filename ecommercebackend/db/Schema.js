const mongoose =require('mongoose');
/// schemas
const discountSchema=new mongoose.Schema({
   
    productName:String,
    imgUrl:String,
    category:String,
    price:Number,
    discount:Number,
    shortDesc:String,
    description:String,
    reviews:[{
        rating:Number,
        text:String
    }],
    avgRating:Number
    })
    const sliderSchema=new mongoose.Schema({
    
    title:String,
    desc:String,
    cover:String
    
    })
    const productSchema=new mongoose.Schema({
     
        productName:String,
        imgUrl:String,
        category:String,
        price:Number,
        shortDesc:String,
        description:String,
        reviews:[{
            rating:Number,
            text:String
        }],
        avgRating:Number
    
    
    })

    const registerSchema=new mongoose.Schema({
       
      user:String,
      pwd:String,

        
        })

    
     const Discount = mongoose.model("Discount",discountSchema)
     const Slider = mongoose.model("Slider",sliderSchema)
     const Product = mongoose.model("Product",productSchema)
     const Register = mongoose.model("Register",registerSchema)
    


   async function getdiscount(){

        const findings= await Discount.find();
        return findings
        
        }
        
   async function getproduct(){

    const findings= await Product.find();
    return findings
    
    }
    
   async function getslider(){

    const findings= await Slider.find();
    return findings
    
    }
  




   module.exports.theSchema={getdiscount,getproduct,getslider}   
   module.exports.registering={Register}
   module.exports.schemas={Discount,Product,Slider}