import React, {Component} from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause'

class VideoPlayer  extends Component{
  state = {
    pause: true,
  }
  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }
  render(){
    return(
      <VideoPlayerLayout>
        <Title
        title="Esto es un video de aritmetica"
        />
        <PlayPause
          pause={this.state.pause}
          handleClick={this.togglePlay}
        />
        <Video
        autoplay = {true}
        src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
        />

      </VideoPlayerLayout>
    )
  }
}
export default VideoPlayer;
