import { Typography } from "@mui/material";
import { NextPage } from "next";

import CotizList from "../components/cotizacion/CotizList";

import { ShopLayout } from '../components/layouts';



const Home:NextPage = () => {
  return (
    <ShopLayout title={"S&S Medical"} pageDescription={"Encuentra los mejores productos aqui"} >
      <Typography variant="h1" component='h1'>Cotizaciones</Typography>
      <Typography variant="h2" sx={{mb:1}}>Informacion sobre los pagos</Typography>
      
      <CotizList />

    </ShopLayout>

  )
}

export default Home