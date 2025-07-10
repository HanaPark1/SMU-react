import React, { useState } from "react"

const Counter = ({btnName, id, num}) => {
    const [count, setCount] = useState(0);
    const [nBtn, setNBtn] = useState('');

    let txt = btnName || '이름없음';


    const countUp = () => {
        setCount(count+1);
    }

    return(
        <div>
            <button onClick={countUp}>{txt} {count}</button>
        </div>
    );
}

export default Counter