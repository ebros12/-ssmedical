import { Table, TableRow, TableCell, Grid, Typography, TextField, CardMedia, Button, Box, Modal } from '@mui/material';
import { typography } from '@mui/system';
import React, { useEffect, useState } from 'react'
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

    const [items, setItems] = useState<any[]>([]);
    const [infoCabezera, setInfoCabezera] = useState<any[]>([]);

    useEffect(() => {
        let items = localStorage.getItem('FDiagnostico') ;
        let infoCabezera = localStorage.getItem('InfoCabezera') ;
        if(items !== null){
          setItems(JSON.parse(items));
        }
        if(infoCabezera !== null){
            setInfoCabezera(JSON.parse(infoCabezera));
            
        }
    
      }, []);
      console.log(infoCabezera)
      const guardarDiagnostico = () => {
        const Dendoscopio = document.querySelector("input[name='DENDOSCOPIO']") as HTMLInputElement | {value:''}
        const Detalles = document.querySelector("input[name='DETALLES']") as HTMLInputElement | {value:''}
        const Comentarios = document.querySelector("input[name='COMENTARIOS']") as HTMLInputElement | {value:''}

        const Cliente = document.querySelector("input[name='Cliente']") as HTMLInputElement | {value:''}
        const Direccion = document.querySelector("input[name='Direccion']") as HTMLInputElement | {value:''}
        const Modelo = document.querySelector("input[name='Modelo']") as HTMLInputElement | {value:''}
        const nSerie = document.querySelector("input[name='N°Serie']") as HTMLInputElement | {value:''}
        const fIngreso = document.querySelector("input[name='Fecha Ingreso']") as HTMLInputElement | {value:''}
        const SS = document.querySelector("input[name='SS']") as HTMLInputElement | {value:''}
        const cCliente = document.querySelector("input[name='Comentario Cliente']") as HTMLInputElement | {value:''}
        
        if(Dendoscopio.value != '' || Detalles.value != ''){
        
            let aux = {
              id:items.length+1,
              Dendoscopio:Dendoscopio.value,
              Detalles:Detalles.value,
              Comentarios:Comentarios.value,


            }

            let auxCabezera = {
                Cliente:Cliente.value,
                Direccion:Direccion.value,
                Modelo:Modelo.value,
                nSerie:nSerie.value,
                fIngreso:fIngreso.value,
                SS:SS.value,
                cCliente:cCliente.value,
            }
            items.push(aux)
            infoCabezera.push(auxCabezera)
           
            localStorage.setItem('FDiagnostico', JSON.stringify(items));
            localStorage.setItem('InfoCabezera', JSON.stringify(infoCabezera));
            handleClose()
        }else{
            alert('uff')
          }

      }

  return (
    <ShopLayout title={"S&S Medical"} pageDescription={"Reparaciones"} >
    <Grid container>
        
        <Grid item xs={12} sx={{ textAlign:'center',margin:'1rem' }}>
            <Typography >FORMULARIO DE DIAGNÓSTICO</Typography>
        </Grid>
        {infoCabezera.length === 0 ? (
        <Grid container>
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

            </Grid>)
            : infoCabezera.map(item => (
                <Grid container key={item.id}>
                    <Grid item xs={12} md={4}>
                        <Typography><strong>Cliente: </strong> {item.Cliente}</Typography>
                        <Typography><strong>Direccion: </strong> {item.Direccion}</Typography>
                        <Typography><strong>Modelo: </strong> {item.Modelo}</Typography>
                        <Typography><strong>N° Serie: </strong> {item.nSerie}</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography><strong>Fecha Ingreso: </strong>{item.fIngreso}</Typography>
                        <Typography><strong>SS: </strong>{item.SS}</Typography>
                        <Typography><strong>Comentario Cliente: </strong>{item.cCliente}</Typography>

                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CardMedia
                            sx={{ height: '15vh',width:'15vw',margin:'1.5rem' }}
                            image="iconoSSMedical.png"
                            title="SSMedical"
                        />
                    </Grid>
                </Grid>

            ))
          
        }


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
                    <TextField name="DENDOSCOPIO" className='m2r' onChange={onChange} value={value} label={"DIAGNÓSTICO ENDOSCOPIO"} />
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
            <Button sx={{ float:'right' }} color='warning' onClick={guardarDiagnostico}>Agregar</Button>
        </Box>
      </Modal>
    
            <Table>      
                <TableRow  className='row-style'>
                    <TableCell variant="head">DIAGNÓSTICO ENDOSCOPIO</TableCell>
                    <TableCell variant="head">DETALLES</TableCell>
                    <TableCell variant="head">COMENTARIOS</TableCell>
                </TableRow>     
                
                    {
                        items.map(item =>(
                            <TableRow   key={item.id} className='row-style'>
                                <TableCell variant="head">{item.Dendoscopio}</TableCell>
                                <TableCell>{item.Detalles}</TableCell>
                                <TableCell>{item.Comentarios}</TableCell>
                            </TableRow>      
                        ))
                    }
                    
                    

                
            </Table>
            <Button sx={{ float:'right' }}>Informe Técnico</Button>
        </Grid>
    </Grid>


</ShopLayout>
  )
}

export default Index