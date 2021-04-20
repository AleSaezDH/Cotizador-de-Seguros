import React, { useState } from 'react';
import Formulario from './formulario';
import Resumen from './resumen';

function Home () {
    const [datosFinales, setDatosFinales] = useState({});
    const {total, datos} = datosFinales;
    return (<div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
        <Formulario setDatosFinales={setDatosFinales}/>
        {datos ? <Resumen total={total} datos={datos}/> : null}
        </div>
    )
}

export default Home;
