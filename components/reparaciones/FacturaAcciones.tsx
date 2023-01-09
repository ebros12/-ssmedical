import { Grid, Typography } from '@mui/material'
import React from 'react'

const FacturaAcciones = () => {
    const codigo = ['PENTAX','C210-U1010']
    const desc = ['Distal End Assy with CFB Original PENTAX','Mano de obra reparación e instalacion de repuesto con personal certificado.']
    const cant = ['1','1']
    const precUni = ['$2,750,000','950000']
    const precTotal = ['$2,750,000','950000']
  return (
    <Grid container>
        <Grid item xs={3} className='box'>
        {
            codigo.map(item => (
                
                    <Typography key={item} margin={'1rem'}>{item}</Typography>
                
            ))
        }
        </Grid>
        <Grid item xs={3} className='box'>
        {
            desc.map(item2 => (
                
                    <Typography key={item2} margin={'1rem'}>{item2}</Typography>
                
            ))
        }
        </Grid>
        <Grid item xs={2} className='box'>
                {
            cant.map(item3 => (
                
                    <Typography key={item3} margin={'1rem'}>{item3}</Typography>
                
            ))
        }
        </Grid>
        <Grid item xs={2} className='box'>
        {
            precUni.map(item4 => (
                
                    <Typography key={item4} margin={'1rem'}>{item4}</Typography>
                
            ))
        }
        </Grid>
        <Grid item xs={2} className='box'>
        {
            precTotal.map(item4 => (
                
                    <Typography key={item4} margin={'1rem'}>{item4}</Typography>
                
            ))
        }
        </Grid>
    </Grid>
  )
}

export default FacturaAcciones