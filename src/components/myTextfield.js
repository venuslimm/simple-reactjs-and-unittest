import React from 'react';

const MyTextfield = (props) => {

    const capitaliseFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const handleInputChange = (event) => {
        props.setValueFunction(event.target.value);
    }
    
    return (
        <div className="field">
            <label>{capitaliseFirstLetter(props.name)}</label><br/>
            <input className="MyTextfield"
                type={props.type}
                value={props.username}
                onChange={handleInputChange}
                required />
        </div>
    )
}

export default MyTextfield;