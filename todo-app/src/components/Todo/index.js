import Footer from 'components/Todo/Footer';
import Form from 'components/Todo/Form';
import List from 'components/Todo/List';
import React from 'react';

function Todo() {
    return (
        <section className="todoapp">

            <header className="header">
                <h1>todos</h1>
                <Form/>
            </header>

            <List/>

            <Footer/>

        </section>
    );
}

export default Todo;
