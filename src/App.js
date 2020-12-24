import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Routes from './routes/Routes';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes />
    </>
  ); 
}

export default App;
