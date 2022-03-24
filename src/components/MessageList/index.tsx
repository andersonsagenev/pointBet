import React, { useEffect, useState } from 'react';
import { AppState, ScrollView } from 'react-native';

import { styles } from './styles';

import { Message, MessageProps } from '../Message'
import { api_git } from '../../services/api';

import  { io } from 'socket.io-client';

let messagesQueue: MessageProps[] = [];

const socket = io(String(api_git.defaults.baseURL));
socket.on('new_message', (newMessage: any) => {
  messagesQueue.push(newMessage);
  console.log(newMessage);
})

export function MessageList() {
  const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([]); 

  useEffect(() => {
    async function fetchMessages() {
      const messagesResponse = await api_git.get<MessageProps[]>('/messages/last3');
      setCurrentMessages(messagesResponse.data);
    }
    fetchMessages();
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length> 0) {
        setCurrentMessages(prevState => [messagesQueue[0], prevState[0], prevState[1]]);
        messagesQueue.shift();
      }
    }, 3000);
    return () => clearInterval(timer);
  }, []);


  const message = {
    id: '1',
    text: 'mensagem de teste',
    user: {
        name: 'Anderson',
        avatar_url: 'https://github.com/andersonsagenev.png',
    }
  }
  return (
      <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never">
        {currentMessages.map((message) => <Message key={message.id} data={message} /> ) }
      </ScrollView>
  );
}

export default MessageList;