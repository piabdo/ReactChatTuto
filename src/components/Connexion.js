import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function Connexion() {
	const [pseudo, setPseudo] = useState('popo')
	const [goToChat, setToChat] = useState(false)

	const handleChange = (e) => {
		setPseudo(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		setToChat(true)
	}
	if (goToChat) {
		return <Redirect push to={`/pseudo/${pseudo}`}></Redirect>
	}

	return(
		<div className='connexionBox'>
			<form className='connexion' onSubmit={handleSubmit}>
				<input
				value={pseudo}
				onChange={handleChange}
				placeholder='Pseudo'
				type='text'
				required />
				<button type='submit'>GO</button>
			</form>
		</div>
	);
}

export default Connexion
