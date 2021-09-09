import { RECEIVE_AllUSERS } from '../Actions/AllUsers';
import { ADD_QUESTION, ADD_ANSWER } from '../Actions/Questions';

export default function users(state = {}, action) {
	switch (action.type) {
		case RECEIVE_AllUSERS:
			return {
				...state,
				...action.users
			};

		case ADD_QUESTION:
			return {
				...state,
				[action.question.author]: {
					...state[action.question.author],
					questions: state[action.question.author].questions.concat([
						action.question.id
					])
				}
			};

		case ADD_ANSWER:
			const { qid, answer, authUser } = action.answerInfo;

			return {
				...state,
				[authUser]: {
					...state[authUser],
					answers: {
						...state[authUser].answers,
						[qid]: answer
					}
				}
			};

		default:
			return state;
	}
}
