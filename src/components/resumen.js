import React from 'react';
import { Pane, Heading } from 'evergreen-ui';

function Resumen ({total, datos}) {
    return (<>
        {/*<div>
            <h1>Marca: {datos.marca}</h1>
            <h1>Año: {datos.year}</h1>
            <h1>Plan: {datos.plan}</h1>
        </div>*/}
        <Pane>
            <Heading size={700} style={{marginTop:20}}>Valor del seguro: ${total}</Heading>
        </Pane>
        </>
    )
}

export default Resumen;
