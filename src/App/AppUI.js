import{TodoCounter}from '../TodoCounter';
import{TodoSearch}from '../TodoSearch';
import{TodoList}from '../TodoList';
import{TodoItem}from '../TodoItem';
import{CreateTodoButton}from '../CreateTodoButton';
import {FaSpinner} from 'react-icons/fa';
import './mainPage.css';   

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}){
    return(
<>
<TodoCounter
    completed={completedTodos}
    total={totalTodos}/>
    
    <TodoSearch
    searchValue={searchValue}
    setSearchValue={setSearchValue}/>
    <TodoList>
        {loading
         ? <>
                <p className='message'>Estamos cargando ....</p>
                <FaSpinner className="loading-icon" />
           </>  
        : null
        }  
        {error 
        ?   <>
                <p className='error-message'>Hay un error</p>
            </> 
        : null
        }
        {!loading && searchedTodos.length === 0
        ?   <>
                <p className='message'>Crea tu primer todo</p>
            </> 
        :null
        }
    
    {searchedTodos.map(
        todo=>(
        <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={()=>completeTodo(todo.text)}
            onDelete={()=>deleteTodo(todo.text)}
        />
        ))}
        </TodoList>
        <CreateTodoButton/>
        </>
        );
    }
    export{AppUI};