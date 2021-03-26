
import React, {useState} from 'react'
import db from '../firebase'
import './ChatInput.css'
import {useStateValue} from '../StateProvider.js'
import firebase from 'firebase'
import { animateScroll } from "react-scroll";
import * as Scroll from 'react-scroll';

import SendIcon from '@material-ui/icons/Send';


function ChatInput({channelName, channelId}) {


    
    const [input, setInput] = useState('')
    const [{user}] =useStateValue();

    

    const sendMessage = e =>{
        e.preventDefault();
        
        if(channelId){
            db.collection('rooms').doc(channelId).collection('messages').add({
                message:input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL
            }
            )
            
            setInput('');
           
          
        }   
    }


    return (
        <div className='chatInput'>

            <form>
                <input 
                placeholder={`Message to ${channelName}`}
                value={input}
                onChange = { e => setInput(e.target.value)}
                />
                <button disabled={!input} type='submit' onClick={sendMessage}>
                    <SendIcon/>
                </button>
            </form>
        </div>
    )
}

export default ChatInput
