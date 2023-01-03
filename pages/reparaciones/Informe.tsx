import { ShopLayout } from '../../components/layouts'
import {Cabezera, InformeForm}  from '../../components/reparaciones'
const Informe = () => {
    

      
  return (
    <ShopLayout title={"S&S Medical"} pageDescription={"Reparaciones | Informe"} >
        <Cabezera />
        <InformeForm />
    </ShopLayout>
  )
}

export default Informe