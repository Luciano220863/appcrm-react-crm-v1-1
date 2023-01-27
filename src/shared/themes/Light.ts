import { createTheme } from '@mui/material';


export const LightTheme = createTheme({
    palette: {
        primary: {
            main: '#00a199ff',
            contrastText: '#F5F5F5',
         },
        secondary: {
            main: '#1a4241ff',
            dark: '#98FB98',
            contrastText: '#F5F5F5',
        },
        background: {
            paper: '#1a4241ff',
            default: '#F5F5F5',
        }
    }

}
)