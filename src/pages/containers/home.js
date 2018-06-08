import React, { Component} from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related.js';
import ModalContainer from '../../widgets/container/modal';
class Home extends  Component{
  render(){
    return(
      <HomeLayout>
      <Related/>
      <Categories categories={this.props.data.categories}></Categories>
      <ModalContainer>
        <h2>es un portal</h2>
        </ModalContainer>
      </HomeLayout>
    )
  }
}

export default Home;
