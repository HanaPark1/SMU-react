import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Counter from './components/Counter';


function App() {

  const [nameStr, setNameStr] = useState('변경');
  const [chgName, setChgName] = useState('확인');
  const [titleName, setTitleName] = useState('확인');

  const [stdName, setStdName] = useState('홍길동');
  const [chgStdName, setChgStdName] = useState('홍길동');

  const nameBtn = () => {
    setTitleName(chgName);
  }

  const keyUp = (e) => {
    if (e.keyCode == 13){
      nameBtn();
    }
  }

  const stdBtn = () => {
    setChgStdName(stdName)
  }

  return (
    <div className="App">
      <h2>메인 페이지</h2>
      <label>이름: {chgStdName}</label>
      <br/>
      <input type='text' value={stdName} onChange={(e)=>setStdName(e.target.value)}></input>
      <button onClick={stdBtn}>학생 이름 변경</button>

      <hr/>
      <input type='text' value={chgName} onChange={(e) => setChgName(e.target.value)} onKeyUp={keyUp}/>
      <br/>
      <button onClick={nameBtn}>버튼네임 변경</button>
      <br/>

      {/* props */}
      <Counter btnName="클릭"/>
      <Counter btnName={nameStr} />
      <Counter btnName={titleName}/>

    </div>
  );
}

export default App;
