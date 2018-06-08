import React, { Component} from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related.js';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
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
  render(){
    return(
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
    )
  }
}

export default Home;
