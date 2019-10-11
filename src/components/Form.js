import React, {useState} from 'react'

function Form() {
	const [Message, setMessage] = useState('')

	const creatMessage = () => {
		const {addMessage, pseudo} = pseudo
	}
	const handleChange = (e) => {
		setMessage(e.target.value)
		console.log(Message)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('log')
	}
	return (
			<form className="formMessage" onSubmit={handleSubmit}>
				<textarea
				required maxLength='140'
				value={Message}
				onChange={handleChange}/>
				<div className='info'>140</div>
				<button type='submit'>Envoyer</button>
			</form>
	);
}

export default Form;
