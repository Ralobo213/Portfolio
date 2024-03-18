import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footerOne">
            <h1><span>Mon</span> Portfolio</h1>
            <div className='nav'>
                <h1>Menu</h1>
                <div className="navy">
                <a href="">Acceuil</a>
                <a href="">Apropos</a>
                <a href="">Experience</a>
                <a href="">Skylls</a>
                </div>
              
            </div>
            <div className="resseau">
                <h2>Reseau Sociaux</h2>
                <div className="contct">
                    <i className='fab fa-facebook'></i>
                    <h2>Ratsimiseta Tolotra Mamilalaina</h2>
                </div>
                <div className="contct">
                    <i className='fab fa-linkedin'></i>
                    <h2>Ratsimiseta Tolotra Mamilalaina</h2>
                </div>
                <div className="contct">
                    <i className='fab fa-google'></i>
                    <h2>tolotramamailalaina@gmail.com</h2>
                </div>
                <div className="contct">
                    <i className='fas fa-phone'></i>
                    <h2>+261 38 695 0 692</h2>
                </div>
            </div>
            <div className="message">
                <h1>Message</h1>
                <form action="">
                    <input type="text" placeholder='Votre Message' name="" id="" />
                    <button>Envoyer</button>
                </form>
            </div>
        </div>
        
        <div className="footerTwo"></div>
    </div>
  )
}
