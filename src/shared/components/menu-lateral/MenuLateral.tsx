import { Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material";

import Motivea from "../menu-lateral/motivea.png";
import { Box } from "@mui/system";


interface IMenuLateralProps {
    children: React.ReactNode;
}
export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
    const theme = useTheme();

    return (
        <>
            <Drawer variant='permanent'>
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

                        </List>

                    </Box>


                </Box>
            </Drawer>
            <Box height="100vh" marginLeft={theme.spacing(28)}>
                {children}
            </Box>

        </>
    );

};