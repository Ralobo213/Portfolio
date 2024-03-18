import React from 'react'
import './../../index.css'
import {FaFacebook,FaInstagram,FaLinkedin,FaGoogle} from 'react-icons/fa'


export default function SectionOne() {
  return (
    <section className='sectionOne'>
      <div className="part one">
      <h2>RATSIMISETA <br /> Tolotra <br /> Mamilalaina</h2>
      <div className="dvext">
        <div className="dvint">
          <h1>Developpemnt web</h1>
        </div>
      </div>
        
        <div className="reseau">
          <i><FaFacebook/></i>
          <i><FaInstagram/></i>
          <i><FaLinkedin/></i>
          <i><FaGoogle/></i>
            </div>
            <button>Download CV</button>
      </div>
      <div className="part two">
        <div className="twoIntern">
        <img src="/img/pdp2.png" alt=""/>
        </div>
      </div>
        
    </section>
  )
}
