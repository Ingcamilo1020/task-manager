import React from 'react'
import './TodoForm.css'

function TodoForm() {
  
  return (
    <form action="" onSubmit={(event) => {
      console.log("🚀 ~ file: index.js:8 ~ TodoForm ~ event:", event);
      event.preventDefault();

      return {
    }
      
      
    }}>
      <label htmlFor="">Escribe tu nuevo TODO</label>
      <textarea name="" id="" cols="30" rows="10" 
      placeholder="Cortar cebolla para el almuerzo" />
     <div className='TodoForm-buttonContainer'>
     <button className='TodoForm-button TodoForm-button--cancel'
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