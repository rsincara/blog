export const CREATE_ARTICLE_SUCCESS = 'CREATE_ARTICLE_SUCCESS'
export const CREATE_ARTICLE_REQUEST = 'CREATE_ARTICLE_REQUEST'

export function createArticle(article) {
    return dispatch => {
        dispatch({
            type: CREATE_ARTICLE_REQUEST,
            payload: article
        })

        setTimeout(() => {
            dispatch({
                type: CREATE_ARTICLE_SUCCESS,
                payload: article
            })
        }, 1000)
    }
}
