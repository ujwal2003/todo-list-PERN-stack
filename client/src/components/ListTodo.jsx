import React, {Fragment, useEffect, useState} from "react";

const ListTodo = () => {
    const [todos, setTodos] = useState([]);
    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const resJson = await response.json();
            setTodos(resJson);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <Fragment>
            <table className="table mt-3 text-center">
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr>
                            <td>{todo.description}</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
}

export default ListTodo;

/*
<tr>
    <td>John</td>
    <td>Doe</td>
    <td>john@example.com</td>
</tr>
*/