export const RECEIVE_AllUSERS = 'RECEIVE_AllUSERS';

export function receiveAllUsers(users) {
	return {
		type: RECEIVE_AllUSERS,
		users
	};
}
