import { createTheme } from '@mui/material';

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: '#1a4241ff',
            contrastText: '#fff',
        },
        secondary: {
            main: '#00a199ff',
            contrastText: '#fff',
        },
        background: {
            paper: '#00a199ff',
            default: '#d3d3d3',
        }
    }

}
)