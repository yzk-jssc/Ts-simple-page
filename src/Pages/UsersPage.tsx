import axios from 'axios';
import React, {FC, useEffect, useState} from 'react';
import { useNavigate, useNavigationType } from 'react-router-dom';
import { List } from '../components/List';
import UserItem from '../components/UserItem';
import { IUser } from '../types/types';

interface UsersPageProps {
    
}
 
const UsersPage: FC<UsersPageProps> = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const navigate = useNavigate()

    async function fetchUsers() {
        try {
            
            const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(res.data)

        } catch (e) {
            alert(e)
        }
    }

    

    useEffect(() => {
        fetchUsers()
    }, [])


    return ( 
        <List 
            items={users} 
            renderItem={
                (user:IUser)=><UserItem user={user} key = {user.id} onClick={(user)=>navigate('/users/'+user.id)}/>
            }/>
     );
}
 
export default UsersPage;