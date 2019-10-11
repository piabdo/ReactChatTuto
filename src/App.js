import React, {useState} from 'react'
import './App.css'

import Form from './components/Form'
import Message from './components/Message'

function App() {
	const [messages, setMessages] = useState({})
	const [pseudo, setPseudo] = useState(props.atch.params.pseudo)

	const addMessage = Message => {
		const messages = {...messages}
		messages[`Message-${Date.now()}`] = Message
		setMessages({ messages })
	}
	return (
		<div className='box'>
		<div>
			<div className='messages'>
				<Message />
				<Message />
				<Message />
			</div>
		</div>
		<Form 
		addMessage={addMessage}/>
	 </div>
  );
}

export default App;
