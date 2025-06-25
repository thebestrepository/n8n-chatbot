import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

const App = () => {
	useEffect(() => {
		createChat({
			webhookUrl: 'https://n8n-service-igq5.onrender.com/webhook/b0d85d81-950e-4b47-b7b7-d76ef25cb390/chat',
      defaultLanguage: 'pl',
      initialMessages: ['powiedz jaki rodzaj kredytu i na jaką kwotę wziąłeś?']
		});
	}, []);

	return (<div></div>);
};
export default App;