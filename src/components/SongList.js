import React from 'react';
import icon from './play.svg';
import Song from './Song';

const SongList = (props) => {

    const songNodes = props.songs.map((song, index) =>{
        return (
          <Song key={index} title={song["im:name"].label} artist={song["im:artist"].label} play={song.link[1].attributes.href}
          image = {song["im:image"][2].label}
          icon = {icon}/>
        );
      });

    return(
      <div id="song-list">
        <ol>
        {songNodes}
        </ol>
      </div>
    );
};

export default SongList;
