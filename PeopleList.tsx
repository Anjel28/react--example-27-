//list object
import React from 'react';

type person={
    id:number;
    name: string;
    role:string;
}

const People: person[] =[
    {id:1, name: 'Anjel', role:'Mathematics'},
    {id:2, name: 'Chitransh', role: 'ComputerScience'},
]

const PeopleList: React.FC =() =>{
    return(
        <>
        <ul>
            {People.map(Person => (
                <li key={Person.id}>
                    {Person.name}-{Person.role}
                </li>
            ))}
        </ul>
        </>
    )
}

export default PeopleList;