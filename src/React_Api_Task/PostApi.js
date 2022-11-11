import React from 'react'

const PostApi = () => {
     const dataPost=()=>{
        let title=document.getElementById("title").value;
        let body=document.getElementById("Description").value;
        fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({title,body})
})
.then(res => res.json())
.then(result=>{
    console.log(result);
});
     }

const deleteData=()=>{
    fetch('https://dummyjson.com/products/1', {
  method: 'DELETE',
})
.then(res => res.json())
.then(result=>{
    console.log(result);
});
}

    return (
    <>
    <div id="postContainer">
      <input placeholder='Title' id="title" type="text"/>
      <input placeholder='Description' id="Description" type="text"/><br/>
      <button onClick={dataPost}>Post Data</button>
      
    </div>
    <h1>Task3 : Perform a DELETE request to delete a post.</h1>
    <center><button onClick={deleteData} className="btnDelete">Delete</button></center>
    </>
  )
}

export default PostApi