import React from 'react';
import '../css/App.css';

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class App extends React.Component {
  constructor(){
    super();
    const params = this.getHashParams();
    console.log(params);
	const token = params.access_token;
	if (token) {
		spotifyApi.setAccessToken(token);
	}
	this.state = {
		loggedIn: token ? true : false,
		nowPlaying: { name: '', artist: '', albumArt: '' }//,
        //musicHistory: {name: '', artist: '', played_at: ''}
	}
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }
  
	getNowPlaying(){
        spotifyApi.getMyCurrentPlaybackState()
        .then((response) => {
          this.setState({
            nowPlaying: {
                name: response.item.name,
                artist: response.item.artists[0].name,
                albumArt: response.item.album.images[0].url,
                album: response.item.album.name
              }
          });
        })
	}

  render() {
  return (
    <div className="App">
        <div style={{'padding-bottom': '40px'}}>
        <nav className="navbar navbar-expand-lg navbar-light" style={{background: 'offwhite'}}>
            <a id='login' className="navbar-brand" href='http://localhost:8888'>Login to Spotify</a>
        </nav>
        </div>
        <div>
            <h2 className='title'>Now Playing</h2>
        </div>
        <div className="song">
          <div>
            <img style={{height: 350}}  src={this.state.nowPlaying.albumArt} />
          </div>
            <div>
                <b> Track:</b> { this.state.nowPlaying.name }
            </div>
            <div >
                <b> Artist:</b> { this.state.nowPlaying.artist }
            </div>
            <div>
                <b> Album:</b> { this.state.nowPlaying.album }
            </div>
        </div>
      { this.state.loggedIn &&
        <button onClick={() => this.getNowPlaying()}>
          Check Now Playing
        </button>
      }
    </div>
  );
}
}

export default App;
