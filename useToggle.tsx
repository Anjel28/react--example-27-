import  { useState } from 'react';

export function useToggle(initial: boolean = false){
    const [isOpen, setIsOpen] = useState(initial);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen(Prev => !Prev);

    return { isOpen, open, close, toggle };
}