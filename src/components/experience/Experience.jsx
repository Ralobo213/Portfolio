import React from 'react'
import './../../index.css'
import {FaGraduationCap,FaConnectdevelop} from 'react-icons/fa'
export default function Experience() {
  return (
    <section className='experience'>
        <div className="block prime">
            <i><FaGraduationCap/></i>
            <h2>Mes experiences</h2>
            <i className='fas fa-hand-point-right'></i>
        </div>
        <div className="block second">
            <div className="one">
                <i><FaConnectdevelop/></i>
                <h2>2019 - 2020 <br /> <span>Gerant d'un cyber Café</span></h2>
                
            </div>
            <div className="one">
                <i><FaConnectdevelop/></i>
                <h2>Aout - Octobre 2018 <br /> <span>Receptionniste &</span> <br /> <span>Gestionnaire des materielles roullante</span></h2>
            </div>
            <div className="one">
            <i><FaConnectdevelop/></i>
                <h2>Aout - Octobre 2017<br /> <span>Service de Maintenace Informatique</span></h2>
            </div>
        </div>
    </section>
  )
}
