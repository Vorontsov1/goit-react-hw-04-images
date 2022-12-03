import  {Component} from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';
import PropTypes from 'prop-types';

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
       this.props.onClose(null, null);
        }
    }

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose(null, null);
    }
  }
        
        
    

    render () {
      const backdropClick = this.handleBackdropClick
        return createPortal (
            <div className={style.Overlay} onClick={backdropClick}>
                <div className={style.Modal}>{this.props.children}</div>
            </div>,
            modalRoot,
        );
    }}


    Modal.propTypes = {
      toggleModal: PropTypes.func.isRequired,
    }


    