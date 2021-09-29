import React from 'react'
import '../style.css'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {changeTheme} from "../Actions/themeAction";

const Header = (props) => {
    let currentTheme = props.theme.theme;
    const changeVisible = () => {
        let list = document.querySelector('.navbar__list');
        list.classList.toggle('active');
    }

    const changeTheme = () => {
        let list = document.querySelector('#root');
        list.classList.toggle('theme-dark');
        props.changeTheme(currentTheme === 'light' ? 'dark' : 'light');
    }

    return (
        <header className={`header theme-${currentTheme}`}>
            <div onClick={() => changeVisible()} className="navbar__burger-btn">
                <span/>
            </div>
            <nav className="navbar">
                <ul className='navbar__list'>
                    <div className="form-check form-switch">
                        <input onChange={changeTheme} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    </div>
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

const mapStateToProps = state =>{
    return {
        theme:state.theme
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        changeTheme: theme => dispatch(changeTheme(theme))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);




