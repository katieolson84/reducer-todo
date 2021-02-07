import React, { useState, useReducer } from "react";
import { initialState, reducer } from "./reducers/todoReducers";
import ToDo from './components/ToDo'
import './App.css';

function App() {
  const [newTaskText, setNewTitleText] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);


  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  function handleToggle(task) {
    console.log(task);
    dispatch({type: 'TOGGLE_TODO', payload: task.item})
  }


  return (
    <div className="App">
        <h1>To Do List</h1>
        {state.map(task => (
            <ToDo key={task.item} toggle={handleToggle} task={task}/>    
        ))}
        <input
            className="task-input"
            type="text"
            name="newTaskText"
            value={newTaskText}
            onChange={handleChanges}
          />
        <button onClick={() =>
        dispatch(
        { type: "ADD_TODO", id: '1', item: newTaskText }
        )
        }>Add Task
        </button>

        <button onClick={() =>
        dispatch(
        { type: "CLEAR_COMPLETED" }
        )
        }>Clear Complete
        </button>
    </div>
  );
}

export default App;