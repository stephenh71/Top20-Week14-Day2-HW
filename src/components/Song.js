import React from 'react';


const Song = (props) => {

    return(
      <div id="song">
        <li>
          <p id = "title" >{props.title}</p>
          <p id = "artist">{props.artist}</p>
          <div id="container">
            <img id = "image" src={props.image}/>
            <a href={props.play}><img src={props.icon}/></a>
          </div>
          </li>
      </div>
    )
  }

export default Song;
