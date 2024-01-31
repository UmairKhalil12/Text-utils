import './App.css';
import Form from './Components/Form';
import Heading from './Components/Heading/Heading';
import Navbar from './Components/Navbar/Navbar';
import { useState } from 'react';


function App() {
  const [mode ,setMode] = useState('light')
  // const toggleMode = (()=>{
  //   if(mode === "light"){
  //     setMode("dark")
  
  //   }
  //   else{
  //     setMode("light")
  //   }
  // })
  return (
    <div className="App">
      <Navbar mode = {mode}  setMode = {setMode}/>
      <br />
      <div className='container-2'>
        <div>
          <Heading text="TextUtils" />
          <Form/> 
        </div>
      </div>
    </div>
  );
}

export default App;
