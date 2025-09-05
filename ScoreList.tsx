//condition inside list
import React from 'react';

const scores: number[] = [85, 42, 90, 60];

const ScoreList:React.FC = () => {
    return(
        <>
        <ul>
            {scores.map((scores,index) =>
            scores >=60 ? <li key={index}>{scores}</li>: <li key={index}>{scores}</li>
            )}
        </ul>
        </>
    )
}

export default ScoreList;