import logo from '../logo.svg';
import React from 'react';
import Form from '../components/form.js';
import '../App.css';

const Login = () => {
    return (
        <div className="App">
            <header>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <Form />
        </div>
    )
}

export default Login;