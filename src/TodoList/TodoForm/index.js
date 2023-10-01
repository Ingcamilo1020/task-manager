import React from 'react'
import './TodoForm.css'
import { TodoContext } from '../TodoContext';

function TodoForm() {

  const [newtTodoValue, setNewTodoValue] = React.useState('');

  const {
    addTodo,
    setOpenModal
    } = React.useContext(TodoContext);

  const onSubmit= (event)=>{
    event.preventDefault();
    addTodo(newtTodoValue);
    setOpenModal(false);
  };

  const onCancel= (event)=>{
    setOpenModal(false);
  };
  
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  return (
    <form action="" onSubmit={onSubmit}>
      <label >Escribe tu nuevo TODO</label>
      <textarea name="" id="" cols="30" rows="10" 
      placeholder="Cortar cebolla para el almuerzo"
      value={newtTodoValue}
      onChange={onChange}
      required />

     <div className='TodoForm-buttonContainer'>
     <button type='button'
      className='TodoForm-button TodoForm-button--cancel'
      onClick={onCancel}
     >
        Cancelar
      </button>
     <button type='submit' className='TodoForm-button TodoForm-button--add'
     >
      Añadir
     </button>
     </div>
    </form>
  )
}

export { TodoForm };