import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MyTextfield from './myTextfield.js';
import userContext from './userContext';
import Button from './button';

function Form () {
    const {username, setUsername} = useContext(userContext);
    const [password, setPassword] = useState('');

    let history = useHistory();

    const validatePassword = (password) => {
        let error = '';
        if (password.length < 8) {
            error = "Password must be 8 or more characters";
        } else if (!/\d/.test(password)) {
            error = "Password must contain at least 1 number";
        } else if (!/[!@#$%&?]/g.test(password)) {
            error = "Password must contain at least 1 special character";
        } else if (!/[A-Z]/g.test(password)) {
            error = "Password must contain at least 1 capital letter";
        }
        if (error.length > 0) {
            alert(error);
            return false;
        }
        return true;
    }

    // when user submits form
    const handleSubmit = (event) => {
        if ((!username && !password) || !username || !password) {
            alert('Please fill in both username and password fields.');
        } else {
            if (validatePassword(password)){
                alert('Hi ' + username + '. Youre logged in :)');
                history.push('/home');
            } else {
                alert('Invalid password input, try again.')
            }
        }
        event.preventDefault();
    }

    return (
        <div className="Form">
            <form id="form" onSubmit={handleSubmit}>
                <MyTextfield type="text" name="username"
                    value={username} 
                    setValueFunction={setUsername} />
                <br />
                <MyTextfield type="password" name="password"
                    value={password} 
                    setValueFunction={setPassword} />
                <br />
                <Button buttonName="Login" />
            </form>
        </div>
    );
}

export default Form;