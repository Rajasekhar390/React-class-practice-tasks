import React, { useState } from 'react'


const Seventh = () => {
    const [state, setState] = useState({
        text: '',
        search: '',
        list: [],

    })
    const { text, list, search } = state
    const handleInput = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const submitLogin = (e) => {
        e.preventDefault();
        list.push(text);
        setState({ ...state, list, text: '' })

    }
    console.log(list);
    return (
        <div className='container mt-3'>
            <div >
                <div>
                    <div >

                        <div >

                            <input
                                type="text"
                                name='text'
                                value={text}
                                onChange={handleInput}
                                placeholder={'Enter  text'}
                            />
                            <div className='mt-3'>
                                <button className='btn btn-success' onClick={submitLogin}>submit</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-8'>

                </div>
                <div className='col-4'>
                    <input
                        type="text"
                        name='search'
                        value={search}
                        onChange={handleInput}
                        placeholder={'Search text '}
                    />
                </div>

            </div>
            <div>

                <table >
                    <thead>
                        <tr>
                            <th>SNO</th>
                            <th>Text</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list &&
                            list.filter(each => each.toLowerCase().includes(search.toLowerCase())).map((each, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{each}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Seventh;
