//EXAMPLE OF API CALL IN USEEFFECT
import React, { useState, useEffect } from 'react';

interface Users{
    id: number;
    name: string;
    email: string;
}

const UserList:React.FC=()=>{
    const [users, setUsers] = useState<Users[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        const fetchUsers = async ()=> {
            try{
                const response = await fetch ('https://jsonplaceholder.typicode.com/users');
                const data: Users[] = await response.json();
                setUsers(data);
            } catch (error){
                console.error('Error fetching users: ', error);
            }finally{
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);
    if (loading) return<p>Loading....</p>
    return(
        <ul>
            {users.map(users => (
                <li key={users.id}>{users.name} ({users.email})</li>
            ))}
        </ul>
    )
}

export default UserList;