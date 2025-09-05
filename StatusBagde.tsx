//conditional styling

import React from 'react';

interface IProps{
    status: string;
}

const StatusBadge:React.FC<IProps> = ({ status }: { status: string }) => {
    return(
        <>
        <div>
            <h1 style={{color: status === 'active'? 'green': 'gray'}}>
            {status === 'active'? 'active':'inactive'}
            </h1>
        </div>
        </>
    )
}

export default StatusBadge;