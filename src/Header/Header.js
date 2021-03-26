import React from "react";
import "./Header.css";
import {Avatar} from '@material-ui/core';
import {useStateValue} from '../StateProvider'
import WhatshotIcon from '@material-ui/icons/Whatshot';

export default function Header() {

    const[{user}] = useStateValue()

  return (
    <div className="header">
      <div className="header__left">
        <Avatar 
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />

        
      </div>
      <div className="header__search">
      <WhatshotIcon/>
      
      

      </div>
      
      <div className="header__right">
         
      </div>
    </div>
  );
}
