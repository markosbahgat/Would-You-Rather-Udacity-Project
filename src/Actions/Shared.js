import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { getInitialData } from '../Utils/Api';
import { receiveAllUsers } from './AllUsers';
import { receiveQuestions } from './Questions';

export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading());
		return getInitialData().then(({ users, questions }) => {
			dispatch(receiveAllUsers(users));
			dispatch(receiveQuestions(questions));
			dispatch(hideLoading());
		});
	};
}
