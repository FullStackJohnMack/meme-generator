import React from "react";
import './Meme.css';


function Meme( { meme, removeMeme, id } ) {
  const handleClick = () => {
    removeMeme(meme.id);
  }

  return (

    <div className="meme">
      <img src={meme.url} alt="user entered"/>
      <h2 className="topText">{meme.topText}</h2>
      <h2 className="bottomText">{meme.bottomText}</h2>
      <button onClick={handleClick}  className="removeButton">Delete Meme</button>
    </div>

  );
}

export default Meme;