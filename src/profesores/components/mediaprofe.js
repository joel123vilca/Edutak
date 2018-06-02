import React,{PureComponent} from 'react';
import PropTypes from 'prop-types';
class MediaProfe extends PureComponent{

  state = {
    nombre: 'joel vilca alania'
  }
  handleClick=  (event) => {
    //console.log(this.props.title)
    this.setState({
      nombre: 'alberto vilca',
  })
}
  render(){
    const styles ={
      container: {
        color:'#44546b',
        cursor: 'pointer',
        width: 240,
        border: '1px solid red'
      }
    }
    return (
      <div className="MediaProfe" onClick={this.handleClick}>
        <div className="MediaProfe-cover">
          <img
          src={this.props.avatar}
          alt=""
          width= {240}
          height = {160}
          className="Media-image"
          />
          <p className="Media-autor">{this.props.nombre}</p>
        </div>
      </div>
    )
  }
}
MediaProfe.propTypes = {
  nombre: PropTypes.string,
  avatar: PropTypes.string.isRequired,

}
export default MediaProfe;
