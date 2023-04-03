import React, { useState } from "react";
import axios from "axios"

 
export const Login = (props) => {
    const [email, setEmail] = useState('')
    const [show,setshow]=useState(false);
    const[serverotp,setserverotp]=useState('');
    const[userotp,setuserotp]=useState("")
     //const [pass, setPass] = useState('');
    const [Otp, SetOTP] = useState('');
    // let OtpValue = '';
    // const [isOpened, setIsOpened] = useState(false);

    
    const handleSubmit = (e) => {
           e.preventDefault();
           const data={
            Email:email
           }
           axios.post("https://localhost:7041/api/User/logincheck",data)
           .then(res=>{
            alert(res.data);
             setserverotp(res.data)
             

             if(res.data==="Invalid User"){
                setshow(show)
             }
             else{
                setshow(!show)
             }


           })
           .catch(res=>{
            console.log(res);
            alert("Email not sent for verification")
           })
      
   }
   const Loginvalidate=(e)=>{
    e.preventDefault();
    if(userotp==serverotp){
        alert("OTP Validation is done Successfully")
    }else{
        alert("Please enter valid OTP show in browser");
    }
   }


    //     if(res ===userotp){
    // alert("OTP Validation is done Successfully");
    //     } else {
    //         alert("Please enter valid OTP show in browser");
    //     }
    
    // function toggle() {
    //     setIsOpened(wasOpened => !wasOpened);
    //          var digits='0123456789';
    //     let OTP='';
    //     for(let i=0; i < 4; i++){
    //         OtpValue +=digits[Math.floor(Math.random()*10)];
    //     }
    //     SetOTP(OtpValue);
    //   }
    
    return (
            
        <div className="auth-form-container">
            <div  className='col-md-6 img'>
               <img src="https://www.terralogic.com/wp-content/themes/terralogic/img/brand-logo.svg" width="200" height="200"/>
            </div>
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input type="email" placeholder="enter Email or Moblie number" value={email} onChange={(e) => setEmail(e.target.value)}  id="email" name="email" />

                <button type="submit">Submit</button>
              {/* <p>  {Otp}</p> */}
                {/* <input type="button" value="Submit"/> */}

                {/* {isOpened && ( */}
        {
               show?<div>
         
                  <label htmlFor="password"></label>
                    <input  onChange={(e) => setuserotp(e.target.value)} type="text" placeholder="********" id="password" name="password" />
                    <button type="submit" onClick={Loginvalidate}>Log In</button>
              </div>:null
        }        
             
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
          
          
        </div>
        
        
        
    )
  
}
