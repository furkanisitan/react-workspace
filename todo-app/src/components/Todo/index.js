import Footer from 'components/Todo/Footer';
import Form from 'components/Todo/Form';
import List from 'components/Todo/List';
import React, {useState} from 'react';

const initialTodos = [
    {text: 'Learn JavaScript', isCompleted: true},
    {text: 'Learn React', isCompleted: false},
    {text: 'Have a life!', isCompleted: false}
];

function Todo() {

    const [todos, setTodos] = useState(initialTodos);


    return (
        <section className="todoapp">

            <header className="header">
                <h1>todos</h1>
                <Form/>
            </header>

            <List todos={todos} setTodos={setTodos}/>

            <Footer/>

        </section>
    );
}

export default Todo;
