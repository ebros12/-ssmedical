interface SeedEmpresa {
    empresa: string;
    nombre: string;
    rut: string;
    direccion: string;
    contacto: string;
    email: string;
    ciudad: string;
}

interface SeedDataEmpresa {
    products: SeedEmpresa[],
}

export const initialDataEmpresa: SeedDataEmpresa = {
    products: [{
        empresa:'GEMCO',
        nombre:'Gemco General Machinery S.A.',
        rut:'76.142.730-K',
        direccion:'Los Nidos 1212 Independencia',
        contacto:'Noranna Rodriguez',
        email:'marcia.p03@gmail.com',
        ciudad:'Santiago'
    }]
}