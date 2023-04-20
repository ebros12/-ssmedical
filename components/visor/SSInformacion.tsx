import { Grid, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const SSInformacion = ({id}: any) => {
  const [infoSS, setInfoSS] = useState<any>({});
  const [facturas, setFacturas] = useState<any>({});
  const [cotizaciones, setCotizaciones] = useState<any>({});
  const [informes, setInformes] = useState<any>({});
  const [diagnostico, setDiagnostico] = useState<any>({});
  useEffect(() => {
    let items = localStorage.getItem('ssListado');
    let facturas = localStorage.getItem('facturas');
    let cotizaciones = localStorage.getItem('cotizaciones');
    if (items !== null) {
      const parsedItems = JSON.parse(items);
      const foundItem = parsedItems.find((item: any) => item.SS === id);
      setInfoSS(foundItem || {});
    }
    if (facturas !== null) {
      const parsedItems2 = JSON.parse(facturas);
      const foundItem = parsedItems2.find((item: any) => item.id == id);  
      setFacturas(foundItem || {});
    }
    if (cotizaciones !== null) {
      const parsedItems3 = JSON.parse(cotizaciones);
      const foundItem = parsedItems3.find((item: any) => item.id == id);  
      setCotizaciones(foundItem || {});
      setInformes(JSON.parse(foundItem.Informe))
      setDiagnostico(foundItem.RespFDiagnostico)
      console.log("first",foundItem, informes, diagnostico)
    }
    
  }, [id]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} className='paper' sx={{ p: 2 }}>
          <Typography variant="h6">SS: {infoSS.SS}</Typography>
          <Typography variant="subtitle1">Cliente: {infoSS.Cliente}</Typography>
          <Typography variant="subtitle1">Dirección: {infoSS.Direccion}</Typography>
          <Typography variant="subtitle1">Modelo: {infoSS.Modelo}</Typography>
          <Typography variant="subtitle1">C. Cliente: {infoSS.cCliente}</Typography>
          <Typography variant="subtitle1">F. Ingreso: {infoSS.fIngreso}</Typography>
          <Typography variant="subtitle1">N. Serie: {infoSS.nSerie}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} >
        <Paper elevation={3} className='paper' sx={{ p: 2 }}>
        <Typography variant="h6" margin={1}> Factura</Typography>
          <Typography variant="h6" margin={1}>Fecha: {facturas.fechaCotiz}</Typography>
          <Typography variant="h5" margin={2}> Objetos</Typography>
          <div className="scroling">
          {
            facturas.Factura?facturas.Factura.map((items:any,index:number) => (
           <Grid container key={index} >
              <Typography key={index} variant="subtitle1"   margin={1}> {items.cantidad}</Typography>
              <Typography key={index+1} variant="subtitle1" margin={1}> {items.codigo}</Typography>
              <Typography key={index+2} variant="subtitle1" margin={1}> {items.descripcion}</Typography>
              <Typography key={index+3} variant="subtitle1" margin={1}> {items.precioUnitario}</Typography>
              
           </Grid> )):<><Typography key={0} variant="subtitle1"> Cargando </Typography></>
          }
          </div>

          <a href="documento.pdf" download className="boton-descarga"><i className="fas fa-file-pdf"></i> Descargar documento</a>


        </Paper>
      </Grid>
      <Grid item xs={12} md={12}>
        <Paper elevation={3} className='paper' sx={{ p: 2 }}>
        <Typography variant="h6" margin={1}> Informe Observaciones</Typography>
          <Typography variant="h6" margin={1}>Fecha: {facturas.fechaCotiz}</Typography>
          <hr/>
          <Grid container>
          {
  diagnostico && Array.isArray(diagnostico) ? (
    diagnostico.map((item: any, index: number) => (
      
        <Grid item xs={4} key={index} className='itemsDiagnostico'>
        <Typography variant="subtitle1" margin={1}>{item.name}</Typography>
        <Typography variant="subtitle1" margin={1}>{item.value}</Typography>
        </Grid>
      
    ))
  ) : (
    <Typography variant="subtitle1">Cargando</Typography>
  )
}
</Grid>

        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} className='paper' sx={{ p: 2 }}>
        <Typography variant="h6" margin={1}> Informe Observaciones</Typography>
          <Typography variant="h6" margin={1}>Fecha: {facturas.fechaCotiz}</Typography>
          <hr/>
          {
            informes.obs?informes.obs.map((items:any,index:number) => (
           <Grid container key={index}>
              <Typography key={index} variant="subtitle1"   margin={1}> {items}</Typography>
           </Grid> )):<><Typography key={0} variant="subtitle1"> Cargando </Typography></>
          }
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} className='paper' sx={{ p: 2 }}>
        <Typography variant="h6" margin={1}> Informe Trabajos Realizados</Typography>
          <Typography variant="h6" margin={1}>Fecha: {facturas.fechaCotiz}</Typography>
          <hr/>
          {
           informes.tRealizados?informes.tRealizados.map((items:any,index:number) => (
           <Grid container key={index}>
              <Typography key={index} variant="subtitle1"   margin={1}> {items}</Typography>   
           </Grid> )):<><Typography key={0} variant="subtitle1"> Cargando </Typography></>
          }
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} className='paper' sx={{ p: 2 }}>
        <Typography variant="h6" margin={1}> Informe Trabajos de Reparación</Typography>
          <Typography variant="h6" margin={1}>Fecha: {facturas.fechaCotiz}</Typography>
          <hr/>
          {
            informes.tReparacion?informes.tReparacion.map((items:any,index:number) => (
           <Grid container key={index}>
              <Typography key={index} variant="subtitle1"   margin={1}> {items}</Typography>
           </Grid> )):<><Typography key={0} variant="subtitle1"> Cargando </Typography></>
          }
        </Paper>
      </Grid>
    </Grid>
  );
}

export default SSInformacion;
