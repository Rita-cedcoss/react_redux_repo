import React, { useEffect, useState } from 'react'

const AsyncWait = () => {
     const [data,setData]=useState([]);
    const fetchData=async()=>{
        const response=await fetch("https://jsonplaceholder.typicode.com/posts?&_limit=5");
        return response.json();
    }
    useEffect(() => {
        fetchData()
          .then((res) => {
            setData(res)
            console.log(res);
          })
          
      }, [])    
     const addPost=async ()=>{
        const postResponse=await fetch("https://jsonplaceholder.typicode.com/posts?&_limit=5",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({title:"dasddsfsf",content:"sdfdsgdfgdfgfgf"})
        })
        return postResponse.json()
        .then((res) => {
          console.log(res);
        })   
     } 
     const deleteData=async()=>{
        const deleteResponse=await fetch("https://dummyjson.com/products/1",{
            method: 'DELETE',
        }) 
        return deleteResponse.json()
        .then(res=>{
            console.log(res);
        })
     }
    return (
    <div id="asyncContainer">
        <table>
            <tr><th>Title</th><th>Content</th></tr>
           {data.map((item)=>{
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
export default AsyncWait