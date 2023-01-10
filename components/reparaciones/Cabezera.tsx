import { Grid, Typography, TextField, CardMedia, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

export const Cabezera = () => {
    
    const [infoCabezera, setInfoCabezera] = useState<any[]>([]);
    const { reset, control } = useForm();
    
    useEffect(() => {
        let infoCabezera = localStorage.getItem('InfoCabezera') ;
        if(infoCabezera !== null){
            setInfoCabezera(JSON.parse(infoCabezera));
            
        }
    
      }, []);
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

  return (
    <>
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
            image="/iconoSSMedical.png"
            title="SSMedical"
        />
    </Grid>

    </Grid>)
    : infoCabezera.map(item => (
        <Grid container key={`${item.id}1`}>
            <Grid item xs={12} md={4} key={`${item.id}2`}>
                <Typography><strong>Cliente: </strong> {item.Cliente}</Typography>
                <Typography><strong>Direccion: </strong> {item.Direccion}</Typography>
                <Typography><strong>Modelo: </strong> {item.Modelo}</Typography>
                <Typography><strong>N° Serie: </strong> {item.nSerie}</Typography>
            </Grid>
            <Grid item xs={12} md={4} key={`${item.id}3`}>
                <Typography><strong>Fecha Ingreso: </strong>{item.fIngreso}</Typography>
                <Typography><strong>SS: </strong>{item.SS}</Typography>
                <Typography><strong>Comentario Cliente: </strong>{item.cCliente}</Typography>

            </Grid>
            <Grid item xs={12} md={4} key={`${item.id}4`}> 
                <CardMedia
                    sx={{ height: '15vh',width:'15vw',margin:'1.5rem' }}
                    image="/iconoSSMedical.png"
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
            </Grid>
            <hr style={{ margin:'3rem 0rem' }}/>
    </>

  )
}



