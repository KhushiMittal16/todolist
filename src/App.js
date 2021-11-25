//import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './component/Navbar';
import OutlinedCard from './component/Card';
import MediaControlCard from './component/MediaControlCard';
import ToDoList from './component/ToDoList';
//import LetterAvatars from './component/AvatarCode';

function App() {
    <div>
    <ButtonAppBar/>
    {/*<LetterAvatars/>*/}
    <ToDoList />
    <MediaControlCard/>
    <OutlinedCard/>
    </div>
}

export default App;



/*import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';*/




/*
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import ButtonAppBar from "./component/Navbar";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [listValue, setListValue] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));

    if (storedTodos) {
      setListValue(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(listValue));
  }, [listValue]);

  const pushListValue = () => {
    // localStorage.removeItem("todos");

    setListValue([
      { id: Date.now(), title: inputValue, done: false },
      ...listValue,
    ]);
    setInputValue("");
  };

  const doneHandler = (todoId) => {
      const index = listValue.findIndex((emp) => emp.id === todoId);

      const newTodo = [...listValue];

      newTodo[index] = {
        id: listValue[index].id,
        title: listValue[index].title,
        done: !listValue[index].done,
      };
      setListValue(newTodo);
  };

  const delHandler = (todoId) => {
    if (window.confirm("Are you sure ? ")) {
      const updatedList = listValue.filter((item) => item.id !== todoId);
      setListValue(updatedList);
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="list your task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={pushListValue}> Add Task</button>

      <div style={{ background: "blue", height: "50vh" }}>
        {listValue.map((v, i) => {
          return (
            <li style={{ color: "#fff", fontWeight: "400", fontSize: "1.3em" }}>
              {" "}
              {v.title}{" "}
              <button onClick={() => doneHandler(v.id)}>
                {" "}
                {v.done ? "Undone" : "Done"}{" "}
              </button>
              <button onClick={() => delHandler(v.id)}> Delete</button>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default App;*/