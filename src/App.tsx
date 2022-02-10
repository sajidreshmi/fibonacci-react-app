import './styles.css'
import { useState } from 'react'

const App = () => {
    const [number, setNumber] = useState<number>(0)

    const [sequence, setSequence] = useState<number[]>([])

    const fibonacciResult: any = (num: number) => {
        if (num === 1) {
            return [0, 1]
        } else {
            const sequence = fibonacciResult(num - 1)
            sequence.push(sequence.length - 1 + sequence.length - 2)
            return sequence
        }
    }

    const handleClick = () => {
        setSequence([])
        if (!number || number < 1) {
            alert('you must input a number greater than 0')
        } else {
            setSequence(fibonacciResult(number))
        }
    }

    return (
        <div className='App'>
            <h2>Fibonacci Finder</h2>
            <input
                type='number'
                min='0'
                onChange={(e) => setNumber(Number(e.target.value))}
            />
            <button onClick={handleClick}>Find Sequence</button>
            {sequence && sequence.length > 0 && (
                <div> fibonacci sequence is {sequence.join(',')} </div>
            )}
        </div>
    )
}

export default App
