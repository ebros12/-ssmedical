import { Grid, Typography, Box, Button } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { initialData } from '../../database/configuraciones'



export const InformeTecnico = () => {

    const data = initialData.products
    const defaultData = data.map(dataItem => {return {[dataItem.name]:''}})
    interface IFV {
        name:string
    }

    const { register,control } = useForm();

    const router = useRouter();

    const guardarDiagnostico = () =>{
        const direccion = '/reparaciones/Informe';
        const respuestas = document.querySelectorAll("input");
        const retorno:any = []
        if(respuestas){
            respuestas.forEach(node => { 
                if(node.checked){
                    retorno.push({
                        name:node.name,
                        value:node.value
                    })
                }
            })
        }
        
        localStorage.setItem('RespFDiagnostico', JSON.stringify(retorno));

        router.push(direccion)
    }

  return (
    <Grid container >
        <Grid item xs={12} md={12}>
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
        <Grid item xs={12} md={6}><Typography className="xlOnly" margin={'2rem 0rem'}>ESTADO</Typography></Grid>
            <Grid item xs={12} md={6}><Typography className="xlOnly" margin={'2rem 0rem'}>DETALLES</Typography></Grid>
        <Grid container overflow={'scroll'} height='35vh'>
            
            {
                
                data.map(itemData => (
                    <Box key={`${itemData.name}1`} display='contents'>
                    
                        <Grid key={`${itemData.name}2`} item xs={12} md={6} margin={'2rem 0rem'} className='boxEffect'>
                            <Typography className="smOnly">ESTADO</Typography>
                            <Controller
                                    
                                    name={itemData.name}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <Box sx={{ display:'flex' }} key={`${itemData.name}11`}>
                                            <Typography margin={"1rem"} width='6rem'>{itemData.name}</Typography>
                                            <input {...register(itemData.name)} type="radio" className="marginInput" value="OK" />
                                            <input {...register(itemData.name)} type="radio" className="marginInput" value="No Crítico" />
                                            <input {...register(itemData.name)} type="radio" className="marginInput" value="Crítico" />
                                            <input {...register(itemData.name)} type="radio" className="marginInput" value="Pedido Cliente" />
                                            <input {...register(itemData.name)} type="radio" className="marginInput" value="No Aplica" />
                                        </Box>

                                    )}
                                />
                        </Grid>
                        <Grid key={`${itemData.name}3`}  item xs={12} md={6} margin={'2rem 0rem'} className='boxEffect'>
                            <Typography className="smOnly" marginBottom={'1rem'}>DETALLES</Typography>
                                <Controller
                                   
                                    name={itemData.name}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <Box display={'flex'} padding={'2rem 0rem;'} key={`${itemData.name}111`}>
                                            {
                                                itemData.detalles.map(detalle => (
                                                    <Box  key={detalle}>
                                                        <input  {...register(detalle)} type="checkbox" value="Sin datos" /><Typography display={'contents'}>{detalle}</Typography>
                                                    </Box>
                                                ))
                                            }
                                            
                                        </Box>

                                    )}
                                />
                        </Grid>
                        
                    </Box>
                ))
            }
        </Grid>
        <Grid item xs={12}>
            <Button onClick={guardarDiagnostico} sx={{ float:'right' }}>Informe Técnico</Button>
        </Grid>
        
    </Grid>
  )
}
