import React from 'react';

const Table = ({ users, handleUserOnClick }) => {
	return (
		<table className='table table-bordered table-hover table-primary'>
			<thead>
				<tr>
					<th scope='col'></th>
					<th scope='col'>Username</th>
					<th scope='col'>First</th>
					<th scope='col'>Last</th>
					<th scope='col'>Email</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user, index) => (
					<tr
						key={index}
						role='button'
						onClick={() => handleUserOnClick(user)}
					>
						<th scope='row'>{index + 1}</th>
						<td>{user.login.username}</td>
						<td>{user.name.first}</td>
						<td>{user.name.last}</td>
						<td>{user.email}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
