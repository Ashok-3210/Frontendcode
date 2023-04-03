import React, { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import "./App.css"


import Header from "./Components/Header";
import "./Components/Headerstyle.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Groupsmembers from "./Components/Groupsmembers"
import Group from "./Components/Group";


 function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="app">
       {/* <Header/> */}
       <Group />
       <Groupsmembers />
       
    </div>
    // <div className="App">
    //   {
    //     currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
    //   }
      
    // </div>

  );
       {/* <Groupsmembers /> */}
}

export default App;
