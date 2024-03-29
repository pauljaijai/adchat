import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import { auth , provider} from '../firebase';
import {useStateValue} from '../StateProvider';
import { actionTypes} from '../reducer';

function Login() {
    const [state, dispatch] =useStateValue();

    const signIn = () =>{
        auth
            .signInWithPopup(provider)
            .then((result) =>{
                    console.log(result);
                    dispatch({
                        type: actionTypes.SET_USER,
                        user: result.user
                    })
                })
            .catch(error => {
                alert(error.message)
            })
    }

    return (
        <div className='login'>
            <div className='login__container'>
                <WhatshotIcon/>
                <h1><span >FIRE</span> Chat</h1>
                <Button onClick={signIn}>Sign In with GOOGLE</Button>
            </div>
        </div>
    )
}

export default Login
