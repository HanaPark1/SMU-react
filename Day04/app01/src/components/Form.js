import { useState } from "react";


const Form = () => {
    return (
        <form>
            <label>아이디</label>
            <input type="text"></input><br />
            <label>패스워드</label>
            <input type="text"></input><br />
            <button>로그인</button>
        </form>
    )
}

export default Form