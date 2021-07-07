import React, {useEffect, useState} from 'react';

const initialTodos = [
    {text: 'Learn JavaScript', isCompleted: true},
    {text: 'Learn React', isCompleted: false},
    {text: 'Have a life!', isCompleted: false}
];

function List() {

    const [todos, setTodos] = useState(initialTodos);
    const [isEachTodoCompleted, setIsEachTodoCompleted] = useState(false);

    useEffect(() => {

        setIsEachTodoCompleted(todos.every(todo => todo.isCompleted));
    }, [todos]);


    const handleToggleComplete = (index) => {

        let newTodoList = [...todos];
        let todo = newTodoList[index];
        newTodoList[index] = {...todo, isCompleted: !todo.isCompleted};

        setTodos(newTodoList);
    };

    return (
        <div>
            <section className="main">
                <input className="toggle-all"
                       type="checkbox"
                       checked={isEachTodoCompleted}/>
                <label htmlFor="toggle-all">
                    Mark all as complete
                </label>

                <ul className="todo-list">

                    {todos.map((todo, i) => (
                        <li className={(todo.isCompleted ? 'completed' : '')} key={i}>
                            <div className="view">
                                <input className="toggle"
                                       type="checkbox"
                                       defaultChecked={todo.isCompleted}
                                       onChange={() => handleToggleComplete(i)}/>
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
