import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import { Card, CardVariant } from './components/Card';
import EventsEvample from './components/EventsExample';
import TodosPage from './Pages/TodosPage';
import UserItemPage from './Pages/UserItemPage';
import UsersPage from './Pages/UsersPage';

function App() {
    
    

    return (
        <div className="App">

            <BrowserRouter>
                <div>

                    <NavLink to='/users' className={'nav__link'}>Users</NavLink>
                    <NavLink to='/todos' className={'nav__link'}>Todos</NavLink>

                    <Routes>
                        <Route path= {'/users'} element={<UsersPage/>} />
                        <Route path= {'/todos'} element={<TodosPage/>} />
                        <Route path= {'/events'} element={<EventsEvample/>} />
                        <Route path= {'/users/:id'} element={<UserItemPage/>} />
                    </Routes>
                </div>
            </BrowserRouter>

            
        </div>
    );
}

export default App;

// 8.42
