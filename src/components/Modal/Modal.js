import  {useEffect} from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({onClose, url}) => {

  useEffect(() => {
   const handleKeyDown = e => {
      if(e.code === 'Escape') {
         onClose();
      }
    }

    if (url){
      window.addEventListener('keydown', handleKeyDown);
    }


    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    }
  }, [url, onClose]); 
   

   const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }
        
        
    

  
        return createPortal (
            <div className="Overlay" onClick={handleBackdropClick}>
                <div className="Modal">
                  <img src={url} alt=''/>
                </div>
            </div>,
            modalRoot,
        );
    }


    

    