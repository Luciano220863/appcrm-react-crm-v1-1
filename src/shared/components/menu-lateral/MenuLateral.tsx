import { Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";

import Motivea from "../menu-lateral/motivea.png";
import { Box } from "@mui/system";
import { useDrawerContext  } from "../../contexts";


interface IMenuLateralProps {
    children: React.ReactNode;
}
export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

    return (
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
                    <Box width="100%" height={theme.spacing(10)} display="flex" alignItems="center" justifyContent="center">
                        <img src={Motivea} width="155px" height="40px" alt="motive.png" />
                    </Box>
                    <Divider />

                    <Box flex={1}>
                        <List component="nav">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Página inicial" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>personal</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Clientes" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>microphone</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Palestrantes" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>FaFileContract</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Palestrantes" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>microphone</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Palestrantes" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon></Icon>
                                </ListItemIcon>
                                <ListItemText primary="Contato" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>dashboard</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Sistema CRM" />
                            </ListItemButton>


                        </List>

                    </Box>


                </Box>
            </Drawer>
            <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>

        </>
    );

};