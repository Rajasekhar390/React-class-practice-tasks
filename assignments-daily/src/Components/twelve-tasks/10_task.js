import React, { useState } from 'react'

export default function Tenth() {
    const [data, setData] = useState({
        text: '',
        result: [],
        lowerCase: [],
        lowerCasecount: 0,
        upperCase: [],
        upperCasecount: 0,
        vowelsCount: 0,
        vowels: [],
        num: [],
        numCount: 0,
        SplChar: [],
        SplCharcount: 0,
        whiteSpace: 0
    })
    const handleDivisibleNumber = (e) => {
        setData({ ...data, text: e.target.value })
    }


    const handleNumber = () => {
        const str = data.text.split(' ')
        for (let i = 0; i < str.length; i++) {
            let count = 0
            for (let j = 0; j < str.length; j++) {
                if (str[i] == str[j]) {
                    count++
                }
            }
            if (count == 1) {
                data.result.push(str[i])
                setData({ ...data })
            }
        }
        console.log(data.result);
    }

    const getCapitalLettrs = (str) => {

        return str == str.toUpperCase()
    }

    const getNumbers = (str) => {
        return !isNaN(str)
    }

    const getSmallLetters = (str) => {
        return str == str.toLowerCase()
    }

    const getVowels = (str) => {
        vowels = /[aeiou]/gi;
        return str.match(vowels);
    }

    const getwhiteSpace = (str) => {
        return /\s/.test(str)
    }

    const getSplChar = (str) => {
        var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
        return format.test(str)
    }





    let { lowerCase, upperCase, lowerCasecount, upperCasecount, vowelsCount, vowels, num, numCount, SplCharcount, SplChar, whiteSpace } = data
    const Find = () => {
        const text = data.text.split('');


        let lower = [];
        let upper = [];
        let num = [];
        let vowels = [];
        let spl = []
        let count = 0
        for (let i = 0; i < text.length; i++) {
            if (getVowels(text[i])) {
                vowels.push(text[i])
            } else if (getwhiteSpace(text[i])) {
                count++

            } else if (getSplChar(text[i])) {
                spl.push(text[i])
            } else if (getNumbers(text[i])) {
                num.push(text[i])
            } else if (getSmallLetters(text[i])) {
                lower.push(text[i])
            } else if (getCapitalLettrs(text[i])) {
                upper.push(text[i])
            }

        }
        setData({ ...data, num, numCount: num.length, lowerCase: lower, lowerCasecount: lower.length, upperCase: upper, upperCasecount: upper.length, vowels: vowels, vowelsCount: vowels.length, whiteSpace: count, SplChar: spl, SplCharcount: spl.length })

    }
    return (
        <div className='container text-warning'>
            <input type="text" name="text" onChange={handleDivisibleNumber} />
            <button className='btn btn-white' onClick={handleNumber}></button>
            <div className='mt-4'><button className='btn btn-warning' onClick={Find}>Find</button></div>

            <h1>{data.result.join(',')}</h1>

            <h3>Lower Case: {lowerCasecount} {lowerCase}</h3>
            <h3>Uppper Case: {upperCasecount} {upperCase}</h3>
            <h3>vowels: {vowelsCount} {vowels}</h3>
            <h3>Numbers: {numCount} {num}</h3>
            <h3>Special Char: {SplCharcount} {SplChar}</h3>
            <h3>whiteSpace: {whiteSpace} </h3>

        </div>

    )
}

