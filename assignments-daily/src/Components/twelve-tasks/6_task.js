import React from 'react'
import { useState } from 'react'

const Sixth = () => {
  const [test, setTest] = useState('')

  const handleInput = (e) => {
    setTest(e.target.value.trim())
    console.log(e.target.value);
  }

  return (
    <div className='container'>
      <h5><b className='text-danger'> Trim the Input Field</b></h5>
      <div className='mt-3'>
        <label htmlFor="password"><b> Password:</b></label>
        <input
          type="text"
          placeholder='Enter Password'
          onChange={handleInput}
          name='password'
          value={test}
        />
      </div>
      <h3 className='text-danger'>{test}</h3>
    </div>
  )
}

export default Sixth;