import React from 'react';
import '../assets/css/Welcome.css';

const Welcome = (props) => {

    const { currentMessage } = props;

    return (
        <div className="Welcome">
            Welcome to this demo. You said: "{currentMessage}".
        </div>
    );
}

export default Welcome;