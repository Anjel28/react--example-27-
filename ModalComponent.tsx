//EXAMPLE OF REUSABLE HOOK
import React from 'react';
import { useToggle } from './useToggle';

const ModalComponent = () => {
    const {isOpen, open, close, toggle} = useToggle();

    return(
        <div>
            <button onClick ={toggle}>Toggle Mode </button>
            {isOpen && <div className="modal">This is a modal!</div>}
            <button onClick={close}>close</button>
            <button onClick ={open}>Open</button>
        </div>
    )
}

export default ModalComponent;