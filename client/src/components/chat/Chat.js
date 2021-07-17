import React,{ useState, useEffect } from 'react'
import Login from './Login'
import { useLocalStorage } from '../../hooks/useStorage';
import Dashboard from './Dashboard'
import { ContactsProvider } from '../../contexts/ContactsProvider'
import { ConversationsProvider } from '../../contexts/ConversationsProvider';
import { SocketProvider } from '../../contexts/SocketProvider';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch, useSelector } from "react-redux";
const jwt = require("jsonwebtoken");

function Chat() {

  const state = useSelector((statetree) => {
    return {
      token: statetree.token.token,
      parsedToken: statetree.token.parsedToken,
    };
  });


  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )

  useEffect(()=>{
    if (state.token) {
      const userToken = jwt.decode(state.token);
      setId(String(userToken.userId))}
  },[])

  return (
    id ? dashboard : <Login onIdSubmit={setId} />
  )
}

export default Chat;
