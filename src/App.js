import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

const App = () => {
	useEffect(() => {
		createChat({
			webhookUrl: 'https://n8n-service-igq5.onrender.com/webhook/b0d85d81-950e-4b47-b7b7-d76ef25cb390/chat',
      webhookConfig: {
        method: 'POST',
        headers: {}
      },
      target: '#n8n-chat',
      mode: 'fullscreen',
      chatInputKey: 'chatInput',
      chatSessionKey: 'sessionId',
      loadPreviousSession: true,
      metadata: {},
      showWelcomeScreen: false,
      defaultLanguage: 'en',
      initialMessages: [
        'Witaj! 👋',
        'Jestem Przemek. Pomogę Ci dowiedzieć się o potencjalnych ogromnych kwotach jakie mozesz uzyskać w formie odszkodowania od banku?',
        'Powiedz jaki kredyt zaciągnąłeś?'
      ],
      i18n: {
        en: {
          title: 'Witaj! 👋',
          subtitle: "Zacznij zadawać pytania. Pomozemy 24/7.",
          footer: '',
          getStarted: 'New Conversation',
          inputPlaceholder: 'Zadaj pytanie..',
        },
      },
		});
	}, []);

	return (<div></div>);
};
export default App;