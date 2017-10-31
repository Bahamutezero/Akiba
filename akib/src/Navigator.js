import React from 'react';
import './App.css';

const Navigator = (props) => {
    return(
        <div className='Navigator'>
            <a href='#home'><h3 className='Header'>AKIBA</h3></a>
            <p className='Header'>boards</p>
            <p className='Header'>community</p>
            <p className='Header'>games</p>
        </div>
    );
}

export default Navigator;