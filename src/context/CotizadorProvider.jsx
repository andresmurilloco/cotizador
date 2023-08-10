/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import { calcularMarca, calcularPlan, formatearDinero, obtenerDiferenciaYear } from "../helpers";

const CotizadorContext = createContext();

// eslint-disable-next-line react/prop-types
const CotizadorProvider =({children})=>{
    
    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)

    const handleChangeDatos = e=>{
        setDatos({
            ...datos,[e.target.name]: e.target.value
        })
    }

    const cotizarSeguro = () =>{
        setCargando(true)
        let resultado = 2000;
        const diferencia = obtenerDiferenciaYear(datos.year);
        
        resultado -= ((diferencia * 3) * resultado) /100;
        
        resultado *= calcularMarca(datos.marca)

        resultado *= calcularPlan(datos.plan)

        resultado = formatearDinero(resultado)
        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        }, 3000);
    }

    return(
        <CotizadorContext.Provider value={{
            handleChangeDatos,
            datos,
            setError,
            error,
            cotizarSeguro,
            resultado,
            cargando
        }}>
            {children}
        </CotizadorContext.Provider>
    )
}

export{CotizadorProvider}
export default CotizadorContext;