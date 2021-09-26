import React from 'react';
import image from '../Images/postImage.png'
import ErrorPage from "./ErrorPage";

const Post = ({id}) => {
    let post = {
        title: 'Designing Dashboards with usability in mind',
        createdDate: '12:05:2020',
        section: 'Dashboard',
        theme: 'User Experience Design',
        message: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.' +
            ' Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    } //тут мог быть получен пост :)
    return Number.isInteger(+id) ? (
        <div className={'post container'}>
            <h1 className={'post__title'}>{post.title}</h1>
            <div className="post__info">
                <span className={'post__date'}>{post.createdDate.split(':')[2]}</span>
                <span className={'post__theme'}>{post.section}, {post.theme}</span>
            </div>
            <p className={'post__message'}>{post.message}</p>
            <div className={'post__image-wrapper'}>
                <img className={'post__image'} src={image} alt={'Post image'}/>
            </div>
        </div>
    ) : <ErrorPage message={'Пост не найден'}/>; //тут могла быть нормальная проверка
};

export default Post;
