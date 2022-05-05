import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { musicTracks } from './musics';
import previous from '../../assets/icons/previousSong.svg';
import next from '../../assets/icons/nextSong.svg';
import pause from '../../assets/icons/pauseSong.svg';
import play from '../../assets/icons/playSong.svg';
import 'react-h5-audio-player/lib/styles.css';
import styles from './MusicControl.module.css';

const MusicControl = () => {
  // const [currentSongIndex, setCurrentSongIndex] = useState(0);
  // const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  // const [isPlaying, setIsPlaying] = useState(false)
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
          backgroundColor: 'var(--gray-background)', border: '0rem', display: 'block', boxShadow: 'none',
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
      {/* <audio></audio> */}
      {/* <div className={ styles.musicControl }>
        <div className={ styles.control } onClick={ handleClickPrevious }>
          <img src={ previous } alt='previous' />
        </div>
        <div className={ styles.control } onClick={ () => setIsPlaying(!isPlaying) }>
          <img src={ !isPlaying ? play : pause } alt={ !isPlaying ? 'play' : 'pause' } />
        </div>
        <div className={ styles.control } onClick={ handleClickNext }>
          <img src={ next } alt='next' />
        </div>
      </div> */}
      {/* <div>Progress bar</div> */}
    </div>
  )
}

export default MusicControl
