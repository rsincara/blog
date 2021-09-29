import {CHANGE_THEME} from '../Actions/themeAction'

const initialState = {
    theme: 'light'
}

export function themeReducer(state = initialState, action) {
    switch (action.type) {
        case (CHANGE_THEME):
            return {...state, theme: action.payload}
        default:
            return state;
    }
}
