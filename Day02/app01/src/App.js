import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';
import './css/Style.css'

function App() {
  // const style = {
  //   color: 'red',
  //   backgroundColor:'yellow',
  // }

  // let count = 1; // 변수 선언 - var, let, const
  const [count, setCount] = useState(100);
  const [num, setNum] = useState(0);

  // 화살표 함수
  // const btn = () => {
    // count = count+1;
    // console.log(count);
    // document.getElementById('id01').innerText = "숫자: "+count;
  // } // const btn2 = function(){} {()=>{alert('확인 버튼 클릭')}} // const btn3 = function btn3(){}

  const upBtn = () => {
    let c = count + 1;
    setCount(c)
  }

  const downBtn = () => {
    let c = count - 1;
    setCount(c)
  }

  const confirmBtn = () => {
    let c = num;
    setCount(c); // useState 값을 변경하려면 set을 사용
    alert('확인버튼');
  }

  
  return (
    <div className="App">
      <h2>메인 페이지</h2>
      <div className='d01' id='id01'>{count}</div>
      <br/>
      <div>
        <div className='d01'>
          num: {num}
        </div>
        <br/>
        <label>숫자입력</label>
        <input type='text' className='num' value={num} onChange={(e)=>{setNum(e.target.value)}}></input>
        <br/>
      </div>
      <br/>
      <button onClick={confirmBtn}>확인</button>
      <br/>
      <button onClick={upBtn}>증가</button>
      <button onClick={downBtn}>감소</button>
    </div>
  );
}

export default App;
