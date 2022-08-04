import React from 'react'
import { useState } from 'react'

const Fifth = () => {
    const [array, setArray] = useState([])
    const [test, setTest] = useState(
        {
            name: '',
            search: ''
        }
    );
    const handleChange = (e) => {
        setTest({ ...test, [e.target.name]: e.target.value })
        console.log("test", test)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const checkEmptyInput = !Object.values(test).every(res => res === "")
        if (checkEmptyInput) {
            const newData = (data) => ([...data, test])
            setArray(newData);
            const emptyInput = { name: '' }
            setTest(emptyInput)
        }

    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <input type="text" onChange={handleChange} value={test.name} name="name" className="form-control" placeholder="Name" />
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>SNo</th>
                                    <th>Name</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    array.map((data, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{data.name}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
                <button className='btn btn-success border-white' onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Fifth;