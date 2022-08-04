import React, { useState } from 'react'

const Ninth = () => {
    const [test, setTest] = useState({
        text: '',
        message: '',
        list: []
    })
    const { message, text, list } = test
    const handleInput = (e) => {
        setTest({ ...test, text: e.target.value, message: '', list: [] })
    }
    let arr = text.split(' ');
    const submitFn = (e) => {
        e.preventDefault();
        if (text) {
            for (let i = 0; i <= arr.length - 1; i++) {
                if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
                    list.push(arr[i]);
                    setTest({ ...test, list, message: ' ' })
                }
            }
        } else {
            setTest({ ...test, message: 'Please enter sentence' })
        }
    }
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-md-4'>
                    <div>

                        <input
                            type="text"
                            name='enteredText'
                            value={test.enteredText}
                            onChange={handleInput}
                            placeholder={'Enter Text'}
                        />
                        <div className='mt-3'>
                            <button className='btn btn-warning' onClick={submitFn}>submit</button>
                        </div>
                        {
                            message ?
                                <p className='text-danger'> <b>{message}</b></p> : null
                        }
                        {
                            list &&
                            list.map((each, index) => {
                                return (
                                    <span className='text-warning' key={index}><b>{each}:</b></span>
                                )
                            })
                        }
                    </div>
                    <div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Ninth;