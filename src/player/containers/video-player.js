import React, { Component} from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/Video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls.js';

class VideoPlayer  extends Component{
  state = {
    pause: true,
    duration: 0,
  }
  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }
  componentDidMount(){
    this.setState({
      pause:(!this.props.autoplay)
    })
  }
  handleLoadedMetadata = event =>{
    this.video = event.target;
    this.setState({
      duration:this.video.duration
    })
  }
  render(){
    return(
      <VideoPlayerLayout>
        <Title
        title="Esto es un video de aritmetica"
        />
        <Controls>
          <PlayPause
          pause={this.state.pause}
          handleClick={this.togglePlay}
          />
          <Timer
          duration={this.state.duration}
          />
        </Controls>
        <Video
        autoplay = {this.props.autoplay}
        pause={this.state.pause}
        handleLoadedMetadata = {this.handleLoadedMetadata}
        src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
        />

      </VideoPlayerLayout>
    )
  }
}
export default VideoPlayer;
