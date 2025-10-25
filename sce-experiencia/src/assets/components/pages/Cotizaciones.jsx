import { useState, useEffect } from "react";
import axios from "axios";
import "../../../css/Cotizaciones.css";


const Cotizaciones =()=>{
    const [cotizaciones, setCotizaciones] = useState([]);

    const fetchCotizaciones = async () => {
        try {
            const response = await axios.get("https://backendapi-6thn.onrender.com/api/cotizacion");
            setCotizaciones(response.data);
        }
        catch (error) {
            console.error("Error fetching cotizaciones data:", error);
        }
    };

    useEffect(() => {
        fetchCotizaciones();
    }, []);

    return (
        <div>
            <div className="cotizaciones-header">
            <h1>Cotizaciones</h1>
            <p>Listado de cotizaciones</p>
            </div>

        <div className="cotizaciones-list">
<table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Cliente</th>
                    <th>Fecha Cotizacion</th>
                    <th>Importe Total</th>
                    <th>Moneda</th>
                </tr>
            </thead>
            <tbody>
                {cotizaciones.map((cotizacion,idx) => (
                    <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{cotizacion.nombreCliente}</td>
                        <td>{cotizacion.fechaEmision}</td>
                        <td>{cotizacion.totalPago}</td>
                        <td>{cotizacion.tipoMoneda}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>


        </div>
    );

}

export default Cotizaciones;
