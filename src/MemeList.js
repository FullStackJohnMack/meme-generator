import React from "react";
import { useSelector } from "react-redux";
import './MemeList.css';
import Meme from './Meme';



function MemeList( {removeMeme} ) {

    const memes = useSelector(store => store);

    let list = memes.map(meme => {
        return <Meme meme={meme} key={meme.id} removeMeme={removeMeme}/>
    })



  return (

      <div className="memeBoard">
        {list}
      </div>

  );
}

export default MemeList;