import logo from './logo.svg';
import './App.css';
import './css/style.css';

function App() {
  // js 변수 선언 var-변수(예전, 똑같은 이름의 변수 사용 가능), let-변수(현재, 똑같은 이름은 ㄴㄴ), const-상수(한번 들어간값은 바뀌지 x, 함수)

  // var a = 10;
  // let b = 10;
  // a = 20;
  // b = 30;
  // const no = 5;
  // no = 20;
  // app.js에서 css 적용방법
  // const style = {
  //   color : '#000000',
  //   fontSize : '40px',
  //   // backgroundColor: 'green',
  //   // testAlign:'center',
  // }

  // let count = 10;

  // const btn = function() {
  //   alert('경고');
    
  // }

  return (
    // html 소스 부분
    // <div className="App">
    //   <h2 style={style}>메인페이지</h2>
    //   <div className='d01'>숫자: {count}</div>
    //   <br/>
    //   <button id='btn' onClick={btn}>확인</button>
    // </div>
    <>
      <div className="App">
        <h2>로그인</h2>
        <div className='inputContainer'>
          <div className='inputBox'>
            <label>아이디</label>
            <input></input>
          </div>
          <br/>
          <div className='inputBox'>
            <label>비밀번호</label>
            <input></input>
          </div>
        </div>
        <button className='loginBtn'>로그인</button>
      </div>
    </>
  );
}

export default App;
