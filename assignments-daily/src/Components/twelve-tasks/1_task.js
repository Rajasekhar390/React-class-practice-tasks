import React from 'react'
import { useState } from 'react'

const First1 = () => {
    const [value, setValue] = useState('')
    const [para, setPara] = useState('')
    const [test, setTest] = useState(true)
    const handleInputChange = (e) => {
        setValue(e.target.value)
    }
    const allowOnlyNumbers = (e) => {
        var charCode = (e.which) ? e.which : e.keyCode;
        console.log(charCode);
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            e.preventDefault()
            return true;
        }
    }

    const changeData = () => {
        setPara(value * 80)
        setTest(true)
    }
    const clearData = () => {
        // setTest(false)
        setValue('')
    }

    return (
        <div>
          <h3>  Convert Dollar to Indian Rupee </h3>
            <label htmlFor="dollor"> <b> Amount ($):</b></label>
            <input type="text" placeholder='$' value={value} onChange={handleInputChange} onKeyPress={allowOnlyNumbers} />
            {
                test ? <p><b> indian Rupee :</b> {para}</p> : null
            }
            <div>
                <button className='btn btn-success border-white ms-5' onClick={changeData}>
                    Calculate
                </button>

                <button className='btn btn-danger border-white ms-3' onClick={clearData}>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default First1