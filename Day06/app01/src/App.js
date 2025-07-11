import logo from './logo.svg';
import a1 from './images/1.png'
import './App.css';
import React, { useState } from 'react';
import Counter from './components/Counter';
import MovieList from './components/MovieList';
import './css/Style.css'

function App() {
  const movies = [
        {no:1, title:'아이언맨 1', year: 2001 },
        {no:2, title:'아이언맨 2', year: 2002 },
        {no:3, title:'아이언맨 3', year: 2003 },
        {no:4, title:'아이언맨 4', year: 2004 },
        {no:5, title:'아이언맨 5', year: 2005 },
      ]
  
  const movieList = movies.map((movie) => {
        return(
            <MovieList movie={movie} key={movie.no}/>
        )
      })

  const [bname, setBName] = useState('변경');

  return (
    <div className="App">
      {/* 상단메뉴 */}

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="card">
        <img src={a1} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
      </div>
      
      <h2 classNameName='top_title'>영화 리스트</h2>
      {movieList}
    </div>
  );
}

export default App;
