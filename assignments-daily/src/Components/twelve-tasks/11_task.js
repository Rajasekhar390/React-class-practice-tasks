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
            if (check == '{' || check == '['){
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
    <div>
      <h1> {state}</h1>
      <input type="text" value={state} onChange={handleInput} />
      <button onClick={ShowData}>click</button>
    </div>
  )
}

export default Eleventh;
