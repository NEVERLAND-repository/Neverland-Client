import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { musicTracks } from './musics';
import 'react-h5-audio-player/lib/styles.css';
import styles from './MusicControl.module.css';

const MusicControl = () => {
  const [trackIndex, setTrackIndex] = useState(0);

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) => (
      currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
    ));
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) => (currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0));
  };

  return (
    <div className={ styles.musicWrapper }>
      <AudioPlayer
        style={ {
          backgroundColor: '#fff', border: '0rem', display: 'block', boxShadow: 'none',
        } }
        // autoPlay={ false }
        layout='stacked-reverse'
        src={ musicTracks[trackIndex].src }
        onPlay={ (e) => console.log('onPlay') }
        showSkipControls
        showJumpControls={ false }
        onClickPrevious={ handleClickPrevious }
        onClickNext={ handleClickNext }
        onEnded={ handleClickNext }
      />
    </div>
  )
}

export default MusicControl
