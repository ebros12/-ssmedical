import { Button, Grid } from '@mui/material'
import Link from 'next/link'
import { ShopLayout } from '../../components/layouts'
import {Cabezera, InformeForm, SubirImg}  from '../../components/reparaciones'
const Informe = () => {
    

      
  return (
    <ShopLayout title={"S&S Medical"} pageDescription={"Reparaciones | Informe"} >
        <Cabezera />
        <InformeForm />
        <SubirImg />
        <Grid item xs={12} textAlign={'right'} display='block'>
              <Link href='../reparaciones/Factura' passHref><Button color='primary'>Generar Factura</Button></Link>  
        </Grid>
    </ShopLayout>
  )
}

export default Informe