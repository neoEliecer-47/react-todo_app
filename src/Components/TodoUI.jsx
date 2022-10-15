


const TodoUI = ({ todo, eliminarTodo, EditarTodo }) => {
  const {id,nombre, estado, descripcion} = todo
  
    return (
    
        <li className="list-group-item d-flex justify-content-between align-items-start border-secondary rounded">
        <div className="ms-2 me-auto">
            <div className="fw-bold">{nombre} ({estado ? 'Finalizado' : 'Pendiente'})</div>
            <p>{descripcion}</p>
            <div>
                <button className="btn btn-sm btn-outline-danger" onClick={() => eliminarTodo(id)}>Eliminar</button>
               { /*<br />*/}
                <button className="btn  btn-outline-warning mt-1" onClick={() => EditarTodo(id)}><em>Editar</em></button>
            </div>
        </div>
        <span className="badge bg-primary rounded-pill">
            {todo.prioridad && 'Prioritario'}
        </span>
        </li>
    
  
  )
}

export default TodoUI