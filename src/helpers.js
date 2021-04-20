export const valorPorYear = (year) => {return new Date().getFullYear() - year}

export const valorPorMarca = (marca) => {
    let dato ;
    switch(marca) {
        case('europeo'): dato = 1.3
        break;
        case('americano'): dato = 1.15
        break;
        case('asiatico'): dato = 1.05
        break
        default: break
    }
    return dato;
}

export const valorPorPlan = (plan) => {return plan === 'basico' ? 1.2 : 1.5}