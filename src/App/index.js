import React from 'react';
import { AppUI } from './AppUI';  
import{ useLocalStorage }from './useLocalStorage';

// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   {text:'Cortar cebolla',completed: true},
//   {text:'Tomar el curso de react',completed: false},
//   {text:'llorar con la llorona',completed: false},
//   {text:'Hacer trabajo',completed: false},
//   {text:'Terminar task',completed: true},
// ];
// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos));

function App(){
  const{
    loading,
    error,
    item:todos,
    saveItem: saveTodos
  }=useLocalStorage('TODOS_V1',[]);

  const[searchValue,setSearchValue]=React.useState('');

  const completedTodos=todos.filter(todo=>!!todo.completed).length;

  const totalTodos=todos.length;
// console.log('Log 1');

// React.useEffect(() => {
//   console.log('Log 2');
// }, [totalTodos]);
// console.log('Log 3');

  const searchedTodos=todos.filter((todo)=>{
    
    const todoText=todo.text.toLowerCase();
    const searchText=searchValue.toLowerCase();
    return todoText.includes(searchText);
  });
  const completeTodo=(text)=>{const newTodos=[...todos];

    const todoIndex=newTodos.findIndex((todo)=>todo.text===text);
    newTodos[todoIndex].completed=true;saveTodos(newTodos);
  };

  const deleteTodo=(text)=>{const newTodos=[...todos];
    const todoIndex=newTodos.findIndex((todo)=>todo.text===text);
    newTodos.splice(todoIndex,1);saveTodos(newTodos);
  };

  return (
  <AppUI
  loading={loading}
  error={error}
  completedTodos={completedTodos}
  totalTodos={totalTodos}
  searchValue={searchValue}
  setSearchValue={setSearchValue}
  searchedTodos={searchedTodos}
  completeTodo={completeTodo}
  deleteTodo={deleteTodo}
  />
  );
}
  export default App;

// import React from 'react';
// import { TodoCounter} from './TodoCounter';
// import { TodoSearch } from './TodoSearch';
// import { TodoList } from './TodoList';
// import { TodoItem } from './TodoItem';
// import { CreateTodoButton } from './CreateTodoButton' ;

// //  const defaulTodos =[{
// //      text: 'Cortar cebolla', completed: true },
// //    { text: 'Tomar el curso de intro a react.js', completed: false },
// //    { text: 'Terminar el trabajo', completed: false },
// //    { text: 'Entender estados derivados', completed: false },
// //    { text: 'LALALALA', completed: false },
// //    ];
// // localStorage.setItem('TODOS_V1', JSON.stringify(defaulTodos) );
// // localStorage.removeItem('');

// // hasta este momento ya guardamos los elementos en el local storage pero, no guarda
// // el estado de los todos, para eso vamos a crear una funcion que guarde ese estado
// // let parsedTodos = JSON.parse(localStorageTodos);
// function useLocalStorage(itemName,initialValue){
//   const localStorageItem=localStorage.getItem(itemName);
//   let parsedItem;
//   if(!localStorageItem){
//     localStorage.setItem(itemName,JSON.stringify(initialValue));
//     parsedItem=initialValue;
//   }
//   else
//   {parsedItem=JSON.parse(localStorageItem);}
//   const[item,setItem]=React.useState(parsedItem);
//   const saveItem=(newItem)=>{
//     localStorage.setItem(itemName,JSON.stringify(newItem));
//     setItem(newItem);
//   };
//   return[item,saveItem];
// }

// function App() {
//   const[todos,saveTodos]=useLocalStorage('TODOS_V1',[]);
//   const [searchValue, setSearchValue] = React.useState('');
//   // const localStorageTodos = localStorage.getItem('TODOS_V1');
//   // let parsedTodos;

//   // if (!localStorageTodos) {
//   //   localStorage.setItem('TODOS_V1', JSON.stringify([]));
//   //   parsedTodos = [];
//   // } else {
//   //   parsedTodos = JSON.parse(localStorageTodos);
//   // }
  
 


//   // const [todos, setTodos] = React.useState(defaulTodos);
//   const completedTodos = todos.filter(
//     todo => !!todo.completed
//     ).length; 
//   const totalTodos= todos.length;

//   const searchedTodos = todos.filter(
//     todo => {
//       const todoText = todo.text.toLowerCase();
//       const searchText = searchValue.toLowerCase();
//       return todoText.includes(searchText);
//     }
//   );

//   // eslint-disable-next-line
//     const completeTodo = (text) => {
//       const newTodos = [...todos];
//       const todoIndex = newTodos.findIndex(
//         // eslint-disable-next-line
//         (todo) => todo.text == text 
//       );
//       newTodos[todoIndex].completed = true;
//       saveTodos(newTodos);
//     }
//     const deleteTodo = (text) => {
//       const newTodos = [...todos];
//       const todoIndex = newTodos.findIndex(
//         // eslint-disable-next-line
//         (todo) => todo.text == text 
//       ); 
//       newTodos.splice(todoIndex, 1);
//       saveTodos(newTodos);
//     }   
//   return (
//     <>

//     <TodoCounter 
//     completed={ completedTodos } 
//     total={
//       totalTodos
//     }/> 
//     <TodoSearch
//     searchValue={searchValue}
//     setSearchValue={setSearchValue}/>

//       <TodoList>
 
//            {searchedTodos.map(todo => (
//            <TodoItem 
//             key={todo.text} 
//             text={todo.text} 
//             completed={todo.completed}
//             onComplete={() => completeTodo(todo.text)}
//             onDelete={() => deleteTodo(todo.text)}
//             />
//             ))} 
//       </TodoList>
//        <CreateTodoButton/>
//        </>
//   )
// }
// export default App;

