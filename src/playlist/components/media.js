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
          src="./images/covers/clase1.jpeg"
          alt=""
          />
          <h3>por que aprender react</h3>
          <p>joel vilca</p>
        </div>
      </div>
    )
  }
}
export default Media;
