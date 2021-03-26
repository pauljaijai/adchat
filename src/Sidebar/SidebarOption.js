import React from 'react'
import './SidebarOption.css'
import {useHistory} from 'react-router-dom'
import db from '../firebase';


function SidebarOption({Icon , Title , id, addChannelOption }) {

    const history = useHistory();

    const selectChannel =() =>{
        if(id){
            history.push(`/room/${id}`)
        }

        else {
            history.push(Title)
        }
    }

    const addChannel = () =>{
        const channelName = prompt('Enter Channel Name')
        
        if(channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }
    }

    return (
        <div className='sidebarOption' onClick= {addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon className='sidebarOption__icon'/>}
            {Icon?(
                <h3>{Title}</h3>
            ) : (
                <h3 className='sidebarOption__channel'>
                    @ {Title}
                </h3>
            )}
        </div>
    )
}

export default SidebarOption
