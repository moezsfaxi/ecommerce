const express =require('express')
const myschema = require('../db/Schema')

const route=express.Router()



route.get('/discount',(req,res)=>{
 
const result = myschema.theSchema.getdiscount().then((results)=>{
  res.send(results)  
}).catch((e)=>{

 res.send("not working",e)   
})


})
route.get('/slider',(req,res)=>{
  const result = myschema.theSchema.getslider().then((results)=>{
    res.send(results)  
  }).catch((e)=>{
  
   res.send("not working",e)   
  })
  


})
route.get('/product',(req,res)=>{

  const result = myschema.theSchema.getproduct().then((results)=>{
    res.send(results)  
  }).catch((e)=>{
  
   res.send("not working",e)   
  })
  

})

route.post('/register',(req,res)=>{
  const isusernameexist=  findtheuser(req.body.user).then((userdata)=>{
    if(!userdata){
      const theuser=new myschema.registering.Register({user: req.body.user,pwd:req.body.pwd})
      console.log(req.body)
      theuser.save()
      res.send("it is saved") 

    }
    else{
     res.status(409).send('Username Taken') 

    }



  })


  



})
route.post('/auth',(req,res)=>{
const isusernameexist=  findtheuser(req.body.user).then((userdata)=>{
if(!userdata){
res.status(400).send("user doesn't exist")
}
else if(req.body.pwd !== userdata.pwd){

res.status(400).send("wrong password")

}
else{

res.status(200).send(userdata)
}
})
})
async function findtheuser(passed){
const result = await myschema.registering.Register.findOne({user:passed})
return result  

}
async function deleteproduct(idpost){
  const result= await myschema.schemas.Product.deleteOne({_id:idpost})
  return result
}
async function deletediscount(idpost){
  const result= await myschema.schemas.Discount.deleteOne({_id:idpost})
  return result
}
async function deleteslider(idpost){
  const result= await myschema.schemas.Slider.deleteOne({_id:idpost})
  return result
}


route.post('/products',(req,res)=>{
console.log(req.body);
const mypost=myschema.schemas.Product(req.body);
mypost.save()
res.send("got the post")
})

route.post('/discounts',(req,res)=>{
console.log(req.body);
const mypost=myschema.schemas.Discount(req.body);
mypost.save()
res.send("got the post")
})

route.post('/sliders',(req,res)=>{
console.log(req.body);
const mypost=myschema.schemas.Slider(req.body);
mypost.save()
res.send("got the post")
})
route.delete('/delete/:id/:type',(req,res)=>{
  const theid=req.params.id
  const thetype=req.params.type
  console.log(theid);
  console.log(thetype);
  if(thetype==="product"){
  const deletethisproduct=deleteproduct(theid).then((response)=>{
    console.log(response)
    res.send("post deleted")
  }).catch((err)=>{
    console.log(err)
  })  

  }
  else if(thetype==="discount"){
    const deletethisdiscount=deletediscount(theid).then((response)=>{
      console.log(response)
      res.send("post deleted")
    }).catch((err)=>{
      console.log(err)
    })  


  }else if(thetype==="slider"){
    const deletethisslider=deleteslider(theid).then((response)=>{
      console.log(response)
      res.send("post deleted")
    }).catch((err)=>{
      console.log(err)
    }) 


  }

  

})



module.exports=route