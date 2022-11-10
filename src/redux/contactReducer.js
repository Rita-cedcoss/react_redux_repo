import { Submit_Form } from "./contactAction"
import { Delete_Data } from "./contactAction"
import { Update_Data } from "./contactAction"
const initialState={
    contactData:[{"fname":"Rita" ,"lname":"Pal","contact_num":9876543212},
    {"fname":"Rita" ,"lname":"Pal","contact_num":9876543212}]
}
const reducer=(state=initialState,action)=>{
       switch (action.type) {
        case Submit_Form:return{
            ...state,
            contactData:[...state.contactData,{"fname":action.Fname ,"lname":action.Lname,"contact_num":action.contact}],
        }
        case Delete_Data:
        let data =state.contactData;
        data.splice(action.index,1)   
        return{
            ...state,
            contactData:[...data]
            // contactData:state.contactData.splice()
        }
        case Update_Data:return{
            ...state,
            contactData:[...state.contactData]
            // contactData:[...state.contactData,{"fname":action.Fname ,"lname":action.Lname,"contact_num":action.contact}]

        }
        default:return state;     
       }
}
export default reducer