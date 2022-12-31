import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Bar, BarChart, Legend } from 'recharts';
import {useState, useEffect } from 'react';
import { Typography, Grid } from '@mui/material';
import { ShopLayout } from '../../components/layouts';

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page A', uv: 4010, pv: 2400, amt: 2400},{name: 'Page A', uv: 6, pv: 2400, amt: 2400},{name: 'Page A', uv: 999, pv: 2400, amt: 2400},{name: 'Page A', uv: 9999, pv: 2400, amt: 2400}];

const PanelControl = () => {
    const [items, setItems] = useState<any[]>([]);
    const [items2, setItems2] = useState<any[]>([]);
    useEffect(() => {
        const items = localStorage.getItem('favorites') ;
        const items2 = localStorage.getItem('FDiagnostico') ;
        if (items) {
         setItems(JSON.parse(items));
         
        }
        if (items2) {
            setItems2(JSON.parse(items2));
        }

      }, []);
  
      const dataCharts = items.map(data =>{
        return {
            name: data.cliente,
            uv: data.montoNeto
        }
      })
      const totalPrice = dataCharts.reduce((total, data) => total + parseInt(data.uv), 0);



  return (
    <ShopLayout title={"S&S Medical"} pageDescription={"Panel de administracion"} >
      <Typography variant="h1" component='h1'>Panel de Control</Typography>
      <Typography variant="h2" sx={{mb:1}}>Graficos</Typography>
        <Grid container>
            <Grid item xs={12} md={6}>
                <LineChart width={500} height={255} data={dataCharts} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </Grid>
            <Grid item xs={12} md={6}>
                <BarChart width={500} height={300} data={dataCharts} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="uv" fill="#8884d8" barSize={30} />
                </BarChart>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography>Numero de cotizaciones: {dataCharts.length}</Typography>
                <Typography>Numero de reparaciones: {items2.length}</Typography>
                
                <Typography>Total observaciones {items2.length}</Typography>

                <Typography>Total de Ingresos {totalPrice} </Typography>
            </Grid>
        </Grid>



    </ShopLayout>
  )
}
export default PanelControl