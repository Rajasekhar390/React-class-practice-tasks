import React, { useState } from 'react'
import './2_task.css'
import fname from '../../images/icon-name.svg'
import lname from '../../images/icon-name.svg'
import email from '../../images/icon-email.svg'
import password from '../../images/icon-password.svg'
import confirmPassword from '../../images/icon-visibility.svg'

const Second = () => {
    const [test, setTest] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleInputChange = (e) => {
        console.log("test", test)
        setTest({ ...test, [e.target.name]: e.target.value, error: '' })
    }
    return (
        <div className='bg text-dark'>
            <h4 className='ms-5 text-danger border border-danger'>ASSESSMENT ON 29-07-2022</h4>
            <form className='ms-5 container text-white'>
                <div className='mt-3 posRel' >

                    <div>
                        <label htmlFor="fname"><b>FirstName:</b></label>
                        <img className='posAbs' src={fname} alt="fname" />
                        <input className='ps-5 ms-3 border-white' type="text" name='fname' placeholder='Enter FirstName' value={test.fname} onChange={handleInputChange} />
                    </div>
                </div>
                <div className='mt-3 posRel'>
                    <div>
                        <label htmlFor="lname"><b> LastName:</b></label>
                        <img className='posAbs' src={lname} alt="fname" />
                        <input className='ps-5 ms-3 border-white' type="text" name='lname' placeholder='Enter LastName' value={test.lname} onChange={handleInputChange} disabled={!test.fname} />
                    </div>
                </div>
                <div className='mt-3 posRel'>
                    <div>
                        <label htmlFor="fname"><b> Email:</b></label>
                        <img className='posAbs' src={email} alt="fname" />

                        <input className='ps-5 ms-5 border-white' type="text" name='email' placeholder='Enter EmailAddress' value={test.email} onChange={handleInputChange} disabled={!test.lname} />
                    </div>
                </div>
                <div className='mt-3 posRel'>
                    <div>
                        <label htmlFor="fname"><b>Password:</b></label>

                        <img className='posAbs' src={password} alt="fname" />

                        <input className='ps-5 ms-3 border-white' type="password" name='password' placeholder='Password' value={test.password} onChange={handleInputChange} disabled={!test.email} />
                    </div>

                </div>
                <div className='mt-3 posRel1'>
                    <div>
                        <label htmlFor="fname"><b>CPassword:</b></label>
                        <input className='ps-5 ms-2 border-white' type="password" name='confirmPassword' placeholder=' ConfirmPassword' value={test.confirmPassword} onChange={handleInputChange} disabled={!test.password} />
                        {/* {
                            test.password && test.confirmPassword ? <img className='posAbs1 redIcon' src={confirmPassword} alt="fname" /> : null
                        }

                        {
                            test.password === test.confirmPassword ? <img className='posAbs1 greenIcon' src={confirmPassword} alt="fname" /> : null
                        } */}

                        {/* {
                            ((state.password && state.confirmpassword) && (state.password === state.confirmpassword)) ? <img src={CorrectIcon} className="icon1" /> : <img src={CloseIcon} className="icon1" />
                        } */}
                        {
                            ((test.password && test.confirmPassword) && (test.password === test.confirmPassword)) ? <img src={confirmPassword} className="posAbs1 greenIcon " /> : <img src={confirmPassword} className="posAbs1  redIcon" />
                        }
                    </div>
                </div>

                <button className='bg-success mb-4 mt-3 text-white border border-white'><b> Login </b> <h4>Review By: Prasad (or) Abhilash</h4></button>

            </form>
        </div>
    )
}

export default Second;