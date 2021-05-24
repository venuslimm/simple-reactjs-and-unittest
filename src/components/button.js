// import { Button } from "@material-ui/core";
import React from 'react';

const Button = (props) => {
    return (
        <button className="button" type="submit" value="Submit">{props.buttonName}</button>
    );
}

export default Button;