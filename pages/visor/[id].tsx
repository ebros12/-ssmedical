import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { ShopLayout } from '../../components/layouts'
import SSInformacion from '../../components/visor/SSInformacion'


const VisorSS: NextPage = () => {


    const router = useRouter()
    const { id }= router.query

  return (
    <ShopLayout title={"S&S Medical"} pageDescription={"Visor de SS"} >
        <SSInformacion id={id}/>
    </ShopLayout>
  )
}


export default VisorSS;