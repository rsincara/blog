import React from 'react';
import RecentPost from "./RecentPost";
import {connect} from "react-redux";
import {createArticle} from "../Actions/createArticleAction";

const Blog = (props) => {
    let allArticles = props.articles.articles;

    const getValueBySelector = selector => document.querySelector(selector).value;

    const onBtnClick = (e) => {
        e.preventDefault();
        let article = {
            date: new Date(),
            theme: getValueBySelector('#theme'),
            section: getValueBySelector('#section'),
            title: getValueBySelector('#title'),
            text: getValueBySelector('#text')
        }
        console.log(article);
        props.createArticle(article)
    }

    return (
        <div className={'blog container'}>
            <h1 className={'blog__title'}>Blog</h1>

            <form>
                <div className="form-group">
                    <label>Тема поста</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp"
                           placeholder="Введите название поста"/>
                </div>
                <div className="form-group">
                    <label>Секция</label>
                    <input type="text" className="form-control" id="section" placeholder="Введите название секции"/>
                </div>
                <div className="form-group">
                    <label>Тема</label>
                    <input type="text" className="form-control" id="theme" placeholder="Введите название темы"/>
                </div>
                <div className="form-group">
                    <label>Текст статьи</label>
                    <textarea className="form-control" id="text" placeholder="Введите текст статьи"/>
                </div>
                <button type="submit" style={{marginTop: '10px'}} className="btn btn-primary"
                        onClick={onBtnClick}>Отправить
                </button>
            </form>

            {allArticles.map(post => <RecentPost title={post.title} date={post.title} section={post.section}
                                                 theme={post.theme}
                                                 text={post.text}/>)}

        </div>
    );
};

const mapStateToProps = state => {
    console.log(state);
    return {
        articles: state.articles
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createArticle: article => dispatch(createArticle(article))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
