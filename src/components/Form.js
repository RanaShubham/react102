import React from "react";

const Form = ({setInputText, todos, setTodos, inputText}) => {
    //Write function here to handle input text in app.js
    const inputTextHandler = (e) => {
        console.log(e);
        setInputText(e.target.value);
    };

    const submitTodosHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text:inputText, completed:false, id: Math.random() }
        ])
        setInputText("");
    }
    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
            <button className="todo-button" type="submit" onClick={submitTodosHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;