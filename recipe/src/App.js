import React, {useEffect, useState} from "react";
import './App.css';

const App = () =>{
  const APP_ID = "6adfadca";
  const APP_KEY = "2469d60cbb1802387e1b0d2e9b699f09";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  const [counter, setCounter] = useState(0);

  useEffect(() =>{
     console.log('Effect has been run');
  });
  
  return(
    <div className="App">
        <form className="search-form">
          <input className="search-bar" type="text"/>
          <button className="search-button" type="submit"/>
        </form>
        <h1 onClick ={}>{counter}</h1>

    </div>
  );
};

export default App;
