import React, { useState } from 'react';
import './App.css';
import MemeList from './MemeList';
import Form from './Form';
import { useDispatch } from "react-redux";


function App() {
  
  const [memeData,setMemeData] = useState(null);

  const dispatch = useDispatch();

  const addMeme = () => dispatch({ 
    type: "ADD_MEME",
    payload: memeData
  });

  const removeMeme = (id) => dispatch({ 
    type: "REMOVE_MEME",
    payload: id
  });

  return (
    <div className="App">
      <h1>original meme generator</h1>
      <Form setMemeData={setMemeData} memeData={memeData} addMeme={addMeme}/>
      <MemeList removeMeme={removeMeme}/>
    </div>
  );
}

export default App;