import React, { Component } from 'react';
import css from 'Styles.module.css';

export class Modal extends Component {
  render() {
    return (
      <div className={css.Overlay}>
        <div className={css.Modal}>
          <img
            className={css.modalImage}
            src="https://images.squarespace-cdn.com/content/v1/5e72c8bfe21ad940ba788673/1600779351670-XYVN5BH2PS77G7LFB0CL/agoda-promo-code-thumbnail.jpg"
            alt=""
          />
        </div>
        <button onClick={this.props.onCloseModal} type="button">
          ТЕБЕ БАН
        </button>
      </div>
    );
  }
}
