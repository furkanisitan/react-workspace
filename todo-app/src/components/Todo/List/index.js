import React, {useState} from 'react';

const initialTodos = [
    {text: 'Learn JavaScript', isCompleted: true},
    {text: 'Learn React', isCompleted: false},
    {text: 'Have a life!', isCompleted: false}
];

function List() {

    const [todos, setTodos] = useState(initialTodos);

    return (
        <div>
            <section className="main">
                <input className="toggle-all" type="checkbox"/>
                <label htmlFor="toggle-all">
                    Mark all as complete
                </label>

                <ul className="todo-list">

                    {todos.map((todo, i) => (
                        <li className={(todo.isCompleted && 'completed')}>
                            <div className="view">
                                <input className="toggle" type="checkbox" defaultChecked={todo.isCompleted}/>
                                <label>{todo.text}</label>
                                <button className="destroy"/>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default List;
