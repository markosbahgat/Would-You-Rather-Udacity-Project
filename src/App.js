import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import Login from './Components/SignIn';
import PrivateApp from './Components/PrivateApp';
import { handleInitialData } from './Actions/Shared';

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

	render() {
		const { authUser, loadingBar } = this.props;

		if (loadingBar.default === undefined || loadingBar.default === 1) {
			//loading
			return (
				<div className="d-flex justify-content-center">
					<Spinner
						animation="border"
						role="status"
						variant="secondary"
						className="my-5"
					>
						<span className="sr-only">Loading...</span>
					</Spinner>
				</div>
			);
		} else {
			return <Fragment>{!authUser ? <Login /> : <PrivateApp />}</Fragment>;
		}
	}
}

function mapStateToProps({ authUser, loadingBar }) {
	return {
		authUser,
		loadingBar
	};
}

export default connect(mapStateToProps)(App);
