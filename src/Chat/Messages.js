import React from 'react'
import './Messages.css'

function Messages({message , timestamp ,user ,userImage , userID}) {
    return (
        <div className='message'>
            <img src={userImage} alt=''/>
            <div className='messages__info'>
                <h4>
                    {user}  
                    <span className='message__timestamp'>
                        {new Date(timestamp?.toDate()).toUTCString()}
                        </span>
                </h4>

                <p className='message__message'>{message}</p>
            </div>
        </div>
    )
}

export default Messages
