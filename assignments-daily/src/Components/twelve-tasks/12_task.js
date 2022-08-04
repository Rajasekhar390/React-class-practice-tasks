import React, { useState } from 'react'

const Twelfth = () => {
  const [state, setState] = useState({
    string: '',
    displayMsg: '',
    arr: [],
    obj:{}
  })
   const [obj, setObj] = useState("");
  const { string, displayMsg, arr } = state
  const handleInput = (e) => {
    setState({ ...state, string: e.target.value, displayMsg: '' })
  }
  let count = 0,
    string1
  const ShowData = (e) => {
    e.preventDefault()
    string1 = string.split(' ')
    for (let i = 0; i < string1.length; i++) {
      count = 0
      for (let j = 0; j < string1.length; j++) {
        if (string1[i] == string1[j]) {
          count++
        }
      }
      if (count > 1) {
        arr.push(string1[i])
        setState({ ...state, arr, displayMsg: '' })
        
      }
    }
  }
  return (
    <div>
      <div >
        <form>
          <input
            type="text"
            name="number"
            value={string}
            onChange={handleInput}
          />

          <button onClick={ShowData}>click</button>
        </form>
        {displayMsg && <p>{displayMsg}</p>}
        {arr.map((item) => {
          return <p>{item}</p>
        })}
      </div>
    </div>
  )
}

export default Twelfth;
