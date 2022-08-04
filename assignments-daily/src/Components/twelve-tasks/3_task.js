import React from 'react'
import { useState } from 'react'

const Third = () => {
    const [test, setTest] = useState({
        field1: 'white',
        field2: 'white'
    })
    const handleMouse = (e, color) => {
        setTest({ ...test, [e.target.name]: color })
        console.log("color", test);
    }
    return (
        <div className='container'>
            <h3 className='text-danger ms-2'>Mouser Hover</h3>
            <div>
                <input type="text" name='field1' style={{ backgroundColor: test.field1 }} placeholder='field1' onMouseOver={(e) => handleMouse(e, "yellow")} onMouseLeave={(e) => handleMouse(e, "white")} />
            </div>
            <div className='mt-2'>
                <input type="text" name='field2' style={{ backgroundColor: test.field2 }} placeholder='field2' onMouseOver={(e) => handleMouse(e, "cyan")} onMouseLeave={(e) => handleMouse(e, "white")} />
            </div>
        </div>
    )
}

export default Third;