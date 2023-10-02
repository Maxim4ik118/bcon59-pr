import { Component } from "react";
import style from './Modal.module.css';



export class Modal extends Component {

  handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onCloseModal()
    }
  }
  render() {
    return (
      <div className={style.overlay}
        onClick={this.handleOverlayClick}>
        <div className={style.modal} >
          <div>
            {this.props.data}
          </div>
          <button
            className={style.closeModalBtn}
            onClick={this.props.onCloseModal}
          >
            &times;
          </button>
        </div>
      </div>
    )
  }
}