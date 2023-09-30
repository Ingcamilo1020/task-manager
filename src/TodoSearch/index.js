import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch()  {
  const {searchValue,setSearchValue} = React.useContext(TodoContext);
  // const [searchValue, setSearchValue] = React.useState('');
  // console.log('los usuarios buscan todos de ' + searchValue); // lo hacemos para verificar si se esta guardando correctamente
  return (
    <input className="TodoSearch"
          value={searchValue}
           placeholder="Busca tu tarea"
           onChange={(event) => {
            setSearchValue(event.target.value);  // funcion actualizadora del estado le decimos cual es el nuevo valor que vamos a guardar
            // console.log('Éscribiste en el Todo serch');
            // console.log(event);
            // console.log(event.target.value);

           }}/>
  )
}

export { TodoSearch };