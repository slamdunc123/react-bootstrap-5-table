import React, { useState, useEffect } from 'react';
import Table from '../Table/Table';
import User from '../User/User';
import axios from 'axios';

const Users = () => {
	const [users, setUsers] = useState([]);
	const [currentUser, setCurrentUser] = useState(null);
	const fetchUsersData = async () => {
		try {
			const res = await axios.get('https://randomuser.me/api/?results=5');
			setUsers(res.data.results);
		} catch (error) {
			console.log(error);
		}
	};

	const handleUserOnClick = (user) => {
		setCurrentUser(user);
	};

	useEffect(() => {
		fetchUsersData();
	}, []);

	return (
		<div className='container'>
			<h3>Users</h3>
			<Table users={users} handleUserOnClick={handleUserOnClick} />
			{currentUser ? <User currentUser={currentUser} /> : null}
		</div>
	);
};

export default Users;
