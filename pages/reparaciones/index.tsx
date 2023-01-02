import { Table, TableRow, TableCell, Grid, Typography, TextField, CardMedia, Button, Box, Modal, Checkbox } from '@mui/material';
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
    const [state, setState] = React.useState({
        VerificacionID: true,
        jason: false,
        antoine: false,
      });
      const { register, handleSubmit } = useForm({
        defaultValues: {
          firstName: '',
          lastName: '',
          category: '',
          checkbox: [],
          radio: ''
        }
      });
    const { VerificacionID, jason, antoine } = state;
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
    
      }, infoCabezera);

      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };

      const guardarCabezaera = () => {
        const Cliente = document.querySelector("input[name='Cliente']") as HTMLInputElement | {value:''}
        const Direccion = document.querySelector("input[name='Direccion']") as HTMLInputElement | {value:''}
        const Modelo = document.querySelector("input[name='Modelo']") as HTMLInputElement | {value:''}
        const nSerie = document.querySelector("input[name='N°Serie']") as HTMLInputElement | {value:''}
        const fIngreso = document.querySelector("input[name='Fecha Ingreso']") as HTMLInputElement | {value:''}
        const SS = document.querySelector("input[name='SS']") as HTMLInputElement | {value:''}
        const cCliente = document.querySelector("input[name='Comentario Cliente']") as HTMLInputElement | {value:''}
        if(Cliente.value != '' || Modelo.value != ''){
            let auxCabezera = {
                Cliente:Cliente.value,
                Direccion:Direccion.value,
                Modelo:Modelo.value,
                nSerie:nSerie.value,
                fIngreso:fIngreso.value,
                SS:SS.value,
                cCliente:cCliente.value,
            }
            infoCabezera.push(auxCabezera);
            localStorage.setItem('InfoCabezera', JSON.stringify(infoCabezera));
            setInfoCabezera(infoCabezera)
        }
      }
      const guardarDiagnostico = () => {
        const Dendoscopio = document.querySelector("input[name='DENDOSCOPIO']") as HTMLInputElement | {value:''}
        const Detalles = document.querySelector("input[name='DETALLES']") as HTMLInputElement | {value:''}
        const Comentarios = document.querySelector("input[name='COMENTARIOS']") as HTMLInputElement | {value:''}


        
        if(Dendoscopio.value != '' || Detalles.value != ''){
        
            let aux = {
              id:items.length+1,
              Dendoscopio:Dendoscopio.value,
              Detalles:Detalles.value,
              Comentarios:Comentarios.value,


            }


            items.push(aux)
            
           
            localStorage.setItem('FDiagnostico', JSON.stringify(items));
           
            handleClose()
        }else{
            alert('uff')
          }

      }
      const borrarTodo = () =>{
        localStorage.removeItem('FDiagnostico');
        localStorage.removeItem('InfoCabezera');
        setItems([])
        setInfoCabezera([])
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
            {
                infoCabezera.length === 0?<Button sx={{ float:'right'  }} color='success' onClick={guardarCabezaera}>Guardar Informacion del cliente</Button>:''
            }
        
        <hr style={{ margin:'3rem 0rem' }}/>
        
        <Button sx={{ float:'right' }} onClick={handleOpen}>Agregar Diagnóstico</Button>
        <Button sx={{ float:'right' }} onClick={borrarTodo}>borrar todo</Button>
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
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Typography >DIAGNÓSTICO ENDOSCOPIO</Typography>
                    
                    <Box display={'flex'} marginBottom='2rem'>
                        <Typography sx={{ marginTop:'4rem',position: 'relative',top:'2rem' }}>Estados </Typography>
                        <Typography  className='text90deg'>OK</Typography>
                        <Typography  className='text90deg'>No Crítico</Typography>
                        <Typography  className='text90deg'>Crítico</Typography>
                        <Typography  className='text90deg'>Pedido Cliente</Typography>
                        <Typography  className='text90deg'>No Aplica</Typography>
                    </Box>


                </Grid>
                <Grid item xs={12} md={6}></Grid>

                <Grid item xs={12} md={6} margin={'2rem 0rem'} className='boxEffect'>
                <Typography >ESTADO</Typography>
                <Controller
                        name={"VerificacionID"}
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Box sx={{ display:'flex' }}>
                                <Typography margin={"1rem"}>Verificación ID</Typography>
                                <input {...register("VerificacionID")} type="radio" className="marginInput" value="OK" />
                                <input {...register("VerificacionID")} type="radio" className="marginInput" value="No Crítico" />
                                <input {...register("VerificacionID")} type="radio" className="marginInput" value="Crítico" />
                                <input {...register("VerificacionID")} type="radio" className="marginInput" value="Pedido Cliente" />
                                <input {...register("VerificacionID")} type="radio" className="marginInput" value="No Aplica" />
                            </Box>

                        )}
                    />
                </Grid>

                <Grid item xs={12} md={6} margin={'2rem 0rem'} className='boxEffect'>
                <Typography marginBottom={'1rem'}>DETALLES</Typography>
                    <Controller
                        name={"VerificacionIDDetalles"}
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Box>
                                <input {...register("VerificacionIDDetalles")} type="radio" value="Sin datos" />Sin datos
                                <input {...register("VerificacionIDDetalles")} type="radio" value="Error  datos" />Error  datos
                                <input {...register("VerificacionIDDetalles")} type="radio" value="Sin transmisión" />Sin transmisión
                            </Box>

                        )}
                    />
                </Grid>

                <Grid item xs={12} md={6} margin={'2rem 0rem'} className='boxEffect'>
                <Typography >ESTADO</Typography>
                <Controller
                        name={"VerificacionID"}
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Box sx={{ display:'flex' }}>
                                <Typography margin={"1rem"}>Verificación ID</Typography>
                                <input {...register("VerificacionID")} type="radio" className="marginInput" value="OK" />
                                <input {...register("VerificacionID")} type="radio" className="marginInput" value="No Crítico" />
                                <input {...register("VerificacionID")} type="radio" className="marginInput" value="Crítico" />
                                <input {...register("VerificacionID")} type="radio" className="marginInput" value="Pedido Cliente" />
                                <input {...register("VerificacionID")} type="radio" className="marginInput" value="No Aplica" />
                            </Box>

                        )}
                    />
                </Grid>

                <Grid item xs={12} md={6} margin={'2rem 0rem'} className='boxEffect'>
                <Typography marginBottom={'1rem'}>DETALLES</Typography>
                    <Controller
                        name={"VerificacionIDDetalles"}
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Box>
                                <input {...register("VerificacionIDDetalles")} type="radio" value="Sin datos" />Sin datos
                                <input {...register("VerificacionIDDetalles")} type="radio" value="Error  datos" />Error  datos
                                <input {...register("VerificacionIDDetalles")} type="radio" value="Sin transmisión" />Sin transmisión
                            </Box>

                        )}
                    />
                </Grid>
            </Grid>

            <Button sx={{ float:'right' }}>Informe Técnico</Button>
        </Grid>
    </Grid>


</ShopLayout>
  )
}

export default Index