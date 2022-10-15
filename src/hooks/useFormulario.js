import { useState } from "react"


export const useFormulario = (initialState = {}) => {
  
 const [inputs, setInputs] = useState(initialState)
 
 const handleChange = e => {
    const {name, value, type, checked} = e.target

    setInputs(old => ({ //parentisis para retornar un valor de manera implicita y llaves porque estamos devolviendo un nuevo objeto
        ...old,
            [name]: type === 'checkbox' ? checked : value
    }))//se utilzan parentesis por delante de las llaves para hacer un return implicito. ya que estamos devolviendo el ultimo valor del objeto 'todo' y asi no sobreescribir los valores con la nueva insercion dinamica. Basicamente para que no se pierdan los valores de las otras propiedades en el inicialState
}
  
const reset = () => {
    setInputs(initialState)
}    


return [inputs, handleChange, reset] //en el hook puede devolverse cualquier cosa: array, objeto, metodo, etc


}
