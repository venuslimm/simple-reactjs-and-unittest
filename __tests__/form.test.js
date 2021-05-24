import React from 'react';
import Form from '../src/components/form';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { mount, shallow } from 'enzyme';
import Login from '../src/Pages/Login';

import userContext from '../src/components/userContext';
import Greeting from '../src/components/greeting';

// Groups all the login related tests together
describe("form login", () => {
    describe("Testing context", () => {
        test("it should mock the context", () => {
            const contextValue = { username: 'Venus' };
            jest
                .spyOn(userContext, 'userContext')
                .mockImplementation(() => contextValue);
            const wrapper = shallow(<Greeting />);
            const h3 = wrapper.find('h3');
            expect(h3.text()).toBe('Welcome Venus');
        })
    })
    // // Groups the test that checks for valid inputs
    // describe("test with valid inputs", () => {
    //     // it - passes a func that will be executed (basically the test itself) and why async
    //     it('calls the onSubmit function by clicking on the Login button', async ()=> {
    //         // jest.fn - mock function

    //         const wrapper = shallow(<Login />);
    //         // const handleSubmit = jest.fn();
    //         // wrapper.instance().handleSubmit = handleSubmit;
    //         // wrapper.update();
    //         // wrapper.find('#form').simulate('submit');
    //         // expect(fn).toBeCalled();

    //         // const {getByLabelText, getByRole} = render(<Form />);

    //         // await act(async () => {
    //         //     fireEvent.change(getByLabelText("Username"), {target: {value: "venus"}});
    //         //     fireEvent.change(getByLabelText("Password"), {target: {value: "Password1234*"}});
                
    //         // })

    //         // await act(async () => {
    //         //     fireEvent.change(getByRole("button"));
    //         // })

    //         // expect(mockOnSubmit).toHaveBeenCalled();
    //     })
    // })
})