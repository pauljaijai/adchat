import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Chat from './Chat/Chat.js'
import Login from "./Auth/Login";
import {useStateValue} from './StateProvider'



function App() {

  
  const [{user}, dispatch] = useStateValue();

  return (
    <div className='app'>
      <Router>
        {!user? (
          <Login/>
        ) : (
          <div>
          <Header />

          <div className='app__body'>
          <Sidebar/>
  
          <Switch>
            <Route path = "/room/:roomId">
           
            <Chat/>
            </Route>
  
            <Route path = "/">
            <h1>Wellcome</h1>
            </Route>
  
          </Switch>
        
          </div>
          </div>
        )}
        
      </Router>
      
    </div>
  );
}

export default App;
