import React, { useEffect, useState } from 'react'

const GetApi = () => {
    const [Data,setData]=useState([]);
   useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts?&_limit=5")
        .then((res)=>{
            res.json().then(result=>{
                setData([...result]);
            })
        })
    },[])
    return (
        <div id="outer">
            {/* <button>Get Data</button><button>Post Data</button> */}
        <div id="gridContainer">
           {
            Data.map((item,i)=>{
                return(
                    <>
                    <div id="grid">
                      <div id="Title"><h3>{item.id}</h3><h2>{item.title}</h2></div>
                      <div id="Content"><p>{item.body}</p></div>
                    </div>
                    </>
                )
            })
           }
        </div>    
    </div>
  )
}

export default GetApi