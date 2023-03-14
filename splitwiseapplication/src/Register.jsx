
import React, { useState,useEffect } from "react";
import axios from "axios";
export const Register = (props) => {
    
    const [file, setFile] = useState();
    const [inputValues, setInputValue] = useState({
        Name: "",
        moblie: "",
        email: "",
        // password: "",
        // confirmPassword: ""
      });
    
      const [validation, setValidation] = useState({
        Name: "",
        moblie: "",
        email: "",
        // password: "",
        // confirmPassword: ""
      });
    const [fields,errors] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        const { name, value } = e.target;
       setInputValue({ ...inputValues, [name]: value });
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    

    const handleSubmit = (e) => {
     console.log(file);
       let body = {
        Name:e.target.Name.value,
        Moblie_Number: e.target.moblie.value,
        Email: e.target.email.value,
        ProfilePic: file.name
       }
    axios.post('https://localhost:7041/api/User/register', body)
    .then(response => console.log(response));
    }
    const checkValidation = () => {
        let errors = validation;
    
        //first Name validation
        if (!inputValues.Name.trim()) {
          errors.name = " name is required";
        } else if(inputValues.Name.match(/^[a-zA-Z ]+$/)){
         errors.Name = "";
        }
         else {
          errors.Name = "Please enter Alpabets only";
        }
        //last Moblie validation
        if (!inputValues.moblie.trim()) {
          errors.moblie = "mobile number is required";
        } else if(inputValues.moblie.match(/^[0-9]+$/)){
            if(inputValues.moblie.length>9){
                errors.moblie = "please enter 10 numbers only";
            } else{
                errors.moblie = "";
            }
          
        }
        else {
            errors.moblie = "*Please enter Numbers only";
          }
    
        // // email validation
        // const emailCond =
        //   "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
        if (!inputValues.email.trim()) {
          errors.email = "Email is required";
        } else if (inputValues.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/)) {
          errors.email = "";
        } else {
          errors.email = "Please ingress a valid email address";
        }
    
        //password validation
        // const cond1 = "/^(?=.*[a-z]).{6,20}$/";
        // const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
        // const cond3 = "/^(?=.*[0-9]).{6,20}$/";
        // const password = inputValues.password;
        // if (!password) {
        //   errors.password = "password is required";
        // } else if (password.length < 6) {
        //   errors.password = "Password must be longer than 6 characters";
        // } else if (password.length >= 20) {
        //   errors.password = "Password must shorter than 20 characters";
        // } else if (!password.match(cond1)) {
        //   errors.password = "Password must contain at least one lowercase";
        // } else if (!password.match(cond2)) {
        //   errors.password = "Password must contain at least one capital letter";
        // } else if (!password.match(cond3)) {
        //   errors.password = "Password must contain at least a number";
        // } else {
        //   errors.password = "";
        // }
    
        //matchPassword validation
       /// if (!inputValues.confirmPassword) {
       //   errors.confirmPassword = "Password confirmation is required";
       /// } else if (inputValues.confirmPassword !== inputValues.Password) {
         // errors.confirmPassword = "Password does not match confirmation password";
      //  } else {
        //  errors.password = "";
       // }
    
        setValidation(errors);
      };
      useEffect(() => {
        checkValidation();
      }, [inputValues]);
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-control">
            <input
              placeholder="First Name"
              type="string"
              name="Name"
              id="Name"
              className="input-field"
              onChange={(e) => handleChange(e)}
              value={inputValues.Name}
            />
            {validation.Name && <p>{validation.Name}</p>}
            {validation.Name && console.log(validation)}
          </div>
          <div className="form-control">
            <input
              placeholder="mobile number"
              type="string"
              id="moblie"
              name="moblie"
              className="input-field"
              onChange={(e) => handleChange(e)}
              value={inputValues.moblie}
            />
            {validation.moblie && <p>{validation.moblie}</p>}
          </div>
            <div className="form-control">
            <input
              placeholder="email"
              type="email"
              name="email"
              className="input-field"
              onChange={(e) => handleChange(e)}
              value={inputValues.email}
            />
          </div>
          {validation.email && <p>{validation.email}</p>}
          {/* <div className="form-control">
            <input
              placeholder="password"
              type="password"
              name="password"
              className="input-field"
              onChange={(e) => handleChange(e)}
              value={inputValues.password}
              required
            />
            {validation.password && <p>{validation.password}</p>}
          </div>
          <div className="form-control">
            <input
              placeholder="confirm password"
              type="password"
              name="confirmPassword"
              className="input-field"
              onChange={(e) => handleChange(e)}
              value={inputValues.confirmPassword}
              required
            />
          </div> */}
            <label htmlFor="pic">Profile pic</label>
            <input type="file" onChange={handleChange} />
            <img src={file} height="150px" width="300px"/>
            <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}