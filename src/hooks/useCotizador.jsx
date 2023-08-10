import { useContext } from "react";
import CotizadorContext from "../context/cotizadorProvider";

const useCotizador =()=>{
    return useContext(CotizadorContext)
}

export default useCotizador;