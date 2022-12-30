import { Table, TableRow, TableCell, Grid, Typography, TextField, CardMedia, Button, Box, Modal } from '@mui/material';
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { ShopLayout } from '../../components/layouts';
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Index = () => {
    
    const { reset, control } = useForm();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <ShopLayout title={"S&S Medical"} pageDescription={"Reparaciones"} >
    <Grid container>
        
        <Grid item xs={12} sx={{ textAlign:'center',margin:'1rem' }}>
            <Typography >FORMULARIO DE DIAGNÓSTICO</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
            
            <Controller
                name={"Cliente"}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <TextField name="Cliente" className='m2r' onChange={onChange} value={value} label={"Cliente"} />
                )}
            />
            <Controller
                name={"Direccion"}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <TextField name="Direccion" className='m2r' onChange={onChange} value={value} label={"Direccion"} />
                )}
            />
            <Controller
                name={"Modelo"}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <TextField name="Modelo" className='m2r' onChange={onChange} value={value} label={"Modelo"} />
                )}
            />
            <Controller
                name={"N°Serie"}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <TextField name="N°Serie" className='m2r' onChange={onChange} value={value} label={"N°Serie"} />
                )}
            />
            
        </Grid>
        <Grid item xs={12} md={4}>
            <Controller
                name={"Fecha Ingreso"}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <TextField name="Fecha Ingreso" className='m1r' onChange={onChange} value={value} label={"Fecha Ingreso"} />
                )}
            />
            <Controller
                name={"SS"}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <TextField name="SS" className='m1r' onChange={onChange} value={value} label={"SS"} />
                )}
            />
            <Controller
                name={"Comentario Cliente"}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <TextField name="Comentario Cliente" className='m2r' onChange={onChange} value={value} label={"Comentario Cliente"} />
                )}
            />
            
            
        </Grid>
        <Grid item xs={12} md={4}>
            <CardMedia
                sx={{ height: '15vh',width:'15vw',margin:'1.5rem' }}
                image="iconoSSMedical.png"
                title="SSMedical"
            />
        </Grid>
        <Grid item xs={12}>
            
        <hr style={{ margin:'2rem' }}/>
        
        <Button sx={{ float:'right' }} onClick={handleOpen}>Agregar Diagnóstico</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            DIAGNÓSTICO ENDOSCOPIO
          </Typography>
          <Controller
                name={"DIAGNÓSTICO ENDOSCOPIO"}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <TextField name="DIAGNÓSTICO ENDOSCOPIO" className='m2r' onChange={onChange} value={value} label={"DIAGNÓSTICO ENDOSCOPIO"} />
                )}
            />
            <Controller
                name={"DETALLES"}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <TextField name="DETALLES" className='m2r' onChange={onChange} value={value} label={"DETALLES"} />
                )}
            />
            <Controller
                name={"COMENTARIOS"}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <TextField name="COMENTARIOS" className='m2r' onChange={onChange} value={value} label={"COMENTARIOS"} />
                )}
            />
            <Button sx={{ float:'right' }} color='warning'>Agregar</Button>
        </Box>
      </Modal>
    
            <Table>      
                <TableRow  className='row-style'>
                    <TableCell variant="head">DIAGNÓSTICO ENDOSCOPIO</TableCell>
                    <TableCell variant="head">DETALLES</TableCell>
                    <TableCell variant="head">COMENTARIOS</TableCell>
                </TableRow>     
                <TableRow  className='row-style'>
                    <TableCell variant="head">Verificación ID</TableCell>
                    <TableCell>Sin datos | Error  datos | Sin transmisión</TableCell>
                    <TableCell>270 usos 7432 minutos </TableCell>

                </TableRow>       
            </Table>
            <Button sx={{ float:'right' }}>Informe Técnico</Button>
        </Grid>
    </Grid>


</ShopLayout>
  )
}

export default Index