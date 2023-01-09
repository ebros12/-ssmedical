import { Button } from '@mui/material'
import Link from 'next/link'
import { ShopLayout } from '../../components/layouts'
import {Cabezera, InformeForm, SubirImg}  from '../../components/reparaciones'
const Informe = () => {
    

      
  return (
    <ShopLayout title={"S&S Medical"} pageDescription={"Reparaciones | Informe"} >
        <Cabezera />
        <InformeForm />
        <SubirImg />
    </ShopLayout>
  )
}

export default Informe