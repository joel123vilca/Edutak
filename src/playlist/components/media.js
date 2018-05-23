import React,{Component} from 'react';
import './media.css';
class Media extends Component{
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

      <div className="Media">
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
export default Media;
