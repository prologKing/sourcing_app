import React, { useEffect, useState } from 'react';
import {SessionTimeout} from './Config'

var t;

function AutoLogout(props){
   
    const [duration, setDuration] = useState(1);

    useEffect(() => {
        window.addEventListener('click', resetTimer);
        window.addEventListener('scroll', resetTimer);
        window.addEventListener('mousemove', resetTimer);
        window.addEventListener('mousedown', resetTimer);
        window.addEventListener('keypress', resetTimer);
    },[]);

    const signout =()=> {
        SessionTimeout()
        clearTimeout(t)
        //window.location.reload()
    }
  
    const resetTimer = (e) => {
        clearTimeout(t)
        t = setTimeout(signout, duration * 60000); // time is in milliseconds
    }

    return null
    
}
export default AutoLogout;