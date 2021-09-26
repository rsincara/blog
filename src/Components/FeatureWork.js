import React from 'react'
import {NavLink} from "react-router-dom";

const FeatureWork = (props) => {
    return (
        <div className={`fwork ${props.location === undefined ? "" : `location-${props.location}`}`}>
            <NavLink to={`/works/${props.id}`} className='fwork-image-wrapper'>
                <img className='fwork__image' src={props.img} alt='theme picture'/>
            </NavLink>
            <div className="fwork__content">
                <NavLink to={`/works/${props.id}`} className='fwork__title'> {props.theme} </NavLink>
                <span className='fwork__year'>{props.year}</span> <span className='work__section'>{props.section}</span>
                <p className='fwork__introduction text'>{props.inroduction}</p>
            </div>
        </div>
    )
}

export default FeatureWork;
