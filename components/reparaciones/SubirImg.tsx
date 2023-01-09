import { Modal, Box, Grid, Typography, TextField, Button, CardMedia, Card, CardActions, CardContent } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";


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
  titulo:string[],
  descripcion:string[],
  url:string[],
}

export const SubirImg = () => {
  const [open, setOpen] = useState(false);
  const { control, reset } = useForm();
  const handleOpen = () =>{

    
    return setOpen(true)

};
const handleClose = () => setOpen(false);
  const [items, setItems] = useState<datos>({titulo:[],descripcion:[],url:[]});


  useEffect(() => {
      let items = localStorage.getItem('InformeImg') ;

      if(items !== null){
        setItems(JSON.parse(JSON.parse(items)));
        
      }
    }, [items]);

  const [image, setImage] = useState<any>(null);
  const [createObjectURL, setCreateObjectURL] = useState<any>(null);

  const uploadToClient = (event:any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));

    }
  };

  const uploadToServer = async (event:any) => {        
    const body = new FormData();
    // console.log("file", image)
    if(image != null){
        body.append("file", image);    
        const titulo = document.querySelector("input[name='name']") as HTMLInputElement | {value:''}
        const descripcion = document.querySelector("input[name='desc']") as HTMLInputElement | {value:''}
        const url = `/uploads/${image.name}`
        if(titulo.value != ''){
          items.titulo.push(titulo.value)
          items.descripcion.push(descripcion.value)
        }
      

        items.url.push(url)
    
        console.log(items)
        localStorage.setItem('InformeImg', JSON.stringify(JSON.stringify(items)));
        setItems(items)
        reset()
        handleClose();
    }

    const response = await fetch("/api/subirImg", {
      method: "POST",
      body
    });
  };
  return (
    <Box textAlign={'center'}>
        <Typography>SET FOTOGRAFICO</Typography>
        <Button color={'primary'} sx={{ float:'right',margin:'1rem' }} onClick={() =>handleOpen()}>Agregar Reporte de Imagenes</Button>
        <Grid container spacing={2}>
        {
          items.titulo.map((itemTitulo,index) => (
           
              <Grid item key={index} xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={items.url[index]}
                      title={itemTitulo}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {itemTitulo}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {items.descripcion[index]}
                      </Typography>
                    </CardContent>
                    <CardActions>
                    <Link href={items.url[index]} passHref target={'_blank'}>
                      <Button size="small">Vista Ampliada</Button>
                    </Link>
                      
                    </CardActions>
                  </Card>
              </Grid>
              
          ))
        }
            <Grid xs={12} textAlign={'center'} display='block ruby'>
                <CardMedia
                      sx={{ height: '15vh',width:'15vw',marginTop:'2rem' }}
                      image='/firma.png'
                      title='Firma'
                />
                
            </Grid>
            <Grid xs={12} textAlign={'center'} display='block'>
              <Typography>S&S Medical Ltda. Av. Del Valle Sur 662 Oficina 203, Ciudad Empresarial, Huechuraba, Santiago</Typography>
            </Grid>
            <Grid item xs={12} textAlign={'right'} display='block'>
              <Link href='/reparaciones/Factura' passHref><Button color='primary'>Generar Factura</Button></Link>  
            </Grid>
        </Grid>
        
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <div>
                <Typography>Seleccionar una Imagen</Typography>
                <Controller
                        name={"name"}
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <TextField name="name" className='m2r' onChange={onChange} value={value} label={"Titulo"} />
                        )}
                    />
                    <Controller
                        name={"desc"}
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <TextField name="desc" className='m2r' onChange={onChange} value={value} label={"Descripcion"} />
                        )}
                    />
                <img width={'100%'} src={createObjectURL} />
                
                <input type="file" name="myImage" onChange={uploadToClient} />
                <Button
                    color="primary"
                    className="btn btn-primary"
                    type="submit"
                    onClick={uploadToServer}
                >
                    Subir
                </Button>
            </div>

        </Box>
        </Modal>
    </Box>
  )
}
