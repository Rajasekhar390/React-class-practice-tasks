import React, { useState } from 'react'

const Tenth = () => {
    // var string = 'C0dE*x  b0X!';
    const [state, setState] = useState({
        string: '',
        arr1: [],
        arr2: [],
        arr3: [],
        arr4: [],
        arr5: [],
        arr6: [],
        arr7: [],
        messages: {
            arr1: '',
            arr2: '',
            arr3: '',
            arr4: '',
            arr5: '',
            arr6: '',
            arr7: '',
        },
        lengths: {
            length1: '',
            length2: '',
            length3: '',
            length4: '',
            length5: '',
            length6: '',
            length7: '',
        }
    })
    const { string, arr1, arr2, arr3, arr4, arr5, arr6, arr7, messages, lengths } = state

    const handleInput = (e) => {
        setState({
            ...state, [e.target.name]: e.target.value,
            arr1: [], arr2: [], arr3: [], arr4: [], arr5: [], arr6: [], arr7: [],
            messages: {
                arr1: '',
                arr2: '',
                arr3: '',
                arr4: '',
                arr5: '',
                arr6: '',
                arr7: '',
            },
        })
    }
    const getCapitalLetters = () => {
        const onlyUpper1 = string.match(/[A-Z]/g);
        return onlyUpper1;
    }

    const getSmallLetters = () => {
        const onlyLower = string.match(/[a-z]/g);
        console.log(onlyLower);
        return onlyLower;
    }
    const getVowels = () => {
        const vowels = string.match(/[aeiou]/gi);
        return vowels;
    }
    const getConsonants = () => {
        const consonants = string.match(/[bcdfghjklmnpqrstvwxys]/gi);
        return consonants;
    }
    const getNumber = () => {
        var num = string.replace(/[^0-9]/g, '');
        return num.split('')
    }
    const getWhiteSpaces = () => {
        var whitespace = string.match(/\s/g) || '';
        return whitespace;
    }
    const getSpecialCharacters = () => {
        var specialCharacters = string.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g);
        return specialCharacters;
    }
    const submitFn = (e) => {
        e.preventDefault();
        // 1st getcapitals
        const arr1 = getCapitalLetters();
        // 2nd getsmallletters
        const arr2 = getSmallLetters();
        // 3rd getVowels
        const arr3 = getVowels();
        // 4th getConsonants
        const arr4 = getConsonants();
        // 5th getNumber
        const arr5 = getNumber();
        // 6th getNumber
        const arr6 = getWhiteSpaces();
        // 7th getNumber
        const arr7 = getSpecialCharacters();

        messages.arr1 = "Capital letters  : "
        messages.arr2 = "Lowercase letters  : "
        messages.arr3 = "Vowels  : "
        messages.arr4 = "Consonents  : "
        messages.arr5 = "Numbers  : "
        messages.arr6 = "Whitespaces  : "
        messages.arr7 = "Special Characters  : "
        lengths.length1 = arr1.length
        lengths.length2 = arr2.length
        lengths.length3 = arr3.length
        lengths.length4 = arr4.length
        lengths.length5 = arr5.length
        lengths.length6 = arr6.length
        lengths.length7 = arr7.length
        setState({
            ...state, arr1, arr2, arr3, arr4, arr5, arr6, arr7,
            messages, lengths
        })
    }
    console.log(arr1);
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-md-4'>
                    <div >
                        <h3 className='text-warning'>Upper and Lower and Special </h3>
                        <div >
                            <form>
                                <input
                                    type="text"
                                    name='string'
                                    value={string}
                                    onChange={handleInput}
                                    placeholder={'Enter Text...'}
                                />
                                <div className='mt-3'>
                                    <button className='btn btn-warning' onClick={submitFn}>submit</button>
                                </div>
                            </form>
                            {
                                messages.arr1 && <span>{messages.arr1}{lengths.length1} </span>
                            }
                            <p>
                                {
                                    arr1 &&
                                    arr1.map((each, index) => {
                                        return (
                                            <span key={index}>{each},</span>
                                        )
                                    })
                                }
                            </p>
                            {
                                messages.arr2 && <span>{messages.arr2}{lengths.length2} </span>
                            }

                            <p>
                                {
                                    arr2 &&
                                    arr2.map((each, index) => {
                                        return (
                                            <span key={index}>{each},</span>
                                        )
                                    })
                                }
                            </p>
                            {
                                messages.arr3 && <span>{messages.arr3}{lengths.length3} </span>
                            }
                            <p>
                                {
                                    arr3 &&
                                    arr3.map((each, index) => {
                                        return (
                                            <span key={index}>{each},</span>
                                        )
                                    })
                                }
                            </p>
                            {
                                messages.arr4 && <span>{messages.arr4}{lengths.length4} </span>
                            }
                            <p>
                                {
                                    arr4 &&
                                    arr4.map((each, index) => {
                                        return (
                                            <span key={index}>{each},</span>
                                        )
                                    })
                                }
                            </p>
                            {
                                messages.arr5 && <span>{messages.arr5}{lengths.length5} </span>
                            }
                            <p>
                                {
                                    arr5 &&
                                    arr5.map((each, index) => {
                                        return (
                                            <span key={index}>{each},</span>
                                        )
                                    })
                                }
                            </p>
                            {
                                messages.arr6 && <span>{messages.arr6}{lengths.length6} </span>
                            }
                            <p>
                                {
                                    arr6 &&
                                    arr6.map((each, index) => {
                                        return (
                                            <span key={index}>{each},</span>
                                        )
                                    })
                                }
                            </p>
                            {
                                messages.arr7 && <span>{messages.arr7}{lengths.length7} </span>
                            }
                            <p>
                                {
                                    arr7 &&
                                    arr7.map((each, index) => {
                                        return (
                                            <span key={index}>{each},</span>
                                        )
                                    })
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tenth