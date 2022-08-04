import React from 'react'
import { useState } from 'react';

const Four = () => {

    const [state, setState] = useState({
        text: '',
        message: ''
    });

    const { text, message } = state
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value, message: '' })
    }
    const submitFn = (e) => {
        e.preventDefault();
        const notNumber = isNaN(state.text)
        if (text) {
            if (notNumber) {
                setState({ ...state, message: "Entered value is string" })
                console.log("entered value is string");
            }
            else {
                setState({ ...state, message: "Entered value is number" })
                console.log("entered value is number")
            }
        }
        else {
            setState({ ...state, message: "Please Enter Value" })
        }
    }

    return (

        <div className='container'>
            <h3>Text is Number or String</h3>
            <div className='mt-3'>
                <label> Name: </label>
                <input type="text" name="text" value={state.text} onChange={handleChange} />
            </div>
            <div className='mt-3'>
                <button className='btn btn-success' onClick={submitFn}>submit</button>
            </div>

            {
                message ?
                    <p className='text-danger'><b> {message}{text}</b></p> : null
            }

        </div>

    )
}

export default Four;