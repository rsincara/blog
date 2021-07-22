import React from 'react'
import john from '../Images/john.png'

const About = () => {
    return(
        <div className='about container'>
            <div className='about__info'>
                <h1 className='about__title'>Hi, I am John,<br/>
                    Creative Technologist</h1>
                <p className="about__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. </p>
                <button className='about__btn btn'>Download Resume</button>
            </div>
            <div className="about__avatar">
                <img className='avatar-image' src={john} alt={'john'} width='243px' height='243px' />
            </div>
        </div>
    )
}

export default About;