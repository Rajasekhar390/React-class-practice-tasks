import React, { useState } from 'react'

const Eleventh = () => {
  const [state, setState] = useState('')

  const handleInput = (e) => {
    setState(e.target.value)
  }

  const ShowData = () => {
    function areBracketsBalanced(expr) {

      let stack = []


      for (let i = 0; i < expr.length; i++) {
        let x = expr[i]

        if (x == '(' || x == '[' || x == '{') {

          stack.push(x)
          continue
        }



        if (stack.length == 0) {
          return false
        }
        let check
        switch (x) {
          case ')':
            check = stack.pop()
            if (check == '{' || check == '[') {
              return false
            }
            break
          case '}':



            check = stack.pop()
            if (check == '(' || check == '[') return false
            break

          case ']':
            check = stack.pop()
            if (check == '(' || check == '{') return false
            break
        }
      }


      return stack.length == 0
    }

    let expr = state


    if (areBracketsBalanced(expr)) {
      setState('Valid String ')
    } else {
      setState('Not Valid String ')
    }
  }

  return (
    <div className='container'>
      <h3>Parantheses</h3>
      <h1> {state}</h1>
      <input type="text" value={state} onChange={handleInput} />
      <div className='mt-3'>
        <button className='btn btn-warning' onClick={ShowData}>submit</button>
      </div>
    </div>
  )
}

export default Eleventh;
