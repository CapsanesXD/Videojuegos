import { useEffect, useState } from "react";

export default function InventarioMongo(){
    const [productos,setProductos] = useState([]);
    const[cargando,setCargando] = useState(true);
    const[error,setError] = useState(null);

const API_URL = "https://simplified-dist-aware-optimum.trycloudflare.com/api/productos";

const obtenerProductos = async () => {
        try{
            const respuesta = await fetch (API_URL);

            if(!respuesta.ok){
                throw new Error ("Fallo al conectar...");
            }

            const datosMongo = await respuesta.json();
            setProductos (datosMongo);
        }catch (error){
            setError(error.message);
        }finally{
            setCargando(false);
        }
    }
    useEffect(()=>{
        obtenerProductos();
    },[]);

    if (cargando) return <h3>Consultando datos a la API</h3>
    if (error) return <h3 style={{color:'red'}}>{error}</h3>

    return (
        <div style={{background:'#f8fafc',padding:'20px',borderRadius:'8px'}}>
            
        </div>
    )
}