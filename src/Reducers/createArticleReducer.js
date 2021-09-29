import {CREATE_ARTICLE} from "../Actions/createArticleAction";

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

    ]
}

export function articleReducer(state = initialState, action) {
    switch (action.type) {
        case (CREATE_ARTICLE):
            return {...state, articles:[...state.articles, action.payload]}
        default:
            return state;
    }
}
