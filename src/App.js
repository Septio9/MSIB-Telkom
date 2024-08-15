import React, { useState, useEffect } from 'react';
import Chatbox from './components/Chatbox';
import RecommendedQuestions from './components/RecommendedQuestions';
import './App.css';


function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem('chatHistory'));
    if (savedMessages) {
      setMessages(savedMessages);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(messages));
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      const newMessages = [...messages, { sender: 'User', text: input }];
      setMessages(newMessages);
      setInput('');

      // Simple logic for virtual assistant response
      setTimeout(() => {
        const response = getAssistantResponse(input);
        setMessages((prevMessages) => [...prevMessages, { sender: 'Assistant', text: response }]);
      }, 1000);
    }
  };

  const getAssistantResponse = (input) => {
    const lowerCaseInput = input.toLowerCase();
    
    if (lowerCaseInput.includes('hello')) {
      return 'Hello! How can I assist you today?';
    } else if (lowerCaseInput.includes('bye')) {
      return 'Goodbye! Have a great day!';
    } else if (lowerCaseInput.includes('how are you')) {
      return 'I’m just a bunch of code, but I’m here to help you!';
    } else if (lowerCaseInput.includes('what is your name')) {
      return 'I am your virtual assistant. How can I help you?';
    } else if (lowerCaseInput.includes('what can you do')) {
      return 'I can assist with answering questions, setting reminders, and more. How can I help you?';
    } else if (lowerCaseInput.includes('tell me a joke')) {
      return 'Why don’t scientists trust atoms? Because they make up everything!';
    } else if (lowerCaseInput.includes('what time is it')) {
      return `The current time is ${new Date().toLocaleTimeString()}.`;
    } else if (lowerCaseInput.includes('weather')) {
      return 'I cannot check the weather right now, but you can ask me anything else!';
    } else if (lowerCaseInput.includes('thank you')) {
      return 'You’re welcome! Happy to help.';
    } else if (lowerCaseInput.includes('help')) {
      return 'I am here to assist! Ask me anything or let me know how I can help.';
    } else {
      return 'I’m not sure how to respond to that. Could you try asking something else?';
    }
  };
  

  const handleRecommendedQuestionClick = (question) => {
    setInput(question);
    handleSend();
  };

  return (
    <div className="App">
      <h1>
      <center>Virtual Assistant</center>
      </h1>
      <Chatbox messages={messages} input={input} setInput={setInput} handleSend={handleSend} />
      <RecommendedQuestions onQuestionClick={handleRecommendedQuestionClick} />
    </div>
  );
}

export default App;
