import React from 'react'
import './Chat.css'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from '../firebase.js'
import Messages from './Messages.js'
import ChatInput from './ChatInput'

function Chat() {
    const{roomId} = useParams();
    const[roomDetails, setRoomDetails] = useState(null)
    const [roomMessages , setRoomMessages] = useState([])
    
    useEffect (() => {
     
        if(roomId){
            db.collection('rooms')
            .doc(roomId)
            .onSnapshot(snapshot =>(
                setRoomDetails(snapshot.data())
            ))
        }

            db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot( snapshot=>
                setRoomMessages(
                snapshot.docs.map(doc => doc.data())
                )
            )
        
    
},[roomId]);

        console.log(roomDetails)

    return (
        <div className='chat'>
            
            <div className='chat__header'>
                <div className='chat__headerLeft'>
                    <h4 className='chat__channelName'>
                        <strong> @  {roomDetails?.name}</strong>
                        
                    </h4>

                </div>

              
                
                    
                </div>
            
            <div classname='chat__messaages'>
                 {roomMessages.map(({message, timestamp , user ,userImage}) => 

                    <Messages
                    message={message}
                    timestamp={timestamp}
                    user={user}
                    userImage={userImage}
                    />
                )}
            </div>
            <ChatInput channelName={roomDetails?.name} channelId={roomId}/>
        </div>
    )
}

export default Chat
