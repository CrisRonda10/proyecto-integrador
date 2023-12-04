import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const Container = () => {
  const [list, setList] = useState(() => {
    const storedList = localStorage.getItem("taskList");
    return storedList ? JSON.parse(storedList) : [];
  });

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(list));
  }, [list]);

  const handleAddItem = addItem => {
    const updatedList = [...list, addItem];
    setList(updatedList);
  };

  return (
    <div className="container">
      <h1>Mi lista de tareas</h1>
      <TaskForm handleAddItem={handleAddItem} />
      <TaskList list={list} setList={setList} />
    </div>
  );
};

export default Container;