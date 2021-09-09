import { SET_AUTH_USER, RESET_AUTH_USER } from '../Actions/AuthUser';

export default function authUser(state = null, action) {
	switch (action.type) {
		case SET_AUTH_USER:
			return action.id;
		case RESET_AUTH_USER:
			return null;

		default:
			return state;
	}
}
