import logo from './logo.svg';
import './App.css';
import './css/Style.css'
import { useState } from 'react';
import Movies from './components/Movies';

function App() {

  // useState
  const [movies,setMovies]= useState([
    {no:1, title:'쥬라기공원1', year:2000},
    {no:2, title:'해리포터1', year:2001},
    {no:3, title:'아이언맨1', year:2002},
  ]);

  const [movieNo,setMovieNo] = useState('');
  const [movieTitle,setMovieTitle] = useState('');
  const [movieYear,setMovieYear] = useState('');

  const [mNo,setMNo] = useState('');
  const [mTitle,setMTitle] = useState('');
  const [mYear,setMYear] = useState('');

  // map 함수 (key가 있어야 함)
  const movie_list = movies.map((movie)=>{
    return(
      <Movies movie={movie} key={movie.no} />
    )
  });

  const changeBtn = () => {
    setMovies([
      ...movies, {no:mNo, title:mTitle, year:mYear}
    ]);
    setMNo('');
    setMTitle('');
    setMYear('');
  }


  return (
    <div className="App">
      <div className='s-form'>
        <h2>영화등록</h2>
        <div>입력된 영화: {movieTitle} {movieYear} {movieNo}</div>
         <label>번호</label>
        <input type='text' placeholder='번호를 입력하세요' value={mNo} onChange={(e)=>setMNo(e.target.value)}></input><br/>
        <label>영화제목</label>
        <input type='text' placeholder='영화제목을 입력하세요' value={mTitle} onChange={(e)=>setMTitle(e.target.value)}></input><br/>
        <label>년도</label>
        <input type='text' placeholder='년도를 입력하세요' value={mYear} onChange={(e)=>setMYear(e.target.value)}></input><br/>
        <button className='s-btn' onClick={changeBtn}>영화등록</button>
      </div>

      {movie_list}
    </div>
  );
}

export default App;
