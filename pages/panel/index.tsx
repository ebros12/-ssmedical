
import {useState, useEffect } from 'react';
import { Typography, Grid, Collapse, Button } from '@mui/material';
import { ShopLayout } from '../../components/layouts';
import EmpresasAdmin from '../../components/panel/EmpresasAdmin';
import Graficos from '../../components/panel/Graficos';

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page A', uv: 4010, pv: 2400, amt: 2400},{name: 'Page A', uv: 6, pv: 2400, amt: 2400},{name: 'Page A', uv: 999, pv: 2400, amt: 2400},{name: 'Page A', uv: 9999, pv: 2400, amt: 2400}];

const PanelControl = () => {
    const [items, setItems] = useState<any[]>([]);
    const [items2, setItems2] = useState<any[]>([]);
    const [expanded, setExpanded] = useState(false);
    const [expanded2, setExpanded2] = useState(true);

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
  
      const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

  return (
    <ShopLayout title={"S&S Medical"} pageDescription={"Panel de administracion"} >
      <Typography variant="h1" component='h1'>Empresas</Typography>
        <Button onClick={() => setExpanded(!expanded)}>Mostrar</Button>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <EmpresasAdmin />
      </Collapse>

      <Typography variant="h1" component='h1'>Graficos</Typography>
        <Button onClick={() => setExpanded2(!expanded2)}>Mostrar</Button>
      <Collapse in={expanded2} timeout="auto" unmountOnExit>
        <Graficos data={data} />
      </Collapse>

    </ShopLayout>
  )
}
export default PanelControl