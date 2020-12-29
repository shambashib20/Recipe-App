import React, {useEffect, useState} from "react";
import './App.css';
import Recipe from './Recipe';

const App = () =>{
  const APP_ID = "6adfadca";
  const APP_KEY = "2469d60cbb1802387e1b0d2e9b699f09";
  const [recipes, setRecipes] = useState([]);
   
  
  useEffect( () =>{
     getRecipes();
  }, []); 
  
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }
  return(
    <div className="App">
        <form className="search-form">
          <input className="search-bar" type="text"/>
          <button className="search-button" type="submit">Search</button>
        </form>
        
    </div>
  );
};
export default App;
