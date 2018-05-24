import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './media.css';
class Media extends Component{
  //constructor(props){
    //super(props)
    //this.handleClick = this.handleClick.bind(this);
  //}
  handleClick= (event)=>{
    console.log(this.props.title)
  }
  render(){
    const styles ={
      container: {
        color:'#44546b',
        cursor: 'pointer',
        width: 260,
        border: '1px solid red'
      }
    }
    return (

      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img className="Media-img"
          src={this.props.image}
          alt=""
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-autor">{this.props.author}</p>
        </div>
      </div>
    )
  }
}
Media.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video','audio']),
}
export default Media;
