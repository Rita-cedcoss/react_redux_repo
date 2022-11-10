import React, { useRef } from "react";
import "./components.css";
import { useDispatch, useSelector } from "react-redux";
import { submitData } from "../redux/contactAction";
import { deleteData } from "../redux/contactAction";
import { updateData } from "../redux/contactAction";

const ContactDetail = (props) => {
   let regname=/^[A-Z][a-z][A-Za-z]*$/;
  //useSelector hook
  let ind;
  const contactData = useSelector((state) => state.contactData);
  //useDispatch hook
  const dispatch = useDispatch();
  //reference of input 
  let fname=useRef();
  let lname=useRef();
  let contact=useRef();
 //function of add ,delete,edit


  const addData = (e) => {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let contact_num = document.getElementById("contact").value;
    let btntext=e.target.innerHTML
    console.log(btntext);
   
    if(btntext=="Submit"){
      if(fname==""||lname==""||contact_num==""){
        alert("Please fill all Fields")
     }else{
      dispatch(submitData(fname, lname, contact_num));
    }
    }
    else if(btntext=="Update Data"){
      console.log(ind);
      contactData[ind].fname=document.getElementById("fname").value;
      contactData[ind].lname=document.getElementById("lname").value;
      contactData[ind].contact_num=document.getElementById("contact").value;
      dispatch(updateData())
      e.target.innerHTML="Submit";    
    }
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("contact").value = "";
  };
  const deleteItem = (e) => {
    let ind = e.target.getAttribute("index");
    console.log(ind);
    dispatch(deleteData(ind));
 
  };
  const editData=(e)=>{
   ind=e.target.getAttribute("index");
   fname.current.value=contactData[ind].fname;
   lname.current.value=contactData[ind].lname;
   contact.current.value=contactData[ind].contact_num;
   console.log(ind);
   document.getElementById("btnSubmit").innerHTML="Update Data";
  }
  return (
    <div id="outer">
      
      <div ID="container">
        <h1>Contact Form</h1>
        <input
          placeholder="First Name"
          id="fname"
          ref={fname}
          className="inputStyle"
          type="text"
        />
        <input
          placeholder="Last Name"
          id="lname"
          ref={lname}
          className="inputStyle"
          type="text"
        />
        <input
          placeholder="Contact Number"
          id="contact"
          ref={contact}
          className="inputStyle"
          type="number"
        />
        <br />
        <button id="btnSubmit" onClick={addData}>
          Submit
        </button>
      </div>

      {(contactData.length>0)? 
  
      <div id="populate">
            <h1>Contact List</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Contact Number</th>
            <th>Action</th>
          </tr>
          {contactData.map((item, i) => {
            return (
              <>
                <tr>
                  <td>
                    {item.fname}&nbsp;&nbsp;{item.lname}
                  </td>
                  <td>{item.contact_num}</td>
                  <td>
                    <button className="btnUpdate" id="edit" index={i} onClick={editData}>Edit</button>
                    <button
                    id="delete"
                      className="btnUpdate"
                      index={i}
                      onClick={deleteItem}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </table>
      </div>:<p></p>}
    </div>
  );
};

export default ContactDetail;
