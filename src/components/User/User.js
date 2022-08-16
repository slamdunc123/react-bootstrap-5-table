import React from 'react';

const User = ({ currentUser }) => {
	const { name, login, picture } = currentUser;
	return (
		<div className='card' style={{ width: '12rem' }}>
			<img src={picture.large} className='card-img-top' alt='...' />
			<div className='card-body'>
				<h5 className='card-title'>{login.username}</h5>
				<p className='card-text'>{`${name.first} ${name.last}`}</p>
			</div>
		</div>
	);
};

export default User;
