import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

import authUser from './AuthUser';
import users from './AllUsers';
import questions from './Questions';

export default combineReducers({
	authUser,
	users,
	questions,
	loadingBar: loadingBarReducer
});
