import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StatePorvider } from './StateProvider';
import reducer, {initialState} from './reducer'


ReactDOM.render(
    <StatePorvider initialState = { initialState} reducer={reducer}>
      <App />
    </StatePorvider>
    
  ,
  document.getElementById('root')
);

