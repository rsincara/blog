import React from 'react'
const FeatureWork = (props) => {
    return(
        <div className='fworks__work'>
            <div className='work-image-wrapper'>
                <img className='work__image' src={props.img} alt='theme picture' width='246px' height='180px' />
            </div>
            <div className="work__content">
                <a href='#' className='work__title' > {props.theme} </a>
                <span className='work__year'>{props.year}</span> <span className='work__section'>{props.section}</span>
                <p className='work__introduction text'>{props.inroduction}</p>
            </div>



        </div>
    )
}

export default FeatureWork;