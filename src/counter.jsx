import React, { useEffect, useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            alert(`${count}`)
        }, 3000)
    })

    return (
        <div>
            <p>U clicked {count} times</p>
            <button onClick={() => {setCount(count + 1)}}>
                CLick Me
            </button>
        </div>
    )
}
export default Counter