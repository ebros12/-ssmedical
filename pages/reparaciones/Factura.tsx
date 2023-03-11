import { Box, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { ShopLayout } from '../../components/layouts';
import FacturaAcciones from '../../components/reparaciones/FacturaAcciones';

const Factura = () => {
  const [items, setItems] = useState<any[]>([]);
  const [infoEmpresas, setInfoEmpresas] = useState<any[]>([]);
  const [infoCabezera, setInfoCabezera] = useState<any[]>([]);
  
  
  useEffect(() => {
    let items = localStorage.getItem('favorites') ;
    let infoEmpresas = localStorage.getItem('InfoEmpresas') ;
    let infoCabezera = localStorage.getItem('InfoCabezera') ;
    
    if(items !== null){
      setItems(JSON.parse(items));
    }
    if(infoEmpresas !== null){
      setInfoEmpresas(JSON.parse(infoEmpresas));
    }else{
      setInfoCabezera(JSON.parse('[{"id" : "1","correo":"stendo@gemco.cl", "telefono":" +2 2172022","empresa":"GEMCO","nombre":"Gemco General Machinery S.A.","rut":"76.142.730-K","direccion":"Los Nidos 1212 Independencia","contacto":"Noranna Rodriguez","email":"marcia.p03@gmail.com","ciudad":"Santiago"}]'));
    }
    if(infoCabezera !== null){
      setInfoCabezera(JSON.parse(infoCabezera));
    }
    

    

  }, []);

  const objetoEmpresa = infoEmpresas.find(buscar => buscar.id == infoCabezera[0].Cliente)
  console.log("estar",infoCabezera)

  return (
    <ShopLayout title={"S&S Medical"} pageDescription={"Reparaciones | Informe"} >
    <Grid container className="boxPrincipal">
        <Grid item xs={12}>
            <CardMedia
                sx={{ height: '15vh',width:'15vw',margin:'1.5rem' }}
                image="/iconoSSMedical.png"
                title="SSMedical"
            />
            <Typography>S&S Medical Ltda.</Typography>
            <Typography>77.591.147-6</Typography>
        </Grid>
        <Grid item xs={6}>
            <Typography>Comercialización y reparación de Equipos Médicos</Typography>
            <Typography>Av. Del Valle Sur 662  Oficina 203, Huechuraba</Typography>
            <Typography>Telefono +569 34241197</Typography>
            <Typography>Correo   contacto@ssmedical.cl</Typography>
        </Grid>
        <Grid item xs={6} className='box'>
            <Box>
                  <Typography className='headBox'>Cotización</Typography>
                  <Typography margin={'1rem'}>{items.length+1}</Typography>
            </Box>
        </Grid>

        <Grid item xs={3} className='box'>
          <Box>
              <Typography className='headBox'>Rut</Typography>
              <Typography>{objetoEmpresa !== undefined  ?  objetoEmpresa.rut:''}</Typography>
          </Box>
        </Grid>
        <Grid item xs={3} className='box'>
          <Box>
              <Typography className='headBox'>Cliente</Typography>
              <Typography>{objetoEmpresa !== undefined  ?  objetoEmpresa.nombre:''}</Typography>
          </Box>
        </Grid>
        <Grid item xs={3} className='box'>
          <Box>
              <Typography className='headBox'>Contacto</Typography>
              <Typography>{objetoEmpresa !== undefined  ?  objetoEmpresa.contacto:''}</Typography>
          </Box>
        </Grid>
        <Grid item xs={3} className='box'>
          <Box>
              <Typography className='headBox'>Fecha</Typography>
              <Typography>{infoCabezera[0] !== undefined  ?  infoCabezera[0]['fIngreso']:''}</Typography>
          </Box>
        </Grid>
        <Grid item xs={3} className='box'>
          <Box>
              <Typography className='headBox'>Teléfono</Typography>
              <Typography>{objetoEmpresa !== undefined  ?  objetoEmpresa.telefono:''}</Typography>
          </Box>
        </Grid>
        <Grid item xs={3} className='box'>
          <Box>
              <Typography className='headBox'>Dirección</Typography>
              <Typography>{objetoEmpresa !== undefined  ?  objetoEmpresa.direccion:''} </Typography>
          </Box>
        </Grid>
        <Grid item xs={3} className='box'>
          <Box>
              <Typography className='headBox'>Email</Typography>
              <Typography>{objetoEmpresa !== undefined  ?  objetoEmpresa.correo:''} </Typography>
              <Typography></Typography>
          </Box>
        </Grid>
        <Grid item xs={3} className='box'>
          <Box>
              <Typography className='headBox'>Ciudad</Typography>
              <Typography>{objetoEmpresa !== undefined  ?  objetoEmpresa.ciudad:''}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} className='espacio' />
        <Grid item xs={3} className='box'>
          <Box>
              <Typography className='headBox'>Código</Typography>

          </Box>
        </Grid>
        <Grid item xs={3} className='box'>
          <Box>
              <Typography className='headBox'>Descripción</Typography>

          </Box>
        </Grid>
        <Grid item xs={2} className='box'>
          <Box>
              <Typography className='headBox'>Cantidad</Typography>
          </Box>
        </Grid>
        <Grid item xs={2} className='box'>
          <Box>
              <Typography className='headBox'>Precio unit</Typography>
          </Box>
        </Grid>
        <Grid item xs={2} className='box'>
          <Box>
              <Typography className='headBox'>Precio Total</Typography>
          </Box>
        </Grid>
        {
          <FacturaAcciones />
        }
                <Grid item xs={6} textAlign='left' margin={'2rem 0rem'}>
          <Image
              src={`/pentax.png`}
              width={200}
              height={50}
              alt={'pentax'}
              loading="lazy"
            />
        </Grid>
        <Grid item xs={6} textAlign='right' margin={'2rem 0rem'}>
          <Image
              src={`/olympus.png`}
              width={200}
              height={50}
              alt={'olympus'}
              loading="lazy"
            />
        </Grid>
        <Grid item xs={12} >
            <Typography  > Las marcas, símbolos o logos expuestos en esta cotización son a término de referencia de los servicios entregados por S&S Medical Ltda,  </Typography>
            <Typography  > sin pretención de uso. Las marcas mencionadas son propiedad del fabricante correspondiente. </Typography>
        </Grid>
    </Grid>
    </ShopLayout>
  )
}

export default Factura