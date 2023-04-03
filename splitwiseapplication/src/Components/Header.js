import React from 'react'
import "./Headerstyle.css";

const Header = () => {
  return (
    <div className="top-bar">
      <div className='container '>
        <div className='row'>
            <div className='col-md-2'>
             <img src="https://www.terralogic.com/wp-content/themes/terralogic/img/brand-logo.svg" width="150" height="150"/>
            </div>
            <div className='col-md-6'>
          <ul>
            <li><a href='#'><i class="fa-solid fa-users-line"></i> Groups</a></li>
          </ul>
            </div>
            <div className='col-md-2' >
            <button className='btn btn-danger Logout' type="submit">logOut</button>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Header
