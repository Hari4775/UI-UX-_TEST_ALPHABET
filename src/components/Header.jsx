import { Button } from 'bootstrap'
import React from 'react'



const Header = () => {
  return (
    <div className='container-fluid header  mb-5' >
        <div className='row'>
        <img src='https://www.keralaartisans.com/images/logo.png'/>
        </div>
        <div className='row'>
    <div className='col-2 '>
        <h5 className=' text-white'>Home</h5></div>
    <div className='col-2 text-white'>
    <h5 className=' test-white'>About</h5></div>

    <div className='col-2 text-white'>
    <h5 className=' test-white'>Ministry</h5>
</div>

    <div className='col-2 text-white'>
    <h5 className=' test-white'>Central/state Schemes</h5>
</div>
    <div className='col-2 text-white'>
    <h5 className=' test-white'>Central/state Schemes</h5>
</div>
    <div className='col-2 text-white'>
        <button className='bg-danger'>Login</button>
    </div>
    </div>


      
    </div>
  )
}

export default Header
