import { TableCell, Table, TableHead, TableRow, TableBody,  MenuItem, tableCellClasses, Box, Button, Grid, Modal, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from "@emotion/styled";
import Select from 'react-select'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { Controller, useForm } from "react-hook-form";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  height:'90vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: 'black',
      color: 'white',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: 'white',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  
const TableCotizacion = () => {


  const { reset, control } = useForm();
  const [items, setItems] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    let items = localStorage.getItem('cotizaciones') ;
    if(items !== null){
      setItems(JSON.parse(items));
      
    }

  }, []);


  console.log(items)
  const guardarCotiz = () => {
    const clienteVar = document.querySelector("input[name='cliente']") as HTMLInputElement | {value:'CENCOMEX'}
    const fechaCotiz = document.querySelector("#fechaCotiz") as HTMLInputElement | {value:'10/7/2022'}
    const oc = document.querySelector("input[name='oc']") as HTMLInputElement | {value:'NX25'}
    const fechaOC = document.querySelector("#fechaOC") as HTMLInputElement | {value:'11/7/2022'}
    const factura = document.querySelector("input[name='factura']") as HTMLInputElement | {value:22}
    const fechaFactura = document.querySelector("#fechaFactura") as HTMLInputElement | {value:'11/14/2022'}
    const fechaPago = document.querySelector("#fechaPago") as HTMLInputElement | {value:'11/14/2022'}
    const estado = document.querySelector("input[name='estado']") as HTMLInputElement | {value:'10'}
    const comentarios = document.querySelector("input[name='comentario']") as HTMLInputElement | {value:'INSTALACION 14/11'}
    const montoNeto = document.querySelector("input[name='montoNeto']") as HTMLInputElement | {value:100000}
    if(clienteVar != null){
        
        let aux = {
          id:items.length+1,
          cliente:clienteVar.value,
          fechaCotiz:fechaCotiz.value,
          OC:oc.value,
          fechaOC: fechaOC.value,
          factura: factura.value,
          fechaFactura: fechaFactura.value,
          fechaPago: fechaPago.value,
          estado: estado.value,
          comentarios:comentarios.value,
          montoNeto:montoNeto.value
      }
      items.push(aux)
      localStorage.setItem('favorites', JSON.stringify(items));
      handleClose();
    }




    
    
    
}



    const options = [
      {value: "10",label: 'EN ESPERA OC'},
      {value: "20",label: 'EN PROCESO'},
      {value: "30",label: 'EN ESPERA PAGO'},
      {value: "40",label: 'PAGADO'},

    ]
  
  return (
    <Grid container sx={{ margin:'1rem',float:'right' }}>
      <Grid item xs={12}>
        <Button sx={{ margin:'1rem',float:'right' }} color="warning" onClick={handleOpen} >Crear Cotizacion</Button>
      </Grid>
        
      <Grid item xs={12}>
        <Table className='tableScroll' size="small" aria-label="simple table">
      
    <TableHead>
      <TableRow>
        <StyledTableCell>ID</StyledTableCell>
        <StyledTableCell align="right">Cliente</StyledTableCell>
        <StyledTableCell align="right">Fecha Cotizacion</StyledTableCell>
        <StyledTableCell align="right">Monto Neto</StyledTableCell>
        <StyledTableCell align="right">OC</StyledTableCell>
        <StyledTableCell align="right">Fecha OC</StyledTableCell>
        <StyledTableCell align="right">Factura</StyledTableCell>
        <StyledTableCell align="right">Fecha Factura</StyledTableCell>
        <StyledTableCell align="right">Fecha Pago</StyledTableCell>
        <StyledTableCell align="right">Estado</StyledTableCell>
        <StyledTableCell align="right">Comentario</StyledTableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      { items.map((row:any) => (
        <StyledTableRow
          key={`row${row.id}`}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <StyledTableCell component="th" scope="row">
            {row.id}
          </StyledTableCell>
          <StyledTableCell align="right">{row.InfoCabezera[0].Cliente}</StyledTableCell>
          <StyledTableCell align="right">{row.fechaCotiz}</StyledTableCell>
          <StyledTableCell align="right">{row.total}</StyledTableCell>
          <StyledTableCell align="right">{row.InfoCabezera[0].SS}</StyledTableCell>
          <StyledTableCell align="right">{row.InfoCabezera[0].fIngreso}</StyledTableCell>
          <StyledTableCell align="right">{row.facturas[0].id}</StyledTableCell>
          <StyledTableCell align="right">{row.facturas[0].fechaCotiz}</StyledTableCell>
          <StyledTableCell align="right">{row.fechaPago}</StyledTableCell>
          <StyledTableCell align="right">  
            <Select className="selects" options={options} defaultValue={options[options.findIndex((filtro) => filtro.value == row.estado)]}/>
          </StyledTableCell>
          <StyledTableCell align="right">{row.comentarios}</StyledTableCell>
          
        </StyledTableRow>
      ))}
    </TableBody>
        </Table>
      </Grid>
   
      
      <Modal
      
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
      <Box sx={style} className='modalGlobal'>
          <Typography id="modal-modal-title" variant="h6" component="h6" sx={{ margin:'1rem 0rem' }}>
          Ingrese los Datos para la Cotizacion
          </Typography>
          <Grid container spacing={1}>
              <Grid item xs={12} md={6} className='inputs'>
                  <Controller
                    
                    name={"cliente"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <TextField name="cliente" className='m2r' onChange={onChange} value={value} label={"Cliente"} />
                    )}
                  />



                  <Controller
                    name={"oc"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <TextField name="oc" className='m2r' onChange={onChange} value={value} label={"oc"} />
                    )}
                  />

                  

                  <Controller
                    name={"factura"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <TextField name="factura" className='m2r' onChange={onChange} value={value} label={"factura"} />
                    )}
                  />

                  
                  
                  

                  <Controller
                  
                    name={"comentario"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <TextField name="comentario" className='m2r' onChange={onChange} value={value} label={"Comentarios"} />
                    )}
                  />

                  <Controller
                    name={"montoNeto"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <TextField name="montoNeto" className='m2r' onChange={onChange} value={value} label={"Monto Neto"} />
                    )}
                  />
                  

              </Grid>
              <Grid item xs={12} md={6} className='inputs'>
                <Controller
                      name={"fechaCotiz"}
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            
                              className='m2r'
                              label="Fecha Cotización"
                              value={value}
                              onChange={onChange}
                              renderInput={(params) => <TextField id='fechaCotiz' className='m2r' {...params} />}
                          />
                        </LocalizationProvider>
                      )}
                    />
                    <Controller
                    name={"fechaOC"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            className='m2r'
                            label="Fecha OC"
                            value={value}
                            onChange={onChange}
                            renderInput={(params) => <TextField id="fechaOC" className='m2r' {...params} />}
                        />
                      </LocalizationProvider>
                    )}
                  />
                                    <Controller
                    name={"fechaFactura"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                          className='m2r'
                          label="Fecha Factura"
                          value={value}
                          onChange={onChange}
                          renderInput={(params) => <TextField id="fechaFactura" className='m2r' {...params} />}
                      />
                      </LocalizationProvider>
                    )}
                  />
                  <Controller
                    name={"fechaPago"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                          className='m2r'
                          label="Fecha Pago"
                          value={value}
                          onChange={onChange}
                          renderInput={(params) => <TextField id="fechaPago" className='m2r' {...params} />}
                      />
                      </LocalizationProvider>
                    )}
                  />
                  <Select  name="estado" className='m2r' options={options} />
              </Grid>
              <Grid item xs={12}>
              <Button onClick={guardarCotiz} color='success' sx={{ margin:'1rem 0rem',float:'right' }}>Guardar</Button>
              </Grid>
              
          </Grid>

          
      </Box>
      </Modal>
  </Grid>

  )
}

export default TableCotizacion