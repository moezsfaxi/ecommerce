import React from 'react'
import axios from '../../api/axios'

export default function DeleteButton({idofthedeletedpost,type}) {

const deletethepost=()=>{

axios.delete(`/delete/${idofthedeletedpost}/${type}`).then((response)=>{
console.log(response)

}).catch((err)=>{
console.log(err)

})



}


  return (
   <button onClick={deletethepost} >delete this post</button>
  )
}
