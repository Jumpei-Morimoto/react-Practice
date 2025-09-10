
import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>会員管理</h1>
      </header>
        <button onClick={() => navigate('/adduser')}>会員登録</button>
        <button onClick={() => navigate('/searchuser')}>会員検索</button>
    </div>
  );
}

export default App;
