import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './css/Style.css';

function App() {

  const [id,setId] = useState('aaa');
  const [pw,setPw] = useState('1111');
  const [cid,setCid] = useState('aaa');
  const [cpw,setCpw] = useState('1111');

  const loginBtn = () => {
    alert('변경');
    setCid(id);
    setCpw(pw);
  }

  const keyup = (e) => {
    if (e.keyCode == 13) {
      console.log('키동작확인');
    }
  }

  return (
    <div className="App">
      <h2>메인페이지</h2>
      <div className='c01'>아이디: {cid}</div>
      <div className='c01'>패스워드: {cpw}</div>
      <input type='text' placeholder='아이디를 입력하세요' value={id} onChange={(e)=>{setId(e.target.value)}}></input><br/>
      <input type='text' placeholder='패스워드를 입력하세요' value={pw} onChange={(e)=>{setPw(e.target.value)}} onKeyUp={keyup}></input><br/>
      <button onClick={loginBtn}> 로그인 </button>
    </div>
  );

  // // html에 데이터를 자동으로 전달해 주는 변수
  // const [count, setCount] = useState(100);
  // const [num, setNum] = useState(0);

  // // React reload 될 때 실행되는 함수

  // useEffect(()=>{
  //   console.log('로딩이 되고 있습니다.');
  // }, [num]); // num이 바뀔 때만 실행

  // useEffect(()=>{
  //   console.log('뭉냥냥.');
  // }, []); // 최초 한번만 실행

  // const upBtn = () => {
  //   // alert('숫자 증가');
  //   // setCount(count+Number(num));
  //   // setNum(0);
  //   setCount(count+1);
  // }

  // return (
  //   <div className="App">
  //     <h2>메인페이지</h2>
  //     <div>숫자 : {count}</div>
  //     <input type='text' value={num} onChange={(e)=>{setNum(e.target.value)}}></input>
  //     {/* <button onClick={() => {alert('증가')}}>증가</button> */}
  //     <button onClick={upBtn}> 숫자 증가</button>
  //   </div>
  // );
}

export default App;
