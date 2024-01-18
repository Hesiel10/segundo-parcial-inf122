import React from 'react';
import { useState } from 'react';
import '../styles/Aprender.css';

function Aprender() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const addTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, newTodo]);
            setNewTodo("");
        }
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="App">
            <div>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add new todo..."
                />
                <button onClick={addTodo}>Add</button>
            </div>
            <ul>
                {todos.map((todo, index ) => (
                    <li key={index }>
                        {todo}
                        <button onClick={() => removeTodo( index )}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Aprender;