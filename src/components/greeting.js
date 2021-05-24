import React, { useContext } from "react";
import userContext from './userContext';

const Greeting = () => {
    const {username} = useContext(userContext);
    return (
        <h3>Welcome {username}</h3>
    )
}

export default Greeting;