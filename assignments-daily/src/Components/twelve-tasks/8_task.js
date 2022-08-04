import React, { useState } from 'react'

const Eighth = () => {
    const [state, setState] = useState({
        number: '',
        displayMsg: '',
    })
    const { number, displayMsg } = state
    const handleInput = (e) => {
        setState({ ...state, number: e.target.value, displayMsg: '' })
    }
    console.log(typeof (number));
    const submitFn = (e) => {
        e.preventDefault();
        let num = parseInt(number);
        let sum = 0
        if (number && num !== 0) {
            for (let i = 1; i < num; i++) {
                if (num % i === 0) {
                    sum += i
                }
            }
            if (sum === num) {
                setState({ ...state, displayMsg: 'Entered number is clear which is : ' })
            } else {
                setState({ ...state, displayMsg: 'Entered number is not clear which is : ' })
            }
        } else {
            setState({ ...state, displayMsg: 'Please Enter number' })
        }
    }
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-md-4'>
                    <div >
                        <div >
                            <h3>Find clear number</h3>
                        </div>
                        <div >
                            <form >
                                <input
                                    type="text"
                                    name='number'
                                    value={number}
                                    onChange={handleInput}
                                    placeholder={'Enter any number'}
                                />
                                <div className='mt-3'>
                                    <button className='btn btn-warning' onClick={submitFn}>submit</button>
                                </div>
                            </form>
                            {
                                displayMsg &&
                                <p>{displayMsg}{number}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eighth