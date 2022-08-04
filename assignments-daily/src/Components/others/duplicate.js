import React, { useState } from 'react'

const Duplicate = () => {
    const [data, setData] = useState([])
    const [text, setText] = useState('')
    const handleInputChange = () => {
        setData(data)
        console.log(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        var duplicates = [];
        var arr = [];
        var words = text.split(' ');
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            console.log(i)
            if (arr.includes(word)) {
                duplicates.push(word);
            } else {
                arr.push(word)
            }
        }
        setText({ ...text, data })

    }
    const getCount = (item) => {
        const arr = data.filter((each) => each == item)
        return arr.length
    }
    return (
        <div className='container mt-4'>
            <h3 className='text-warning'><b> Duplicate Words </b></h3>
            <div>
                <input type="text" placeholder='Enter Text .....' onChange={handleInputChange} />
            </div>
            <div className='mt-4'>
                <button className='btn btn-warning text-white' onClick={handleSubmit}><b> submit </b></button>
            </div>
            <div>
                {
                    data.map(item => {
                        return (
                            <p>{data}{getCount(item)}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Duplicate;