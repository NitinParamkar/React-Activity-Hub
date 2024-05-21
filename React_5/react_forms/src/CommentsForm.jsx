import { useState } from "react";
export default function CommentsForm(){
        let [FormData, setFormData] = useState({
            username: "",
            remarks: "",
            rating: 5
        });
let handleInputChange = (event)=>{
    setFormData((currData)=>{
        return {...currData, [event.target.name]: event.target.value}
    })
}

let handleSubmit=(event)=>{
    event.preventDefault();
    console.log(FormData);  
    setFormData({
        username: "",
        remarks: "",
        rating: 5
    });
}

return (
    <div>
        <h4>Give a Comment!</h4>
        <form onSubmit={handleSubmit}>
            <label htmlFor="u_name">User Name:</label>
            &nbsp; &nbsp;
            <input placeholder="username" type="text" value={FormData.username} onChange={handleInputChange} id="u_name" name="username"/>
            <br></br><br></br>
             
            <label htmlFor="rmks">Remarks:</label>
            &nbsp; &nbsp;
            <textarea placeholder="add few remarks" value={FormData.remarks} onChange={handleInputChange} id="rmks" name="remarks">Remarks</textarea>
            <br></br><br></br>
            
            <label htmlFor="rate">Rating:</label>
            &nbsp; &nbsp;
            <input placeholder="rating" type="number" min={1} max={5} value={FormData.rating} onChange={handleInputChange} id="rate" name="rating"/>
            <br></br><br></br>

            <button>Add Comment</button>
        </form>
        </div>
        );
}