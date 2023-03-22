import { useEffect, useState } from 'react';

import { Controller, useForm} from 'react-hook-form'
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';



const EmpresasAdmin = () => {

  const { reset, control } = useForm();
  const INITIAL_INFO_EMPRESAS = [{"id" : "1","correo":"stendo@gemco.cl", "telefono":" +2 2172022","empresa":"GEMCO","nombre":"Gemco General Machinery S.A.","rut":"76.142.730-K","direccion":"Los Nidos 1212 Independencia","contacto":"Noranna Rodriguez","email":"marcia.p03@gmail.com","ciudad":"Santiago"}];
  
  const [infoEmpresas, setInfoEmpresas] = useState<any[]>([]);
  const [nuevaEmpresa, setNuevaEmpresa] = useState(false);

  useEffect(() => {
    let infoEmpresas = localStorage.getItem('InfoEmpresas') ;

    if(infoEmpresas !== null){
      setInfoEmpresas(JSON.parse(infoEmpresas));
     
    }else{
      setInfoEmpresas(INITIAL_INFO_EMPRESAS);
    }

  }, [nuevaEmpresa]);



  const guardarEmpresa = () =>{
    const empresa = document.querySelector("input[name='Nombre']") as HTMLInputElement | {value:''}
    const nombre = document.querySelector("input[name='Nombre Empresa']") as HTMLInputElement | {value:''}
    const rut = document.querySelector("input[name='Rut']") as HTMLInputElement | {value:''}
    const direccion = document.querySelector("input[name='Direccion']") as HTMLInputElement | {value:''}
    const correo = document.querySelector("input[name='Email']") as HTMLInputElement | {value:''}
    const telefono = document.querySelector("input[name='Telefono']") as HTMLInputElement | {value:''}
    const ciudad = document.querySelector("input[name='Ciudad']") as HTMLInputElement | {value:''}
    const contacto = document.querySelector("input[name='Contacto']") as HTMLInputElement | {value:''}
    const email = document.querySelector("input[name='Correo Contacto']") as HTMLInputElement | {value:''}
    if(empresa.value != '' || nombre.value != ''){
      let auxEmpresas = {
        id:infoEmpresas.length+1,
        empresa: empresa.value,
        nombre: nombre.value,
        rut: rut.value,
        direccion: direccion.value,
        correo: correo.value,
        telefono: telefono.value,
        ciudad: ciudad.value,
        contacto: contacto.value,
        email: email.value,
        cliente:empresa.value
      }

      infoEmpresas.push(auxEmpresas)
      localStorage.setItem('InfoEmpresas', JSON.stringify(infoEmpresas));
      setInfoEmpresas(infoEmpresas)
      setNuevaEmpresa(!nuevaEmpresa)
    }
  }

  const eliminarEmpresa =(id : string) =>{
    const itemToRemove = infoEmpresas.find(item => item.id === id);
    const indexToRemove = infoEmpresas.indexOf(itemToRemove);
    if (indexToRemove > -1) {
      infoEmpresas.splice(indexToRemove, 1);
      localStorage.setItem('InfoEmpresas', JSON.stringify(infoEmpresas));
      setNuevaEmpresa(!nuevaEmpresa)
    }

  }
  return (
    <Grid container>
      <Grid item xs={6} mt={1} mb={1}>
        <Controller 
              name={"Nombre"}
              control={control}
              render={({ field: { onChange, value } }) => (
                  <TextField name="Nombre" className='m2r PCEmpresa' onChange={onChange} value={value} label={"Nombre"} />
              )}
          />
          <Controller 
              name={"Nombre Empresa"}
              control={control}
              render={({ field: { onChange, value } }) => (
                  <TextField name="Nombre Empresa" className='m2r PCEmpresa' onChange={onChange} value={value} label={"Nombre Empresa"} />
              )}
          />
          <Controller
              name={"Direccion"}
              control={control}
              render={({ field: { onChange, value } }) => (
                  <TextField name="Direccion" className='m2r PCEmpresa' onChange={onChange} value={value} label={"Direccion"} />
              )}
          />
          <Controller
              name={"Rut"}
              control={control}
              render={({ field: { onChange, value } }) => (
                  <TextField name="Rut" className='m2r PCEmpresa' onChange={onChange} value={value} label={"Rut"} />
              )}
          />
          <Controller
              name={"Email"}
              control={control}
              render={({ field: { onChange, value } }) => (
                  <TextField name="Email" className='m2r PCEmpresa' onChange={onChange} value={value} label={"Email"} />
              )}
          />

      </Grid>
      <Grid item xs={6}>
        <Controller
            name={"Telefono"}
            control={control}
            render={({ field: { onChange, value } }) => (
                <TextField name="Telefono" className='m2r PCEmpresa' onChange={onChange} value={value} label={"Telefono"} />
            )}
        />
        <Controller
            name={"Ciudad"}
            control={control}
            render={({ field: { onChange, value } }) => (
                <TextField name="Ciudad" className='m2r PCEmpresa' onChange={onChange} value={value} label={"Ciudad"} />
            )}
        />
        <Controller
            name={"Contacto"}
            control={control}
            render={({ field: { onChange, value } }) => (
                <TextField name="Contacto" className='m2r PCEmpresa' onChange={onChange} value={value} label={"Contacto"} />
            )}
        />
        <Controller
            name={"Correo Contacto"}
            control={control}
            render={({ field: { onChange, value } }) => (
                <TextField name="Correo Contacto" className='m2r PCEmpresa' onChange={onChange} value={value} label={"Correo Contacto"} />
            )}
        />
      </Grid>
      <Grid item xs={12}>
        <Button sx={{ float:'right' }} color='success' onClick={() => {guardarEmpresa()}}>Guardar</Button>
      </Grid>
      <Grid item xs={12}>
        
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
              <TableCell>Empresa</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Rut</TableCell>
              <TableCell>Direccion</TableCell>
              <TableCell>Email Empresa</TableCell>
              <TableCell>Telefono</TableCell>
              <TableCell>Ciudad</TableCell>
              <TableCell>Contacto</TableCell>
              <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      {
        infoEmpresas.map((item:any,key:any) => (
          <TableRow key={key}>
              <TableCell>{item.empresa}</TableCell>
              <TableCell>{item.nombre}</TableCell>
              <TableCell>{item.rut}</TableCell>
              <TableCell>{item.direccion}</TableCell>
              <TableCell>{item.correo}</TableCell>
              <TableCell>{item.telefono}</TableCell>
              <TableCell>{item.ciudad}</TableCell>
              <TableCell>{item.contacto}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell><Button onClick={() => {eliminarEmpresa(item.id)}}>X</Button></TableCell>
              
          </TableRow>
        ))
      }
      </TableBody>
        </Table>
  </TableContainer>
      </Grid>
      
    </Grid>
  )
}

export default EmpresasAdmin