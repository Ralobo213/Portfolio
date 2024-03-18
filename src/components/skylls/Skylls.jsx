import React from 'react'
import {FaHtml5,FaCss3,FaJs,FaLaptopCode,FaLaravel,FaReact,FaPhp,FaSass} from 'react-icons/fa'

export default function Skylls() {
  return (
    <div className='skylls'>
        <div className="left">
            <div className="catego">
                <i><FaHtml5/></i>
                <h1>Html</h1>
            </div>
            <div className="catego">
                <i><FaCss3/></i>
                <h1>Css</h1>
            </div>
            <div className="catego">
                <i><FaJs/></i>
                <h1>Java Script</h1>
            </div>
           
        </div>
        <div className="blockskyl">
        <div className="cach">
            <i><FaLaptopCode/></i>
            <h1>My Skylls</h1>
        </div>
        </div>
        <div className="left">
        <div className="catego">
                <i><FaReact/></i>
                <h1>React</h1>
            </div>
            <div className="catego">
                <i><FaSass/></i>
                <h1>Sass</h1>
            </div>
            <div className="catego">
                <i><FaLaravel/></i>
                <h1>Laravel 10</h1>
            </div>
        </div>
      
    </div>
  )
}
