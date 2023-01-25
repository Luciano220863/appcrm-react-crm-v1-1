import { createTheme } from '@mui/material';


export const LightTheme = createTheme({
    palette: {
        primary: {
            main: '#00a199ff',
            contrastText: '#fff',
         },
        secondary: {
            main: '#1a4241ff',
            contrastText: '#fff',
        },
        background: {
            paper: '#1a4241ff',
            default: '#ffff',
        }
    }

}
)