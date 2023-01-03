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
    },{
        name:'Contacto del Ocular',
        estado:['OK', 'No Crítico', 'Crítico',
            'Pedido', 'Cliente',
            'No Aplica'],
        detalles:['Con Fuga','Corridos','Sucio']
    },{
        name:'Ocular',
        estado:['OK', 'No Crítico', 'Crítico',
            'Pedido', 'Cliente',
            'No Aplica'],
        detalles:['Nublado','Corrido']
    },{
        name:'Botones',
        estado:['OK', 'No Crítico', 'Crítico',
            'Pedido', 'Cliente',
            'No Aplica'],
        detalles:['Botón 1','Botón 2','Botón 3','Botón 4']
    },{
        name:'Prueba de fugas',
        estado:['OK', 'No Crítico', 'Crítico',
            'Pedido', 'Cliente',
            'No Aplica'],
        detalles:[]
    },{
        name:'Prueba de Aislación C-Distal',
        estado:['OK', 'No Crítico', 'Crítico',
            'Pedido', 'Cliente',
            'No Aplica'],
        detalles:[]
    },{
        name:'Aislación Tubo Inserción',
        estado:['OK', 'No Crítico', 'Crítico',
            'Pedido', 'Cliente',
            'No Aplica'],
        detalles:[]
    },{
        name:'Canales Aire/Agua o CO2',
        estado:['OK', 'No Crítico', 'Crítico',
            'Pedido', 'Cliente',
            'No Aplica'],
        detalles:['Obstruido','Lento','Desalineados']
    }
]
}