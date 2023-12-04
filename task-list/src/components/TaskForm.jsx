import { useState } from 'react'

const TaskForm = props => {
  const {handleAddItem} = props
  const [description, setDescription] = useState("")
  const handleSubmit = e => {e.preventDefault(); 
    handleAddItem({done:false, id:(+new Date()).toString(),description}); 
    setDescription("")}
  
  return (
    <form onSubmit={handleSubmit}>
      <div className='todo-list'>
        <div>
          <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
          <button className='button-agregar' disabled={description ? "" : "disabled"}>Agregar tarea</button>
        </div>
      </div>
    </form>
  )
}
export default TaskForm