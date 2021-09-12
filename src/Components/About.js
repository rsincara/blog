import React from 'react'
import john from '../Images/john.png'

const About = () => {
    return(
        <div className='about container'>
            <div className='about__info'>
                <h1 className='about__title'>Привет, Я Максим, <br/>
                   начинающий веб-разработчик.</h1>
                <p className="about__text text"> Мне 20 лет, я начинающий фронтендер с небольшим опытом бэкэнд-разработки.  </p>
                <button className='about__btn btn'>Принять на работу</button>
            </div>
            <div className="about__avatar">
                <img className='avatar-image' src={john} alt={'john'} width='243px' height='243px' />
            </div>
        </div>
    )
}

export default About;
