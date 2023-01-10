import { Box, Button, Grid, InputBase, Modal, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 850,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  interface datos{
    codigo:string,
    descripcion:string,
    precioUnitario:string,
    cantidad:string,
  }
const FacturaAcciones = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(!open);

    const { control, reset } = useForm();
    const [total, setTotal] = useState(0)
    const [data, setData] = useState<datos[]>([{codigo:'',descripcion:'',precioUnitario:'',cantidad:''}])
/*     useEffect(() => {
        setData(data.push({
            codigo:'PENTAX',
            descripcion:'Distal End Assy with CFB Original PENTAX',
            precioUnitario:'2750000',
            cantidad:'1'
        }))
        setData(data.push({
            codigo:'C210-U1010',
            descripcion:'Mano de obra reparación e instalacion de repuesto con personal certificado',
            precioUnitario:'950000',
            cantidad:'1'
        }))
      }, []); */

      useEffect(() => {
        let data = localStorage.getItem('Factura') ;

        if(data !== null){
          setData(JSON.parse(data));
          const totalPrice = JSON.parse(data).reduce((total:any, item:any) => total + item.cantidad*item.precioUnitario, 0);
          setTotal(totalPrice)
          
        }
      }, data);

    const guardarData=() =>{
        if(data){
            const codigo = document.querySelector("input[name='codigo']") as HTMLInputElement | {value:''}
            const descripcion = document.querySelector("input[name='desc']") as HTMLInputElement | {value:''}
            const precioUnitario = document.querySelector("input[name='precioUni']") as HTMLInputElement | {value:''}
            const cantidad = document.querySelector("input[name='Cantidad']") as HTMLInputElement | {value:''}
            if(codigo.value != ''){
                data.push({
                    codigo:codigo.value,
                    descripcion:descripcion.value,
                    cantidad:cantidad.value,
                    precioUnitario:precioUnitario.value
                })
                setData(data)
                localStorage.setItem('Factura', JSON.stringify(data));
                reset()
                handleClose()

            }
            const totalPrice = data.reduce((total:any, item:any) => total + item.cantidad*item.precioUnitario, 0);
            setTotal(totalPrice)

        }


    }
    const formatearMoneda = (moneda:number) =>{
        return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'CLP' }).format(moneda)
    }

  return (
    
    <Grid container>
        
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Grid container>
                <Grid item xs={3}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Codigo
                    </Typography>
                    <Controller
                        name={"codigo"}
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <TextField name="codigo" className='m2r' onChange={onChange} value={value} label={"Código"} />
                        )}
                    />

                    
                </Grid>
                <Grid item xs={3}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Descripción
                    </Typography>
                    <Controller
                        name={"desc"}
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <TextField name="desc" className='m2r' onChange={onChange} value={value} label={"Descripción"} />
                        )}
                    />


                </Grid>
                <Grid item xs={3}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Cantidad
                    </Typography>
                    <Controller
                        name={"Cantidad"}
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <InputBase  type='number' name="Cantidad" className='m2r' onChange={onChange} value={value}  />
                        )}
                    />


                </Grid>
                <Grid item xs={3}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    Precio Unitario
                    </Typography>
                    <Controller
                        name={"precioUni"}
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <TextField name="precioUni" className='m2r' onChange={onChange} value={value} label={"Precio Unitario"} />
                        )}
                    />


                </Grid>

                
                <Grid item xs={12}>
                    <Button onClick={guardarData} color='secondary' sx={{float:'right', margin:'1rem'}}>Guardar</Button>
                </Grid>
            </Grid>


        </Box>
        </Modal>
        
       
        {

            data ? data.map(item => (
                <Grid container key={item.codigo}>
                    <Grid item xs={3} className='box'>
                        <Typography key={item.codigo} margin={'1rem'}>{item.codigo}</Typography>
                    </Grid>
                    <Grid item xs={3} className='box'>
                        <Typography key={item.codigo} margin={'1rem'}>{item.descripcion}</Typography>
                    </Grid>
                    <Grid item xs={2} className='box'>
                        <Typography key={item.codigo} margin={'1rem'}>{item.cantidad}</Typography>
                    </Grid>
                    <Grid item xs={2} className='box'>
                        <Typography key={item.codigo} margin={'1rem'}>${formatearMoneda(Number(item.precioUnitario))}</Typography>
                    </Grid>
                    <Grid item xs={2} className='box'>
                        <Typography key={item.codigo} margin={'1rem'}>${formatearMoneda(Number(parseInt(item.cantidad)*parseInt(item.precioUnitario)))}</Typography>
                    </Grid>
                </Grid>

                
            )):''
        }
     
        <Grid item xs={12} className='espacio' />
        <Grid item xs={3} className='box'>
          <Box>
              <Typography margin={'1rem'}>Datos Pago</Typography>
          </Box>
        </Grid>
        <Grid item xs={5} className='box'>
          <Box>
              <Typography margin={'1rem'}>Banco ITAU Cuenta Corriente 224250437</Typography>
              <Typography margin={'1rem'}>Rut 77.591.147-6  S&S Medical Ltda</Typography>
          </Box>
        </Grid>
        <Grid item xs={4} className=''></Grid>

        

        <Grid item xs={3} className='box'>
          <Box>
              <Typography margin={'1rem'}>Notas</Typography>
          </Box>
        </Grid>
        <Grid item xs={5} className='box'>
          <Box>
              <Typography margin={'1rem'}>Cancelar con depósito, transferencia o tarjeta de crédito mediante link de pago WebPay</Typography>
              <Typography margin={'1rem'}>Vigencia de cotizacion por 15 días</Typography>
              <Typography margin={'1rem'}>Agradecemos enviar comprobante a isalas@ssmedical.cl</Typography>
              <Typography margin={'1rem'}>Plazo de entrega 30 dias habiles, con previa recepcion de OC</Typography>
          </Box>
        </Grid>
        <Grid item xs={4} className='box' container>
          <Grid item xs={6} className='box'>
              <Typography >Sub Total</Typography>
          </Grid>
          <Grid item xs={6} className='box'>
              <Typography >${formatearMoneda(Number(total))}</Typography>
          </Grid>
          <Grid item xs={6} className='box'>
              <Typography >Descuento</Typography>
          </Grid>
          <Grid item xs={6} className='box'>
              <Typography ></Typography>
          </Grid>
          <Grid item xs={6} className='box'>
              <Typography >Valor Neto </Typography>
          </Grid>
          <Grid item xs={6} className='box'>
              <Typography ></Typography>
          </Grid>
          <Grid item xs={6} className='box'>
              <Typography >Iva (19%)</Typography>
          </Grid>
          <Grid item xs={6} className='box'>
              <Typography > ${formatearMoneda(Number(Math.round(total*0.19)))} </Typography>
          </Grid>
          <Grid item xs={6} className='box'>
              <Typography >Valor Total</Typography>
          </Grid>
          <Grid item xs={6} className='box'>
              <Typography > ${formatearMoneda(Number(Math.round(total*0.19)+total))} </Typography>
          </Grid>

     
        </Grid>

        <Grid item xs={12} margin='1rem'>
            <Button color={'primary'} sx={{ float:'right' }} onClick={() =>handleClose()}>Agregar Diagnóstico</Button>
        </Grid>
        
    </Grid>
  )
}

export default FacturaAcciones