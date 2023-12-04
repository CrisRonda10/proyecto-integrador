const TaskItem = (props) => {
  const { onChange, data: { id, description, done } } = props;

  const tachar = {
    textDecoration: done ? 'line-through' : 'none'
  };

  return (
    <>
      <label className="checkbox-container">
        <input
          type="checkbox"
          name={id}
          defaultChecked={done}
          onChange={onChange}
        />
        <div style={tachar}>{description}</div>
      </label>
    </>
  );
};

export default TaskItem;