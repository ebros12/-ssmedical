import { Box, Button, Grid, Modal, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import DoneAllIcon from '@mui/icons-material/DoneAll';

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
  interface datos{
    obs:string[],
    tRealizados:string[],
    tReparacion:string[],
  }

export const InformeForm = () => {
    const { control, reset } = useForm();
    const [open, setOpen] = useState(false);
    const [btnSelecct, setBtnSelecct] = useState('')
    const handleOpen = (opcion:any) =>{

        setBtnSelecct(opcion)
        return setOpen(true)

    };
    const handleClose = () => setOpen(false);

    const [items, setItems] = useState<datos>({obs:[],tRealizados:[],tReparacion:[]});

    useEffect(() => {
        let items = localStorage.getItem('Informe') ;

        if(items !== null){
          setItems(JSON.parse(JSON.parse(items)));
          
        }
      }, []);

      console.log(items);
      const guardar = () => {
        if(items){
            switch(btnSelecct){
                case 'obs':
                    const obs = document.querySelector("input[name='Observación']") as HTMLInputElement | {value:''}
                    if(obs.value != ''){
                        console.log(items)
                        items.obs.push(obs.value)
                        localStorage.setItem('Informe', JSON.stringify(JSON.stringify(items)));
                        setItems(items)
                        reset()
                    }
                break;
                case 'tRealizados':
                    const realizados = document.querySelector("input[name='Observación']") as HTMLInputElement | {value:''}
                    if(realizados.value != ''){
                        console.log(items)
                        items.tRealizados.push(realizados.value)
                        localStorage.setItem('Informe', JSON.stringify((JSON.stringify(items))));
                        setItems(items)
                        reset()
                    }
                break;
                case 'tReparacion':
                    const reparacion = document.querySelector("input[name='Observación']") as HTMLInputElement | {value:''}
                    if(reparacion.value != ''){
                        console.log(items)
                        items.tReparacion.push(reparacion.value)
                        localStorage.setItem('Informe', JSON.stringify((JSON.stringify(items))));
                        setItems(items)
                        reset()
                    }
                break;
            }
        }

        handleClose();
        

      }
      const borrarData = () => {
        localStorage.removeItem('Informe')
        let stringNull = JSON.stringify(JSON.stringify({obs:[],tRealizados:[],tReparacion:[]}))
        localStorage.setItem('Informe', stringNull);
        setItems({obs:[],tRealizados:[],tReparacion:[]})
      }

  return (
    <Grid container>
        <Button onClick={borrarData}>Borrar Todo</Button>
        <Grid item xs={12} textAlign='center'>
            <Typography>DIAGNÓSTICO DEL EQUIPO</Typography>
            <Box sx={{ textAlign:'left' }}>
               
                    {items.obs?items.obs.map(item =>(
                        <Typography key={item} margin={'1rem 0rem'}  component="p"><DoneAllIcon/>{item}</Typography>
                    )):''}
                
            </Box>

            <Button color={'primary'} sx={{ float:'right' }} onClick={() =>handleOpen('obs')}>Agregar Diagnóstico</Button>
        </Grid>
        <Grid item xs={12} textAlign='center'>
            <Typography>TRABAJOS REALIZADOS</Typography>
            <Box sx={{ textAlign:'left' }}>
                
                    {items.tRealizados?items.tRealizados.map(item =>(
                        <Typography key={item} margin={'1rem 0rem'}  component="p"><DoneAllIcon/>{item}</Typography>
                    )):''}
               
            </Box>

            <Button color={'primary'} sx={{ float:'right' }} onClick={() =>handleOpen('tRealizados')}>Agregar Trabajos</Button>
        </Grid>
        <Grid item xs={12} textAlign='center'>
            <Typography>TRABAJOS DE REPARACION</Typography>
            <Box sx={{ textAlign:'left' }}>
               
                    {items.tReparacion?items.tReparacion.map(item =>(
                        <Typography key={item} margin={'1rem 0rem'}  component="p"><DoneAllIcon/>{item}</Typography>
                    )):''}
                
            </Box>

            <Button color={'primary'} sx={{ float:'right' }} onClick={() =>handleOpen('tReparacion')}>Agregar Reparaciones</Button>
        </Grid>


        
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Ingrese Observación
                    </Typography>
                    <Controller
                        name={"Observación"}
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <TextField name="Observación" className='m2r' onChange={onChange} value={value} label={"Observación"} />
                        )}
                    />
                    
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={guardar} color='secondary' sx={{float:'right'}}>Guardar</Button>
                </Grid>
            </Grid>


        </Box>
        </Modal>
    </Grid>
  )
}
