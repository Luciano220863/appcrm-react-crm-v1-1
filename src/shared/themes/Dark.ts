import { createTheme } from '@mui/material';
import { green } from '@mui/material/colors';

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: green[700],
            dark: green[800],
            light: green[500],
            contrastText: '#ffffff',
        },
        secondary: {
            main: green[100],
            dark: green[400],
            light: green[900],
            contrastText: '#ffffff',
        },
        background: {
            paper: '#00a199ff', 
            default: '#1a4241ff',
        }
    }

}
)