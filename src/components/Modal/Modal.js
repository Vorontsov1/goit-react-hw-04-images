import React, {Component} from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {

    componentDidMount(){
      window.addEventListener('keydown', this.handleKeyDown);
    }


    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (e) => {
        if(e.code === 'Escape') {
       this.props.onClose();
        }
    }

  handleBackdropClick = e => {
    console.log('backdrop');
  }
        
        
    

    render () {
        return createPortal (
            <div className={style.overlay}>
                <div className={style.content}>{this.props.children}</div>
            </div>,
            modalRoot,
        );
    }}
    