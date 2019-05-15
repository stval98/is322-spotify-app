//import dependencies
import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import SpotifyWebApi from 'spotify-web-api-js';

//import page tabs/pages -> react router
import PageTabs from "./PageTabs";
import RecentlyPlayed from './RecentlyPlayed';

//import stylesheet
import '../css/App.css';

const spotifyApi = new SpotifyWebApi(); //wrap spotify api

class App extends React.Component {
    constructor(){
        super();
        const params = this.getHashParams();
        console.log(params);
        const token = params.access_token;
        if (token) {
            spotifyApi.setAccessToken(token);
        }
        this.state = { //initial state -> blank values
            view: 'recently_played',
            loggedIn: token ? true : false,
            nowPlaying: { name: '', artist: '', albumArt: '' }
        }
    }

    onViewChange(view){
        this.setState({view});
    }
    wrapPage(jsx){
        const {view} = this.state;
        return (
            <div className="container">
                <PageTabs currentView={view}
                          onViewChange={this.onViewChange.bind(this)}/>
                {jsx}
            </div>
        )
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

    getNowPlaying(){ //access current song info from spotify -> track name, artist, album art, album name
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

    render() { //render to page
        const {view} = this.state;
        switch(view){
            case 'recently_played': //view recently played
                return(this.wrapPage(<RecentlyPlayed/>));
            default: //view current song by default
                return(this.wrapPage(<div className="App">
                    <div>
                        <BrowserRouter>
                            <PageTabs/>
                            <div>
                                <Route path="/" exact component={RecentlyPlayed}/>
                            </div>
                        </BrowserRouter>
                    </div>
                    <div style={{'padding-bottom': '40px'}}>
                        <nav className="navbar navbar-expand-lg navbar-light" style={{background: 'offwhite'}}>
                            <a id='login' className="navbar-brand" href='http://localhost:8888'>Login to Spotify</a>
                        </nav>
                    </div>
                    <div>
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
                        Now Playing
                    </button>
                    }
                </div>));
        }
    }
}

export default App;