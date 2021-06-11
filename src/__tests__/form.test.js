import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import userEvent from '@testing-library/user-event'
import userContext from '../components/userContext';
import Form from '../components/form';
import Greeting from '../components/greeting';

// describe: Groups all the login related tests together
// describe.only: Only run tests under this {}
// Testing Context: https://www.samdawson.dev/article/react-context-testing
// Testing State (react hooks): https://blog.logrocket.com/a-quick-guide-to-testing-react-hooks-fa584c415407/

describe('Login Function', () => {

    // Login details
    const user = {
        username: "",
        setUsername: (newUsername) => { user.username = newUsername; },
    };
    const newUsername = "Chocome";

    describe('Checking for Form', () => {
        const password = "Password1234!";
        const invalidPasswords = {
            'pass': "Password must be 8 or more characters",
            'password': "Password must contain at least 1 number",
            'Password': "Password must contain at least 1 number",
            'Password1': "Password must contain at least 1 special character",
            'password1': "Password must contain at least 1 special character",
            'password!': "Password must contain at least 1 number",
            'Password!': "Password must contain at least 1 number",
            'password1!': "Password must contain at least 1 capital letter",
        };

        let usernameInput;
        let passwordInput;
        let loginButton;

        // Render components to be tested
        beforeEach(() => {
            render(
                <Router>
                    <userContext.Provider value={user}>
                        <Form />
                    </userContext.Provider>
                </Router>
            );
            usernameInput = screen.getByTestId('username');
            passwordInput = screen.getByTestId('password');
            loginButton = screen.getByRole('button');
            window.alert = jest.fn();
        });
        afterEach(() => {
            cleanup();
            jest.clearAllMocks();
        });
    
        test('Checking all the form components are defined', () => {
            expect(usernameInput).toBeDefined();
            expect(passwordInput).toBeDefined();
            expect(loginButton).toBeDefined();
        });
        describe('Checking form when it is submitted', () => {
            test('When no username is entered', () => {
                fireEvent.change(passwordInput, { target: { value: password }}); // to use fireEvent when var uses state
                userEvent.click(loginButton);
                expect(window.alert).toBeCalledWith("Please fill in both username and password fields.");
            });
            test('When no password is entered', () => {
                fireEvent.change(usernameInput, { target: { value: newUsername }});
                userEvent.click(loginButton);
                expect(window.alert).toBeCalledWith("Please fill in both username and password fields.");
            });
            test('When no input is entered', () => {
                userEvent.click(loginButton);
                expect(window.alert).not.toBeCalledWith("Hi " + user.username + '. Youre logged in :)');
                expect(window.alert).toBeCalledWith("Please fill in both username and password fields.");
            });
            test('When valid username and password is entered', () => {
                fireEvent.change(usernameInput, { target: { value: newUsername }});
                fireEvent.change(passwordInput, { target: { value: password }}); // to use fireEvent when var uses state
                userEvent.click(loginButton);
                expect(window.alert).toBeCalledWith("Hi " + newUsername  + '. Youre logged in :)');
                expect(window.alert).not.toBeCalledWith("Please fill in both username and password fields.");
                expect(location.pathname).toEqual('/home');
                expect(location.pathname).not.toEqual('/login');
            });
            test('When username and invalid password is entered', () => {
                fireEvent.change(usernameInput, { target: { value: newUsername }});
                for (const [iPassword, errorMsg] of Object.entries(invalidPasswords)) {
                    fireEvent.change(passwordInput, { target: { value: iPassword }}); // to use fireEvent when var uses state
                    userEvent.click(loginButton);
                    expect(window.alert).toBeCalledWith(errorMsg);
                    expect(window.alert).not.toBeCalledWith("Error: " + errorMsg);
                    expect(window.alert).toBeCalledWith("Invalid password input, try again.");
                }
            });
        });
    });

    describe('Checking Greeting Page', () => {
        let greetingMessage;
        beforeAll(() => {
            user.username = 'æ';
            render(
                <Router>
                    <userContext.Provider value={user}>
                        <Greeting />
                    </userContext.Provider>
                </Router>
                
            );
            greetingMessage = screen.getByRole('heading');
        });
        afterAll(cleanup);
        test('Greeting message is defined and have the right text content as expected', () => {
            expect(greetingMessage).toBeDefined(); // defined as expected
            expect(greetingMessage).toHaveTextContent('Welcome ' + user.username); // context text (correct)
            expect(greetingMessage).not.toHaveTextContent('Welcome æspa'); // incorrect text
        });
    });

    // describe("Button styles", () => {
    //     const restingButtonStyles = `
    //         background-color: white;
    //         color: black;
    //     `
    //     const hoverButtonStyles = `
    //         background-color: #4CAF50;
    //         color: white;
    //     `
    //     it('is defined when rendered', () => {
    //         const button = screen.getByRole('button');
    //         console.log(button);
    //         expect(button).toBeDefined();
    //         expect(button).toHaveStyle(restingButtonStyles);
    //         expect(button).toHaveStyle(hoverButtonStyles);
    //     });
    // });
});