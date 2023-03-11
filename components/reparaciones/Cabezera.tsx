import { Grid, Typography, TextField, CardMedia, Button, Select, MenuItem, InputLabel } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

export const Cabezera = () => {

    const [infoCabezera, setInfoCabezera] = useState<any[]>([]);
    const [infoEmpresas, setInfoEmpresas] = useState<any[]>([]);
    const [ssListado, setssListado] = useState<any[]>([]);
    const [direccionEmpresa, setDireccionEmpresa] = useState('');
    const { reset, control } = useForm();
    
    useEffect(() => {
        let infoCabezera = localStorage.getItem('InfoCabezera') ;
        let infoEmpresas = localStorage.getItem('InfoEmpresas') ;
        let ssListado = localStorage.getItem('ssListado') ;
        
        if(infoCabezera !== null){
            setInfoCabezera(JSON.parse(infoCabezera));
        }
        if(infoEmpresas !== null){
            setInfoEmpresas(JSON.parse(infoEmpresas)); 
        }else{
            setInfoEmpresas(JSON.parse('[{"id" : "1","correo":"stendo@gemco.cl", "telefono":" +2 2172022","empresa":"GEMCO","nombre":"Gemco General Machinery S.A.","rut":"76.142.730-K","direccion":"Los Nidos 1212 Independencia","contacto":"Noranna Rodriguez","email":"marcia.p03@gmail.com","ciudad":"Santiago"}]'));
          }
        if(ssListado !== null){
            setssListado(JSON.parse(ssListado)); 

        }
    
      }, []);
      
      const guardarCabezaera = () => {

        const Cliente = document.querySelector("input[name='Empresa']") as HTMLInputElement | {value:''}
        const Direccion = document.querySelector("input[name='Direccion']") as HTMLInputElement | {value:''}
        const Modelo = document.querySelector("input[name='Modelo']") as HTMLInputElement | {value:''}
        const nSerie = document.querySelector("input[name='N°Serie']") as HTMLInputElement | {value:''}
        const fIngreso = document.querySelector("input[name='fechaIngreso']") as HTMLInputElement | {value:''}
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
            ssListado.push(infoCabezera)
            setssListado(ssListado)
            localStorage.setItem('ssListado', JSON.stringify(ssListado));
            setInfoCabezera(infoCabezera)
        }
      }
      const [empresaValue, setEmpresaValue] = useState('0')
      const eleccionEmpresa = (valor:any) =>{
        const Direccion = document.querySelector("input[name='Direccion']") as HTMLInputElement | {value:''}
        setEmpresaValue(valor.target.value)
        const objetoEmpresa = infoEmpresas.find(buscar => buscar.id == valor.target.value)
       
        console.log("objeto",objetoEmpresa.direccion)
        setDireccionEmpresa(objetoEmpresa.direccion)
        
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
            name={"Empresa"}
            control={control}
            render={({ field: { onChange, value } }) => (
                    <Select
                        name="Empresa"
                        value={empresaValue}
                        labelId="Empresa"
                        onChange={eleccionEmpresa}
                        sx={{ width:'80%',marginLeft:'8px' }}
                    > 
                    <MenuItem value='0'>Empresa</MenuItem>
                        {
                            infoEmpresas.map(item => (
                                <MenuItem key={item.id} value={item.id}>{item.empresa}</MenuItem>
            
                            ))
                        }
                    </Select>
            )}
        />
        <Controller
            name={"Direccion"}
            control={control}
            render={({ field: { onChange, value } }) => (
                <TextField name="Direccion" className='m2r' onChange={onChange} value={direccionEmpresa} label={"Direccion"} />
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
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                          className='m2r'
                          label="Fecha Ingreso"
                          value={value}
                          onChange={onChange}
                          
                          renderInput={(params) => <TextField name="fechaIngreso" id="fechaIngreso" className='m2r' {...params} />}
                      />
                      </LocalizationProvider>
                    )}
                  />
        <Controller
            name={"SS"}
            control={control}
            render={({ field: { onChange, value } }) => (
                <TextField disabled name="SS" className='m1r' value={ssListado.length} label={"SS"} />
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



