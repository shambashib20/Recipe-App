import React from "react";
import './App.css';

const App = () =>{
  const APP_ID = "6adfadca";
  const APP_KEY = "2469d60cbb1802387e1b0d2e9b699f09";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}` ;

  return(
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default App;
