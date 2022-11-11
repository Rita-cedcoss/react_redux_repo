import React, { useEffect, useState } from 'react'
import axios from "axios";
const AxiosMethod = () => {
     const [axiosData,setAxiosdata]=useState([]);
     useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts?&_limit=5")
        .then(result=>setAxiosdata(result.data))
     },[]) 

     const addPost=()=>{
        axios.post("https://jsonplaceholder.typicode.com/posts?&_limit=5",{
            title:"Axios post method",
            body:"krnrktrtnyr kmtnktnky ketnktnjrtyrnjy kntktnrtkynrt ketnr4ktry knykrnyrty krnyrtynrty krynrtyr"
        }).then(result=>{console.log(result.data)})
      }
      const deleteData=()=>{
     axios.delete("https://dummyjson.com/products/1")
     .then(result=>{
        console.log(result.data);
     })

      }
      return (
        <div id="asyncContainer">
        <table>
            <tr><th>Title</th><th>Content</th></tr>
           {axiosData.map((item)=>{
             return(
                <>
                <tr><td>{item.title}</td><td>{item.body}</td></tr>
                </>
             )
           })}
        </table>
        <br></br>
        <center><button onClick={addPost} id="btnAsyncAdd">Add Post</button><button id="btnAsyncDelete" onClick={deleteData}>Delete Post</button>
        </center>
    </div>
  )
}

export default AxiosMethod