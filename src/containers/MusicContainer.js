import React from 'react';
import SongList from '../components/SongList';
import apple from './apple.png';

class MusicContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      songs:[]
    };
  };

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then(data => this.setState({songs:data.feed.entry}))
  }

  render(){
    return(
      <>
      <div id = "top-20">
      <h1>iTunes UK Top 20 Singles</h1>
      <img src={apple}/>
      </div>
      <div id= "top-20-songs">
      <SongList songs = {this.state.songs}/>
      </div>
      </>
    )
  }
}

export default MusicContainer;
