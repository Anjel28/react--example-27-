import React from 'react';
import ReactDOM  from 'react-dom';

interface ModalProps{
    onClose: () => void,
}
const ModalBubbling:React.FC<ModalProps> = ({ onClose }) => {
    const handleClickInside = (e: React.MouseEvent) => {
        console.log('Modal Clicked');
    }
     return ReactDOM .createPortal(
        <div style={{position: 'fixed', top: '30%', left: '30%', background:'white', padding: '20px', border: '1px solid black'}}
            onClick ={handleClickInside}>
          <p>This is modal rendered via portal.</p>
          <button onClick={onClose}>Close</button>              

        </div>,
        document.body
        
    )
}

export default ModalBubbling;