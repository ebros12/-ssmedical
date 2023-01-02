import { Box, Divider, Drawer, IconButton, Input, InputAdornment, Link, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { AccountCircleOutlined, AdminPanelSettings, CategoryOutlined, ConfirmationNumberOutlined, EscalatorWarningOutlined, FemaleOutlined, LoginOutlined, MaleOutlined, SearchOutlined, VpnKeyOutlined } from "@mui/icons-material"
import { useContext } from "react"
import { UiContext } from "../../context"
import { useRouter } from "next/router"


export const SideMenu = () => {
    const router = useRouter()
    const { toggleSideMenu,isMenuOpen } = useContext(UiContext)
    const navigateTo = (url:string) => {
        toggleSideMenu();
        router.push(url)
    }
  return (
    
    <Drawer
        open={ isMenuOpen }
        anchor='right'
        sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
        onClose={ toggleSideMenu }
    >
        <Box sx={{ width: 250, paddingTop: 5 }}>
            
            <List>



                <ListItemButton >
                    <ListItemIcon>
                        <AccountCircleOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Panel de Control'} onClick={() => navigateTo('/panel')}/>
                </ListItemButton>

                <ListItemButton >
                    <ListItemIcon>
                        <ConfirmationNumberOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Reparaciones'} onClick={() => navigateTo('/reparaciones')}/>
                </ListItemButton>
                
           
                <ListItemButton >
                    <ListItemIcon>
                        <ConfirmationNumberOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Cotizaciones'}  onClick={() => navigateTo('/')}/>
                </ListItemButton>
 
            </List>
        </Box>
    </Drawer>
  )
}