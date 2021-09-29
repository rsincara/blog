export const CREATE_ARTICLE = 'CREATE_ARTICLE'

export function createArticle(article) {
    return {
        type:CREATE_ARTICLE,
        payload:article
    }

}
