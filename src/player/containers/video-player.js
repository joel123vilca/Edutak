import React, { Component} from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/Video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls.js';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner.js';

class VideoPlayer  extends Component{
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading:false,
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
  handleTimeUpdate = event => {
    //console.log(this.video.currentTime)
    this.setState({
      currentTime: this.video.currentTime
    })
  }
  handleProgressChange = event => {
    //event.target.value
    this.video.currentTime = event.target.value

  }
  handleSeeking = event =>{
    this.setState({
      loading:true
    })
  }
  handleSeeked = event =>{
    this.setState({
      loading:false
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
          currentTime={this.state.currentTime}
          />
          <ProgressBar
          duration={this.state.duration}
          value={this.state.currentTime}
          handleProgressChange={this.handleProgressChange}
          />
        </Controls>
        <Spinner
          active={this.state.loading}
        />
        <Video
        autoplay = {this.props.autoplay}
        pause={this.state.pause}
        handleLoadedMetadata = {this.handleLoadedMetadata}
        handleTimeUpdate={this.handleTimeUpdate}
        handleSeeking={this.handleSeeking}
        handleSeeked={this.handleSeeked}
        src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
        />

      </VideoPlayerLayout>
    )
  }
}
export default VideoPlayer;
