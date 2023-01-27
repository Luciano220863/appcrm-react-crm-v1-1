import { Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";

import Motivea from "../menu-lateral/motivea.png";
import { Box } from "@mui/system";
import { useDrawerContext } from "../../contexts";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";


interface IMenuLateralProps {
    children: React.ReactNode;
}

interface IListItemLinkProps {
    to: string;
    icon: string;
    label: string;
    onClick: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClick }) => {
    const navigate = useNavigate();

    const resolvedPath = useResolvedPath(to);
    const match = useMatch({ path: resolvedPath.pathname, end: false });

    const handleClick = () => {
        navigate(to);
        onClick?.();
    };

    return (
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    );
};


export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();

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
                            {drawerOptions.map(drawerOption => (
                                <ListItemLink
                                    icon={drawerOption.icon}
                                    to='/pagina-inicial'
                                    label='Página inicial'
                                    onClick={smDown ? toggleDrawerOpen : undefined}
                                />
                            ))}
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