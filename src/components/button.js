import React from 'react';

const Button = (props) => {
    return (
        <button id="button" className="button" type="submit" value="Submit">{props.buttonName}</button>
    )
}

export default Button;