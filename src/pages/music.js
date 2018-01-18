import React, { Component } from 'react';
import Link from 'gatsby-link';
import PlaylistSoundPlayer from '../components/PlaylistSoundPlayer';

import '../styles/soundplayer/buttons.css';
import '../styles/soundplayer/cover.css';
import '../styles/soundplayer/icons.css';
import '../styles/soundplayer/progress.css';
import '../styles/soundplayer/volume.css';

const clientId = '076dc31dbe6231d2d3f1bafcc3127e82';
const resolveUrl = 'https://soundcloud.com/kameronjohnsonmusic/sets/christmas';
const resolveUrlPop = 'https://soundcloud.com/kameronjohnsonmusic/sets/pop-jams';

class MusicPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="inside music">
        <div className="grid-container-music">
          <div className="grid-intro-music text-music">
            <p>Music is a big part of my life, and has become my side hustle. I license all types of music for TV, film, advertising and video games. Here's a taste of some pop music for your listening pleasure!</p>
          </div>
          <div className="grid-left-music">
            <PlaylistSoundPlayer 
              resolveUrl={resolveUrlPop}
              clientId={clientId}
              {...this.props} 
            />
          </div>
          <div className="grid-right-music">
            <PlaylistSoundPlayer 
              resolveUrl={resolveUrl}
              clientId={clientId}
              {...this.props} 
            />
          </div>
        </div>
      </div>
    )
  }
}

export default MusicPage;
