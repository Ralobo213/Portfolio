import React from 'react'
import './../../index.css'
import {FaComment} from 'react-icons/fa'
export default function SectionTwo() {
  return (
    <section className="sectionTwo">
    <h1>APROPOS DE <span>MOI</span></h1>
    <div className="block">
        <div className="blockOne">
            <img src="/img/programmer.jpg" alt="" />
        </div>
        <div className="blockTwo">
            <i><FaComment/></i>
            <h3>
                Passionné par l'univers du web,doté d'une expérience importante en développement de sites internet. 

                les missions d'intégration web et développement full stack font partie de mon quotidien. 
            </h3>
        </div>
    </div>
</section>
  )
}