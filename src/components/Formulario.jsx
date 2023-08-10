import { Fragment} from "react"
import { MARCAS, PLANES, YEARS } from "../constants"
import useCotizador from "../hooks/useCotizador"
import Error from "./Error";

const Formulario = () => {
    const {datos, error, setError, handleChangeDatos, cotizarSeguro} = useCotizador();
    
    const handleSubmit=e=>{
        e.preventDefault();
        if (Object.values(datos).includes('')) {
            setError('Todos los campos son obligatorios');
        } else{
            setError('')
            cotizarSeguro()
        }
    }

  return (
    <>
    {error && <Error/>}
    <form onSubmit = {e=>handleSubmit(e)}>
        <div className='my-5'>
            <label className='block mb-3 font-bold text-gray-400 uppercase'>Marca
                <select name="marca" className="w-full p-3 bg-white border border-gray-200" onChange={e=>handleChangeDatos(e)}>
                    <option value={datos.marca}>---Seleccione marca---</option>
                    {MARCAS.map(marca =>(
                        <option key={marca.id} value={marca.id}>{marca.nombre}</option>
                    ))}
                </select>
            </label>
        </div>
        <div className='my-5'>
            <label className='block mb-3 font-bold text-gray-400 uppercase'>Año
                <select name="year" className="w-full p-3 bg-white border border-gray-200" onChange={e=>handleChangeDatos(e)}>
                    <option value={datos.year}>---Seleccione año---</option>
                    {YEARS.map(year =>(
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </label>
        </div>
        <div className='my-5'>
            <label className='block mb-3 font-bold text-gray-400 uppercase'>Elige un plan</label>
            <div className="flex gap-3 items-center">
                {PLANES.map(plan=>(
                        <Fragment key={plan.id}>
                            <label>
                                {plan.nombre}
                            </label>
                            <input type="radio" name="plan" value={plan.id} onChange={e=>handleChangeDatos(e)}/>
                        </Fragment>
                ))}
            </div>
            <input type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold" value={'cotizar'}/>
        </div>
    </form>
    </>
  )
}

export default Formulario