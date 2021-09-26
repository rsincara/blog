import React from 'react'
import '../style.css'
import {NavLink} from "react-router-dom";

const Header = () => {

    const changeVisible = () => {
        let list = document.querySelector('.navbar__list');
        list.classList.toggle('active');
    }

    return (
        <header className='header'>
            <div onClick={() => changeVisible()} className="navbar__burger-btn">
                <span/>
            </div>
            <nav className="navbar">
                <ul className='navbar__list'>
                    <li><NavLink activeClassName={"selected"} exact to={'/'} href="#"
                                 className="navbar__item">Home</NavLink></li>
                    <li><NavLink activeClassName={"selected"} to={'/works'} href="#"
                                 className="navbar__item">Works</NavLink></li>
                    <li><NavLink activeClassName={"selected"} to={'/blog'} className="navbar__item">Blog</NavLink></li>
                    <li><NavLink activeClassName={"selected"} to={'/contact'} className="navbar__item">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;




