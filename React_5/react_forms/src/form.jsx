import { useState } from "react";
export default function Form(){
    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password: "",
    })
    
    let handleInputChange=(event)=>{
        setFormData((currData)=>{
           return {...currData, [event.target.name]: event.target.value};
        })
    }
    let handleSubmit = (event)=>{
        event.preventDefault();
        setFormData({
            fullName: "",
            userName: "",
            password: "",
        });
    }
    return (<form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label> 
         &nbsp; &nbsp;
         <input placeholder="enter your full name" 
           type="text" 
           value={formData.fullName} 
           id="fullName"
           name="fullName"
           onChange={handleInputChange}
        />
        <br></br><br></br>
        <label htmlFor="userName">User Name</label> 
         &nbsp; &nbsp;
         <input placeholder="enter user name" 
           type="text" 
           value={formData.userName} 
           id="userName"
           name="userName"
           onChange={handleInputChange}
        />
         <br></br><br></br>
        <label htmlFor="password">Password</label> 
         &nbsp; &nbsp;
         <input placeholder="enter password" 
           type="password" 
           value={formData.password} 
           id="password"
           name="password"
           onChange={handleInputChange}
        />
         <br></br><br></br><br></br>
         <button>Submit</button>
    </form>)
}

//we are using htmlfor because normal for is confused with js 'for' which is used for looping.