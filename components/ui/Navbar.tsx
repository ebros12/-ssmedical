import NextLink from 'next/link';

import { AppBar, Toolbar, Typography, Box, Button, IconButton, Badge } from '@mui/material';
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { UiContext } from '../../context/ui/UiContext';
import { useContext } from 'react';

export const Navbar = () => {
    const { toggleSideMenu } = useContext(UiContext)
  return (
    <AppBar >
        <Toolbar >
            <NextLink href='/' passHref style={{ display:'flex',alignItems:'center' }}>
                <Typography variant='h6'>Teslo |</Typography>
                <Typography sx={{ ml:0.5 }}>Shop</Typography>
            </NextLink>

            <Box flex={1}/>

            <Box sx={{ display:{ xs: 'none', sm: 'block'  } }}>
                <NextLink href='/panel' passHref>
                    <Button>Panel de Control</Button>
                </NextLink>
                <NextLink href='/reparaciones' passHref>
                    <Button>Reparaciones</Button>
                </NextLink>
                <NextLink href='/' passHref>
                    <Button>Cotizaciones</Button>
                </NextLink>
            </Box>



            <Box flex={1}/>

{/*             <IconButton>
                <SearchOutlined/>
            </IconButton> */}

{/*             <NextLink href='/cart' passHref>
                <IconButton>
                    <Badge badgeContent={2} color="secondary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </IconButton>
            </NextLink> */}

            <Button onClick={toggleSideMenu}>
                Menú
            </Button>
        </Toolbar>
    </AppBar>
  )
}
