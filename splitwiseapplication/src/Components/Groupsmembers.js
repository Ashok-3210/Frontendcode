import React, { useState } from 'react'
import "./members.css"
import 'bootstrap/dist/css/bootstrap.min.css'
const Groupsmembers = () => {
  const [servicelist,setServiceList]=useState([{service:""}]);
  const [show,setshow]=useState(false);
   
  const Accepted=(e)=>{
    e.preventDefault();    
   }

   const Rejected=(e)=>{
    e.preventDefault();
    setshow(!show)
   }
   const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...servicelist];
    list[index][name] = value;
    setServiceList(list);
  };

   const handleServiceAdd = () =>{
    setServiceList([...servicelist,{ service: ""}])
  }

  const handleServiceRemove = (index) =>{
    const list =[...servicelist];
    list.splice(index, 1);
    setServiceList(list)
  }
  return (
    <div>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
         
        </div>
        <div className='col-md-4'>
         
           <form>
                 <div className='from-group mt-5'>
                    <label>Group Name : </label>
                    <select value=''>
                      <option value="group1">Group1</option>
                      <option value="group2">Group2</option>
                      <option value="group3">Group3</option>
                      <option value="group4">Group4</option>
                    </select>
                  </div>
                  <div className='from-group mt-3'>
                    <label htmlFor='service'>No.Of Persone : </label>
                    {servicelist.map((singleService, index) =>(
                    <div key={index} className='services'>
                    <div className='first-division'>
                    <input
                name="service"
                type="text"
                id="service"
                value={singleService.service}
                onChange={(e) => handleServiceChange(e, index)}
                required
              />
                    {servicelist.length -1 === index && servicelist.length < 10 &&(
                    <button type='button'className='Add btn btn-primary'
                     onClick={handleServiceAdd}>
                      <span>Add a Users</span>
                    </button>
                    )}
                    </div>
                    <div className='second-division'>
                      {servicelist.length > 1 && (
                    <button type='button'className='remove btn btn-danger'
                    onClick={() => handleServiceRemove(index)}>
                      <span>Remove</span>
                    </button>
                    )}
                    </div>
                    </div>
                    ))}
                  </div>
                  {/* <div className='from-group mt-3 '>
                        <label>Split Amount : </label>
                        <input type="number" name="number" placeholder='Place Enter Amount' className='form-control' />
                    </div>
                    <div className='from-group mt-3'>
                    <button className='btn btn-primary Groups' onClick={Accepted} type="submit">Accepted</button>
                    <button className='btn btn-danger Groups' onClick={Rejected} type="submit">Rejected</button>
                    </div>
                    {
                      show?<div className='col-md-4'>
                       <div className='from-group mt-3 '>
                        <label>Comments : </label>
                        <textarea name="comment" className='form-control' ></textarea>
                       </div>
                       </div>:null
                    } */}
                     <div className='mt-3'>
                        <button className='btn btn-warning'> Submit</button>
                    </div>
           </form>
       </div>
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
            <th scope="col">Contact</th>
            <th scope="col">Split Amount</th>
            <th scope='col'>Comment</th>
        
            <th scope='col'>Status</th>
          </tr>
        </thead>   

            <tbody>
              <tr>
                <th scope="row"> </th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
      
      </table>

    </div>
  )
}

export default Groupsmembers
