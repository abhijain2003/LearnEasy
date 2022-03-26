import React, { useState, useEffect, useRef } from 'react'
import { firestore, auth } from '../services/firebase'
import SendMessage from './SendMessage'

export default function Chatroom() {

  const scroll = useRef()
  const [messages, setMessages] = useState([])

  useEffect(() => {
    firestore.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  return (
    <div className='mx-4 pt-8 pb-12'>

      <div className="flex justify-center items-center h-screen mx-4">
        <div className='flex flex-col'>
          <div className="border-2 border-indigo-500 rounded-t-md bg-gray-500 p-4 w-96 overflow-y-scroll flex flex-col h-128 max-w-7xl min-w-7xl">
            {messages.map(({ id, text, photoURL, uid }) => (
              <div>
                <div key={id} className={`flex p-5 space-x-1 items-center my-2 rounded-full ${uid === auth.currentUser.uid ? 'rounded-bl-3xl bg-[#1B2431] flex-row-reverse float-right text-white' : 'rounded-br-3xl bg-[#fafafa] float-left'}`}>
                  <img className='bg-black rounded-full h-10 w-10 border-2 border-black' src={photoURL} alt="" />
                  <p className='font-medium text-md break-words'>{text}</p>
                </div>
              </div>
            ))}
          </div>
          <SendMessage scroll={scroll} />
          <div ref={scroll}></div>

        </div>
      </div>

    </div>
  )
}
