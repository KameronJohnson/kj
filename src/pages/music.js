import React, { Component } from 'react';
import Link from 'gatsby-link';
import ClassNames from 'classnames';
import { PlayButton, PrevButton, NextButton, Progress, Icons, Timer, VolumeControl  } from 'react-soundplayer/components';
import { withSoundCloudAudio } from 'react-soundplayer/addons';

import PlaylistSoundPlayer from '../components/PlaylistSoundPlayer';
import '../styles/buttons.css';
import '../styles/progress.css';
import '../styles/volume.css';
import '../styles/icons.css';
import '../styles/cover.css';

const { SoundCloudLogoSVG } = Icons;

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
            <p>Music is a big part of my life, check out some of these jams!</p>
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

// const MusicPage = () => (
//   <div className="inside music">
//     <h1>Music</h1>
//     <p>Welcome to music</p>
//     <Link to="/">Go back to the homepage</Link>
//     <PlaylistSoundPlayer 
//       resolveUrl={resolveUrl}
//       clientId={clientId}
//       {...this.props} 
//     />
//   </div>
// )