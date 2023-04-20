import { Table, TableRow, TableCell, Grid, Typography, TextField, CardMedia, Button, Box, Modal, Checkbox } from '@mui/material';
import { typography } from '@mui/system';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { ShopLayout } from '../../components/layouts';
import { Cabezera } from '../../components/reparaciones';
import { InformeTecnico } from '../../components/reparaciones/InformeTecnico';
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
    const [actualizar, setActualizar] = useState(false)

    useEffect(() => {
        let items = localStorage.getItem('FDiagnostico') ;
        let infoCabezera = localStorage.getItem('InfoCabezera') ;
        if(items !== null){
          setItems(JSON.parse(items));
        }
        if(infoCabezera !== null){
            setInfoCabezera(JSON.parse(infoCabezera));
            
        }
    
      }, [actualizar]);

 

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

      

  return (
    <ShopLayout title={"S&S Medical"} pageDescription={"Reparaciones"} >
    <Grid container>
        <Cabezera />
  


        <Grid item xs={12}>
            
            <InformeTecnico />
            
        </Grid>
    </Grid>


</ShopLayout>
  )
}

export default Index