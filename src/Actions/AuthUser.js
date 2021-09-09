export const SET_AUTH_USER = 'SET_AUTH_USER';
export const RESET_AUTH_USER = 'RESET_AUTH_USER';

export function setAuthUser(id) {
	return {
		type: SET_AUTH_USER,
		id
	};
}

export function reSetAuthUser(id) {
	return {
		type: RESET_AUTH_USER,
		id
	};
}
