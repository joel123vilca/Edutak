import React, { Component} from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related.js';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';

class Home extends  Component{
  state = {
    modalVisible: false,
  }
  handleOpenModal = (event)=>{
    this.setState({
      modalVisible: true,
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
          <h2>esto es un portal</h2>
        </Modal>
        </ModalContainer>
      }
      </HomeLayout>
      </HandleError>
    )
  }
}

export default Home;
