import { useEffect, useState } from "react";
import SingleTask from "./SingleTask";
const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [listValue, setListValue] = useState([]);

  useEffect(() => {
    const retrievedVal = JSON.parse(localStorage.getItem("todo"));
    if (retrievedVal) setListValue(retrievedVal);
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(listValue));
  }, [listValue]);

  const pushListValue = () => {
    setListValue([
      ...listValue,
      { id: Date.now(), title: inputValue, done: false },
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
    if (window.confirm(" Delete this item? ")) {
      const saveList = listValue.filter((item) => item.id !== todoId);
      setListValue(saveList);
    }
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={"Enter your task..."}
        />

        <button onClick={pushListValue}> Add To Task</button>
      </div>

      <div className="ToDo">
        {listValue.map((v, i) => {
          return (
            <SingleTask
              i={i}
              v={v}
              doneHandler={doneHandler}
              delHandler={delHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ToDoList;
