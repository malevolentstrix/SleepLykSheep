import React,{  useState  } from 'react';
import Sleepapp from './Sleepapp'
import './App.css'
import logo from './logo.jpeg';
function App() {
  const [] = useState([])
  return (
    <>
          <div className="App">
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-stitle">A Simple App made for Calculating the sleep hours using the concept of Sleep cycles</h2>
          <h2 className="App-sstitle"><p>- By Jithin John</p>
          <p>Roll Number : AM.EN.U4AIE20135</p><p>CSE(AI) | B - BATCH</p></h2>
          </header>
      </div>
    <Sleepapp/>

    </>
  )
}

export default App;
