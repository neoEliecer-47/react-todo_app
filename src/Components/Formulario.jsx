import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid';
import { useFormulario } from "../hooks/useFormulario";


const Formulario = ({AgregarTodo}) => { //este componente recibe todo lo que se le haya mandado como props desde otro componente
                        //el todo de este componente se guardará en AgregarTodo (del props) para ser ejecutado en el state del componente padre
const initialState = {
    nombre: '',
    descripcion: '',
    estado: 'pendiente',
    prioridad: false

}

const [inputs, handleChange, reset] = useFormulario(initialState)

const {nombre, descripcion, estado, prioridad} = inputs




const handleSubmit = t => {
    t.preventDefault()
    
    if(!nombre.trim()){
      t.target[0].focus()
      Swal.fire({
        title: 'Error!',
        text: 'No dejar el nombre en blanco',
        icon: 'error',
        confirmButtonText: 'OK'
        
      })
      return
    }

    if(!descripcion.trim()){
      t.target[1].focus()
      Swal.fire({
        title: 'Error!',
        text: 'debe anotar una descripcion',
        icon: 'error',
        confirmButtonText: 'OK'
        
      })
      return
    }

    Swal.fire({
      title: 'Exito!',
      text: 'Registrado',
      icon: 'success',
      confirmButtonText: 'OK'
      
    })
    //console.log(todo)
    AgregarTodo({
      nombre: nombre,
      descripcion: descripcion,
      estado: estado === 'pendiente' ? false : true,
      prioridad: prioridad,
      id: uuidv4()
    })

    reset()
}

    return (
    <>
        <h2 className="text-center"><strong>Todo List</strong></h2>
        <form className="form-control border-primary" onSubmit={handleSubmit}> {/*handdleSubmit te devuelve un objeto */}
        <input
              type="text"
              name="nombre"
              placeholder="ingrese nombre todo"
              className="form-control mb-2 border-primary rounded-pill" 
              onChange={handleChange}
              value={nombre}
              
            />

            <textarea
              name="descripcion"
              className="form-control mb-2 border-dark"
              placeholder="Ingrese descripcion del todo"
             onChange={handleChange}
              value={descripcion} 
            />

            <select
              name="estado"
              className="form-control mb-2 border-info"
              onChange={handleChange}
              value={estado}
              >
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>

            <div className="form-check">
                <input
                  id="flexCheckDefault"
                  className="form-check-input border-primary"
                  type="checkbox"
                  name="prioridad"
                  onChange={handleChange}
                  checked={prioridad} 
                
                />

                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefault" 
                  
                >
                Dar prioridad
                </label>

            </div>
            
            
            <button
              className="btn btn-success w-100"
              type="submit"
              ><strong>Agregar</strong>
            </button>


        </form>

    </>
    
  )
}

export default Formulario