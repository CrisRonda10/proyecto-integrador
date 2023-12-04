import { useEffect } from "react";
import TaskItem from "./TaskItem";

const TaskList = (props) => {

  const { list, setList } = props;

  const onChangeStatus = (e) => {
    const { name, checked } = e.target;
    const updateList = list.map((item) => ({
      ...item,
      done: item.id === name ? checked : item.done,
    }));
    setList(updateList);
  };

  const onClickRemoveItem = (e) => {
    const updateList = list.filter((item) => !item.done);
    setList(updateList);
  };

  useEffect(() => {

    const tareasCompletadas = list.filter((item) => item.done).length;
    if (tareasCompletadas === 5) {
     alert("¡Felicitaciones completaste 5 tareas! Sigue así");
    } 
  }, [list]);

  const chk = list.map((item) => (
    <TaskItem key={item.id} data={item} onChange={onChangeStatus} />
  ));

  return (
    <div className="todo-list">
      {list.length ? chk : "No hay tareas"}
 
      {list.length ? (
        <p>
          <button className="button-borrar" onClick={onClickRemoveItem}>
            Borrar tareas completadas
          </button>
        </p>
      ) : null}
    </div>
  );
};

export default TaskList;