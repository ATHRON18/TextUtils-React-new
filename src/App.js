import './App.css';
import Alert from './components/Alert';

import Navbar from './components/Navbar';
import TextForms from './components/TextForms';


import React, { useState } from 'react';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState('');

  const showAlert=(message,type)=>{

    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1400);

  }
  const toggleMode=()=>{
    if( mode === 'dark'){
      setmode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode is Enabeld ","success")
      
    }
    else{
      setmode('dark')
      document.body.style.backgroundColor ='#0B1E32'
      showAlert("Dark mode is Enabeld","success")
      
    }
  }

  return (
    <>
      <Navbar title="Textutils" mode={mode} toggleMode = {toggleMode}/>
      <div className="container my-3 ">

      <Alert alert={alert}/>
            {/* <Route path="/about" element={<About />} /> */}
            <TextForms heading="Enter your Text To analyze" showAlert={showAlert} mode={mode} />
      
      
      </div>
       
       
       {/* <Router>

      <Switch>
          <Route path="/about">
          </Route>
          <Route path="/">
           
          </Route>
      </Switch>
      </Router> */}
      {/* <About/> */}
    </>
  );
}

export default App;
