import React from 'react';

const ErrorPage = ({message}) => {
    let errorImages = ['https://i.imgur.com/ZQJvnph.png', 'https://i.imgur.com/Os451Qo.jpeg',
        'https://i.imgur.com/0gf5s.jpeg', 'https://i.imgur.com/UaEscmK.jpeg'];
    const getRandomImage = () => {
        let value = Math.floor(Math.random() * (errorImages.length));
        console.log(value);
        return errorImages[value];
    }
    return (
        <div className={'error container'}>
            <h1 className={'error__message'}>Ошибка, {message} </h1>
            <div className="error__image-wrapper">
                <img className={'error__image'} src={getRandomImage()} alt={'Error image'}/>
            </div>
        </div>
    );
};

export default ErrorPage;
