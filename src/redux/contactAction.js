export const Submit_Form="Submit_Form";
export const submitData=(fname,lname,contact_num)=>{
    return{
        type:Submit_Form,
        Fname:fname,
        Lname:lname,
        contact:contact_num
    }
}

export const Delete_Data="Delete_Data";

export const deleteData=(ind)=>{
   return{
    type:Delete_Data,
    index:ind,
   }  
}
export const Update_Data="Update_Data"
export const updateData=()=>{
    return{
        type:Update_Data,
    }
}