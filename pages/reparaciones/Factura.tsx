import { Box, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import FacturaAcciones from '../../components/reparaciones/FacturaAcciones';

const Factura = () => {
  return (
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
                  <Typography margin={'1rem'}>0132</Typography>
            </Box>
        </Grid>

        <Grid item xs={3} className='box'>
          <Box>
              <Typography className='headBox'>Rut</Typography>
              <Typography>76.142.730-K</Typography>
          </Box>
        </Grid>
        <Grid item xs={3} className='box'>
          <Box>
              <Typography className='headBox'>Cliente</Typography>
              <Typography>Gemco General Machinery S.A.</Typography>
          </Box>
        </Grid>
        <Grid item xs={3} className='box'>
          <Box>
              <Typography className='headBox'>Contacto</Typography>
              <Typography>Noranna Rodriguez</Typography>
          </Box>
        </Grid>
        <Grid item xs={3} className='box'>
          <Box>
              <Typography className='headBox'>Fecha</Typography>
              <Typography>21/7/2022</Typography>
          </Box>
        </Grid>
        <Grid item xs={3} className='box'>
          <Box>
              <Typography className='headBox'>Teléfono</Typography>
              <Typography>+22172022</Typography>
          </Box>
        </Grid>
        <Grid item xs={3} className='box'>
          <Box>
              <Typography className='headBox'>Dirección</Typography>
              <Typography>Los Nidos 1212 Independencia </Typography>
          </Box>
        </Grid>
        <Grid item xs={3} className='box'>
          <Box>
              <Typography className='headBox'>Email</Typography>
              <Typography>stendo@gemco.cl</Typography>
          </Box>
        </Grid>
        <Grid item xs={3} className='box'>
          <Box>
              <Typography className='headBox'>Ciudad</Typography>
              <Typography>Santiago</Typography>
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
        <Grid item xs={12} className='espacio' />
        <Grid item xs={3} className='box'>
          <Box>
              <Typography margin={'1rem'}>Datos Pago</Typography>
          </Box>
        </Grid>
        <Grid item xs={5} className='box'>
          <Box>
              <Typography margin={'1rem'}>Banco ITAU Cuenta Corriente 224250437</Typography>
              <Typography margin={'1rem'}>Rut 77.591.147-6  S&S Medical Ltda</Typography>
          </Box>
        </Grid>
        <Grid item xs={4} className=''></Grid>

        

        <Grid item xs={3} className='box'>
          <Box>
              <Typography margin={'1rem'}>Notas</Typography>
          </Box>
        </Grid>
        <Grid item xs={5} className='box'>
          <Box>
              <Typography margin={'1rem'}>Cancelar con depósito, transferencia o tarjeta de crédito mediante link de pago WebPay</Typography>
              <Typography margin={'1rem'}>Vigencia de cotizacion por 15 días</Typography>
              <Typography margin={'1rem'}>Agradecemos enviar comprobante a isalas@ssmedical.cl</Typography>
              <Typography margin={'1rem'}>Plazo de entrega 30 dias habiles, con previa recepcion de OC</Typography>
          </Box>
        </Grid>
        <Grid item xs={4} className='box' container>
          <Grid item xs={6} className='box'>
              <Typography >Sub Total</Typography>
          </Grid>
          <Grid item xs={6} className='box'>
              <Typography >$3,700,000  </Typography>
          </Grid>
          <Grid item xs={6} className='box'>
              <Typography >Descuento</Typography>
          </Grid>
          <Grid item xs={6} className='box'>
              <Typography ></Typography>
          </Grid>
          <Grid item xs={6} className='box'>
              <Typography >Valor Neto </Typography>
          </Grid>
          <Grid item xs={6} className='box'>
              <Typography ></Typography>
          </Grid>
          <Grid item xs={6} className='box'>
              <Typography >Iva (19%)</Typography>
          </Grid>
          <Grid item xs={6} className='box'>
              <Typography > $703,000 </Typography>
          </Grid>
          <Grid item xs={6} className='box'>
              <Typography >Valor Total</Typography>
          </Grid>
          <Grid item xs={6} className='box'>
              <Typography > $4,403,000 </Typography>
          </Grid>

     
        </Grid>

        <Grid item xs={6} textAlign='left' margin={'2rem 0rem'}>
          <img
              src={`/pentax.png`}
              srcSet={`/pentax.png`}
              alt={'pentax'}
              loading="lazy"
            />
        </Grid>
        <Grid item xs={6} textAlign='right' margin={'2rem 0rem'}>
          <img
              src={`/olympus.png`}
              srcSet={`/olympus.png`}
              alt={'olympus'}
              loading="lazy"
            />
        </Grid>
        <Grid item xs={12} >
            <Typography  > Las marcas, símbolos o logos expuestos en esta cotización son a término de referencia de los servicios entregados por S&S Medical Ltda,  </Typography>
            <Typography  > sin pretención de uso. Las marcas mencionadas son propiedad del fabricante correspondiente. </Typography>
        </Grid>
    </Grid>
  )
}

export default Factura