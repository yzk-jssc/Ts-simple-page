import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'
import { List } from '../components/List';
import TodoItem from '../components/TodoItem';
import { ITodo } from '../types/types';

interface TodosPageProps {
    
}
 
const TodosPage: FC<TodosPageProps> = () => {

    const [todos, setTodos] = useState<ITodo[]>([])

    

    async function fetchTodos() {
        try {
            
            const res = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
            setTodos(res.data)

        } catch (e) {
            alert(e)
        }
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    return ( 
        
        <List 
            items={todos} 
            renderItem={
                (todo:ITodo)=><TodoItem todo={todo} key = {todo.id}/>
            }/>

    );
}
 
export default TodosPage;

