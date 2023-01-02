import { Grid, Typography, Box } from '@mui/material'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { initialData } from '../../database/configuraciones'



export const InformeTecnico = () => {

    const data = initialData.products
    const defaultData = data.map(dataItem => {return {[dataItem.name]:''}})
    interface IFV {
        name:string
    }
    console.log(defaultData);
    const { register,control } = useForm();

  return (
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
        <Grid item xs={12} md={6}><Typography className="xlOnly" margin={'2rem 0rem'}>ESTADO</Typography></Grid>
        <Grid item xs={12} md={6}><Typography className="xlOnly" margin={'2rem 0rem'}>DETALLES</Typography></Grid>
        
        {
            
            data.map(itemData => (
                <>
                
                    <Grid item xs={12} md={6} margin={'2rem 0rem'} className='boxEffect'>
                        <Typography className="smOnly">ESTADO</Typography>
                        <Controller
                                name={itemData.name}
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <Box sx={{ display:'flex' }}>
                                        <Typography margin={"1rem"}>{itemData.name}</Typography>
                                        <input {...register(itemData.name)} type="radio" className="marginInput" value="OK" />
                                        <input {...register(itemData.name)} type="radio" className="marginInput" value="No Crítico" />
                                        <input {...register(itemData.name)} type="radio" className="marginInput" value="Crítico" />
                                        <input {...register(itemData.name)} type="radio" className="marginInput" value="Pedido Cliente" />
                                        <input {...register(itemData.name)} type="radio" className="marginInput" value="No Aplica" />
                                    </Box>

                                )}
                            />
                    </Grid>
                    <Grid item xs={12} md={6} margin={'2rem 0rem'} className='boxEffect'>
                        <Typography className="smOnly" marginBottom={'1rem'}>DETALLES</Typography>
                            <Controller
                                name={itemData.name}
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <Box>
                                        {
                                            itemData.detalles.map(detalle => (
                                                <>
                                                    <input {...register(detalle)} type="checkbox" value="Sin datos" />{detalle}
                                                </>
                                            ))
                                        }
                                        
                                    </Box>

                                )}
                            />
                    </Grid>
                </>
            ))
        }

    </Grid>
  )
}
