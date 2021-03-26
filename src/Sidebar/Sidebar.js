import React , {useState, useEffect} from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption.js'
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase';
import {useStateValue} from '../StateProvider'


function Sidebar() {

    const [channels , setChannels] =useState([]);
    const [{user}] = useStateValue();

    useEffect(() => {
       db.collection('rooms').onSnapshot((snapshot) => (
           setChannels(
                    snapshot.docs.map((doc)=>({
                    id: doc.id,
                    name: doc.data().name,

                    }))
            )
       
       ))
    }, [])

    return (
        <div className='sidebar'>
          
            <div className='sidebar__header'>
                <div className='sidebar__info'>
                <h2>Hey !!</h2>
                <h3>
                    <FiberManualRecordIcon/>
                    {user?.displayName}
                </h3>
                </div>
          
                
             
            </div>
            <hr/>
            <SidebarOption addChannelOption Icon={AddIcon} Title='Channel'/>
            <hr/>

            {channels.map(channel => 
                <SidebarOption 
                Title={channel.name} 
                id={channel.id}/>
                )}
        </div>
    )
}

export default Sidebar


