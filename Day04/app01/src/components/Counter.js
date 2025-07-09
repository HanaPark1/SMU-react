import React, { useState } from "react";
import '../css/Style.css'

const Counter = () => {
    const [count, setCount] = useState(0);

    const nBtn = () => {
        setCount(count+2)
    }

    return (
        <>
            <button onClick={nBtn}>
                버튼 {count}
            </button>
        </>
    );
}

export default Counter;