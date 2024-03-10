import React from 'react';
import './Welcome.css'

function Welcome(props){
    console.log(props)
    return (
    <div>
        <h1>Welcome {props.name} to</h1>
        {props.children}
        <h1>!</h1>
    </div>);
};

export default Welcome;