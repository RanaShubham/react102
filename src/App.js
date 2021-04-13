import './App.css';
import React, {useState} from "react";

//Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList"


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  
  return (
    <div className="App">
      <header>
        <h1>TO DO LIST</h1>
      </header>
      <Form
       inputText = {inputText}
       setTodos = {setTodos}
       todos = {todos}
       setInputText={setInputText}
       />
      <TodoList />
    </div>
  );
}

export default App;
