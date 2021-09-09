import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { reSetAuthUser } from '../Actions/AuthUser';
import Photo from './Photo';

function NavigationBar(props) {
	const { user, dispatch } = props;

	const handleLogout = () => {
		dispatch(reSetAuthUser());
	};

	return (
		<Fragment>
			<Navbar expand="lg" bg="light" variant="Dark" className=" my-3 border">
				<Navbar.Brand as={Link} to="/">
					<h2 className="ms-5">
						<small>Would You Rather...?</small>
					</h2>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto float-start">
						<Nav.Link as={NavLink} to="/" exact>
							Home
						</Nav.Link>
						<Nav.Link as={NavLink} to="/add">
							New Question
						</Nav.Link>
						<Nav.Link as={NavLink} to="/leaderboard">
							Leaderboard
						</Nav.Link>
					</Nav>
					<Nav className="align-items-start ms-5">
						<Navbar.Text>{user.name}</Navbar.Text>
						<Photo avatarURL={user.avatarURL} className="mx-3" />
						<Button
							variant="outline-dark"
							onClick={handleLogout}
							className="mt-3 mt-lg-0"
						>
							Logout
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Fragment>
	);
}

function mapStateToProps({ users, authUser }) {
	return {
		user: users[authUser]
	};
}

export default connect(mapStateToProps)(NavigationBar);
