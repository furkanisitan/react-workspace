import React, {useEffect, useState} from 'react';

function List({todos, setTodos}) {

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

    const handleToggleAllComplete = () => {

        const newTodoList = todos.map(todo => {
            todo.isCompleted = !isEachTodoCompleted;
            return todo;
        });

        setTodos(newTodoList);
    };

    return (
        <div>
            <section className="main">
                <input className="toggle-all"
                       type="checkbox"
                       checked={isEachTodoCompleted}
                       onChange={handleToggleAllComplete}/>
                <label htmlFor="toggle-all" onClick={handleToggleAllComplete}>
                    Mark all as complete
                </label>

                <ul className="todo-list">

                    {todos.map((todo, i) => (
                        <li className={(todo.isCompleted ? 'completed' : '')} key={i}>
                            <div className="view">
                                <input className="toggle"
                                       type="checkbox"
                                       checked={todo.isCompleted}
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
