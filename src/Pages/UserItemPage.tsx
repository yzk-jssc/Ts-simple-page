import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { IUser } from '../types/types';

type UserItemPageProps = {
    id?:string;
}
 
const UserItemPage: FC<UserItemPageProps> = () => {

    const [user, setUser] = useState<IUser | null>(null);
    
    const params = useParams<UserItemPageProps>()
    const navigate = useNavigate()

    async function fetchUser() {
        try {
            
            const res = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/'+ params.id);
            setUser(res.data)

        } catch (e) {
            alert(e)
        }
    }

    

    useEffect(() => {
        fetchUser()
    }, [])

    return ( 
        <div>
            <button onClick={()=>navigate('/users')}>BAck</button>
            <h1>Page of : {user?.name}</h1>

            <div>{user?.email}</div>
            <div>{user?.address?.city} {user?.address?.street} {user?.address?.zipcode}</div>
        </div>
    );
}
 
export default UserItemPage;