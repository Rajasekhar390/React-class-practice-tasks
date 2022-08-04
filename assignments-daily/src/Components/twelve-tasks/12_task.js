import React, { useState } from 'react'

const Twelve = () => {
  // let enteredText = 'Super Man Bat Man Spider Man';
  const [data, setData] = useState({
    string: '',
    list: [],
    repeat: [],
    length1: [],
    message: '',
  })
  const { message, string, list, repeat, length1 } = data
  const handleInput = (e) => {
    setData({ ...data, string: e.target.value, message: '', repeat: [] })
  }

  let arr = string.toLowerCase().split(' ');
  const submitFn = (e) => {
    e.preventDefault();
    let duplicates = []
    let repeatWords = []
    if (string) {
      for (let i = 0; i <= arr.length - 1; i++) {
        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
          duplicates.push(arr[i])
        }
      }
      for (let i = 0; i <= duplicates.length - 1; i++) {
        let word = duplicates[i]
        if (repeatWords.includes(word)) {

        } else {
          repeatWords.push(word)
        }
      }
    }
    setData({ ...data, list: duplicates, repeat: repeatWords })
  }
  const getCount = (item) => {
    const data = list.filter(x => x == item)
    return data.length
  }

  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-4'>
          <div>
            <h3 className='text-warning'>Duplicate Words</h3>
            <div >
              <form>
                <input
                  type="text"
                  name='string'
                  value={string}
                  onChange={handleInput}
                  placeholder={'Enter Duplicate Words'}
                />
                <div className='mt-3'>
                  <button className='btn btn-warning' onClick={submitFn}>submit</button>
                </div>
              </form>
              {
                repeat &&
                repeat.map((item, index) => {
                  return (
                    <li key={index} style={{ listStyleType: 'none' }}>{item} : {getCount(item)}</li>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Twelve