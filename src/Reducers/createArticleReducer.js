import {CREATE_ARTICLE_REQUEST} from "../Actions/createArticleAction";
import {CREATE_ARTICLE_SUCCESS} from "../Actions/createArticleAction";

const initialState = {
    articles: [
        {
            theme: 'Frontend',
            title: 'UI Interections of the week',
            date: '12 Feb 2019',
            section:'Web development',
            text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
            theme: 'Frontend',
            title: 'UI Interections of the week',
            date: '12 Feb 2019',
            section:'Web development',
            text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
            theme: 'Frontend',
            title: 'UI Interections of the week',
            date: '12 Feb 2019',
            section:'Web development',
            text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
            theme: 'Frontend',
            title: 'UI Interections of the week',
            date: '12 Feb 2019',
            section:'Web development',
            text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        }
    ],
    isFetching: false
}

export function articleReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_ARTICLE_REQUEST:
            return {...state, articles:state.articles, isFetching: true}
        case CREATE_ARTICLE_SUCCESS:
            return {...state, articles:[...state.articles, action.payload], isFetching: false }
        default:
            return state;
    }
}
