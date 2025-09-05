import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps{
    children: ReactNode;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
 const PortalRoot = document.getElementById('portal-root');
 if(!PortalRoot ) return null;

 return ReactDOM.createPortal(

    <div style={styles.overlay}>
        <div style={styles.modal}>
            {children}
            <button onClick={onClose} style={styles.closeBtn}>Close</button>

        </div>

    </div>,
    PortalRoot
     
 )
}

const styles = {
  overlay: {
    position: 'fixed' as const,
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  modal: {
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    minWidth: '300px',
  },
  closeBtn: {
    marginTop: '10px',
  }
};

export default Modal;