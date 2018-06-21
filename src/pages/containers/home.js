import React, { Component} from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related.js';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';

class Home extends  Component{
  state = {
    modalVisible: false,
  }
  handleOpenModal = (media)=>{
    this.setState({
      modalVisible: true,
      media
    })
  }
  handledCloseModal = (event) =>{
    this.setState({
      modalVisible: false,
    })
  }
  // componentDidCatch(error, info){
  //   this.setState({
  //     handleError:true,
  //   })
  // }
  render(){

    return(
      <HandleError>
      <HomeLayout>
      <Related/>
      <Categories categories={this.props.data.categories}
      handleOpenModal={this.handleOpenModal}></Categories>
      {
        this.state.modalVisible &&
      <ModalContainer>
        <Modal
        handleClick={this.handledCloseModal}>
            <VideoPlayer
              autoplay
              src={this.state.media.src}
              title={this.state.media.title}
              />
        </Modal>
        </ModalContainer>
      }
      </HomeLayout>
      </HandleError>
    )
  }
}

export default Home;
