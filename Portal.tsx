import { ReactNode } from 'react';
import {createPortal } from "react-dom";

interface PortalProps{
    childern: ReactNode;
}

const Portal = ({ childern }: PortalProps) => {
    const PortalRoot = document.getElementById("portal-root");
    return PortalRoot ? createPortal(childern, PortalRoot): null;
}

export default Portal;