import React from 'react'
import fb from '../Images/Icons/fb.svg'
import insta from '../Images/Icons/insta.svg'
import twitter from '../Images/Icons/Group.svg'
import linkedin from '../Images/Icons/Linkedin.svg'

const Footer = () =>{
    return (
        <footer className='footer-wrapper container'>
                <div className="footer">
                    <div className="social">
                        <a className='social__icon' href='#'><img src={fb} alt='fb'/> </a>
                        <a className='social__icon' href='#'><img src={insta} alt='insta'/> </a>
                        <a className='social__icon' href='#'><img src={twitter} alt='twitter'/> </a>
                        <a className='social__icon' href='#'><img src={linkedin} alt='linkedin'/> </a>
                    </div>
                    <div className="footer__rights">Copyright ©2020 All rights reserved </div>

                </div>
        </footer>
    )
}

export default Footer;