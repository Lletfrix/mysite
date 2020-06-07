import { combineReducers } from 'redux';
import { SET_LANGUAGE } from './actions';

const language = (language='EN', action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return action.language;
        default:
            return language;
    }
}

export default combineReducers({language});
