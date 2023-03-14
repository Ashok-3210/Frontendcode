
import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [Otp, SetOTP] = useState('');
    let OtpValue = '';
    const [isOpened, setIsOpened] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        if(Otp === pass){
    alert("OTP Validation is done Successfully");
        } else {
            alert("Please enter valid OTP show in browser");
        }
    }
    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
             var digits='0123456789';
        let OTP='';
        for(let i=0; i < 4; i++){
            OtpValue +=digits[Math.floor(Math.random()*10)];
        }
        SetOTP(OtpValue);
      }
    
    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="enter Email or Moblie number" id="email" name="email" />
               
                <input type="button" value="Submit" onClick={toggle} />

                {isOpened && (
        <div>
           <p>OTP: {Otp}</p> 
         <label htmlFor="password"></label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="text" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
        </div>
      )}
                
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>

        
    )
}