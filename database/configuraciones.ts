interface SeedProduct {
    name: string;
    estado: estados[];
    detalles: string[];
}

type estados = 'OK'| 'No Crítico'| 'Crítico'|
'Pedido'| 'Cliente'|
'No Aplica';


interface SeedData {
    products: SeedProduct[],
}




export const initialData: SeedData = {
    products: [{
        name:'VerificacionID',
        estado:['OK', 'No Crítico', 'Crítico',
            'Pedido', 'Cliente',
            'No Aplica'],
        detalles:['Sin datos','Error  datos','Sin transmisión']
    },{
        name:'Imagen - EVIS',
        estado:['OK', 'No Crítico', 'Crítico',
            'Pedido', 'Cliente',
            'No Aplica'],
        detalles:['Humedad','Sin imagen']
    },
    {
        name:'Imagen - OES',
        estado:['OK', 'No Crítico', 'Crítico',
            'Pedido', 'Cliente',
            'No Aplica'],
        detalles:['Humedad','Tortuga','Suciedad']
    }]
}