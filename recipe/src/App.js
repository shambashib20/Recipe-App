import React from "react";
import './App.css';

const App = () =>{
  const APP_ID = "6adfadca";
  const APP_KEY = "2469d60cbb1802387e1b0d2e9b699f09	";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}` ;

  return(
    <div className="App">
        <form className="search-form">
          <input className="search-bar" type="text"/>
          <button className="search-button" type="submit">Search</button>
        </form>
    </div>
  )
}

export default App;
