import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Form from './components/Form';
import Table from './components/Table';


function App() {

  return (
    <div className="App">
      <h2>메인페이지</h2>
      <div className="d_form">
        <Form />
      </div>
      <Counter />
      <div  className='t01'>
        <Table/> 
      </div>
    </div>
  );
}

export default App;
