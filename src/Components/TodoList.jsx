import { useState } from 'react'
import { useEffect } from "react"
import Formulario from './Formulario'
import TodoUI from './TodoUI'

const TodoList = () => {
  document.addEventListener('DOMContentLoaded', () => {

  })
  const [todos, setTodos] = useState([]) //array de objetos (todo) del componente de Formulario
  //componente padre
  
  useEffect(() => { //hook
    console.log("Leer todos local");
    if (localStorage.getItem("todos")) {
         setTodos(JSON.parse(localStorage.getItem("todos")));// no esta guardandose. al parecer hay un conficto con los useEffect. tal hubo una actualizacion algo, dado que cada vez que actualizo la pagina, los valores locales se borran
    }
}, [])  // se esta renderizando solo una vez, por eso los corchetes vacios

useEffect(() => {
  
    console.log("Guardar todo local");
      localStorage.setItem("todos", JSON.stringify(todos));

  
  
}, [todos])
  //esto se va a ejecutar cada vx que cambien los todos
  
  
  const AgregarTodo = todo => {//esta arrow funtion se enviará al formulario como 'props' (comunicacion entre componentes)
    //console.log(todo)
    setTodos((old) => ([...old, todo]))
  } 

  const EliminarTodo = id => {
    setTodos((old) => old.filter((item) => item.id !== id))
  }


  const EditarTodo = id => {
    const editarTodos =  todos.map(item => (
      item.id === id ? {...item, estado: !item.estado} : item //devolvemos una copia del item pero solo modificando el estado cambiandolo al modo contrario en que se encuentre en el objeo todo (true o false)
                                  //en caso contraio, solo devolvemos el item tal cual como esta
    ))
 
      setTodos(editarTodos)
 
  }
  
  return (
    <>
        <Formulario AgregarTodo={AgregarTodo}/> {/*componente hijo que esta recibiendo el metodo, para ser activado en el componente hijo*/}
        
        <ul className='list-group lis-group-numbered mt-3'>

            {todos.map(item => (
              
              <TodoUI
                key={item.id}
                todo={item}
                eliminarTodo={EliminarTodo} 
                EditarTodo={EditarTodo}
              /> //enviamos la key y el props al componente hijo TodoUI
                                  //el nombre decidamos poner sera tomado como 'props' (mas el metodo) por react. y ese nombre exactamente como lo pusimos, debe ser declaraco en el argumento del componente     
            ))}
        
        </ul>
        
    </>                                      
  )
}

export default TodoList