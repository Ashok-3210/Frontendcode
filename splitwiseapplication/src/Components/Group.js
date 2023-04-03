import React, { useState } from 'react'
import "./Groups.css"

 function Group() {
    const [show,setshow]=useState(false);
  const [name, setname] = useState();
  
const Gropusub=(e)=>{
    e.preventDefault();
    setshow(!show)
   }
  return (
    <div>
      <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
           <h2>Welcome Groups</h2>
           <button className='btn btn-primary Groups' onClick={Gropusub} type="submit">create Groups</button>
            </div>
            {    
            show?<div className='col-md-4'>
                <form>
                    <div className='from-group mt-5'>
                        <label>Group Name : </label>
                        <input type="text" name="name" placeholder='Place Enter Group Name' className='form-control'/>
                    </div>
                    <div className='from-group mt-3 '>
                        <label>Amount : </label>
                        <input type="number" name="number" placeholder='Place Enter Amount' className='form-control' />
                    </div>
                    <div className='from-group mt-3 '>
                        <label>Comments : </label>
                        <textarea name="comment" className='form-control'></textarea>
                    </div>
                    <div className='from-group mt-3 text-center'>
                        <label>Bill Copy : </label>
                        <input type="file" name="bill" placeholder='Place Enter Group Name' className='form-control'/>
                    </div>
                    <div className='mt-3'>
                        <button className='btn btn-warning'> Submit</button>
                    </div>
                </form>
            </div>:null
            }
            <div className='col-md-4'>

            </div>
            
            
            
        </div>
      </div>
      <br></br>
       <div className='col-md-6'>
          <input type="text" id="search" className='' width="50px" placeholder='Search'></input>
          <button type='button' className='btn btn-success'>Search</button>
       </div>
      <table  class="table table-dark" align="center">
      <thead>
          <tr>
           <th scope="col">ID</th>
            <th scope="col">Group Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
        
            <th scope="col">Option</th>
          </tr>
        </thead>   

            <tbody>
              <tr>
                <th scope="row"> </th>
                <td></td>
                <td></td>
                <td></td>
                
                <td>
                  
                </td>
              </tr>
            </tbody>
      
      </table>
    </div>
  )
}
export default Group
