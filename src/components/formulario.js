import React, { useState } from 'react';
import {valorPorYear, valorPorMarca, valorPorPlan} from '../helpers';
import { Pane, Heading, Select, Radio, Button, toaster } from 'evergreen-ui';

function Formulario ({setDatosFinales}) {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });
    const [error, setError] = useState(false);

    const {marca, year, plan} = datos;

    function guardarDatos (e) {
        setDatos({...datos, [e.target.name] : e.target.value})
    }

    function validarForm (e) {
        e.preventDefault();

        if ((marca, year, plan).trim() === '') {
            setError(true);
            return ;
        }

        let base = 2000;

        setError(false);
        const cantidadYears = valorPorYear(year);
        base -= ((cantidadYears * 3) * base) / 100;

        base = valorPorMarca(marca) * base;

        let valorPlan = valorPorPlan(plan);
        base = parseFloat(valorPlan * base).toFixed(2);

        setDatosFinales({total:base, datos});
    }

    const alerta = () => {
        toaster.notify('Completa todos los campos')
    }

    return (<>
    <Pane elevation={4} backgroundColor='white'>
        <form onSubmit={validarForm} style={{display:'flex', flexDirection:'column', padding:30, width:500}}>
            
            <Heading size={500} style={{marginBottom:5, marginTop:20}}>Marca</Heading >
            <Select width="100%" height={50} name='marca' value={marca} onChange={guardarDatos}>
                <option selected>--Seleccione--</option>
                <option value='americano'>Americano</option>
                <option value='europeo'>Europeo</option>
                <option value='asiatico'>Asiático</option>
            </Select>

            <Heading size={500} style={{marginBottom:5, marginTop:20}}>Año</Heading>
            <Select width="100%" height={50} name='year' value={year} onChange={guardarDatos}>
                <option selected>-- Seleccione --</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
            </Select>

            <Heading size={500} style={{marginBottom:5, marginTop:20}}>Plan</Heading >
            <Radio size={16} name='plan' value='basico' onChange={guardarDatos} label="Básico" />
            <Radio size={16} name='plan' value='completo' onChange={guardarDatos} label="Completo" />
            <div style={{display:'flex', justifyContent:'center'}}>
                <Button style={{marginTop:10}} height={35} appearance="primary" intent="none" onClick={(marca, year, plan).trim() === '' ? alerta : false}>Cotizar</Button>
            </div>
        </form>
    </Pane>
    </>
    )
}

export default Formulario;
