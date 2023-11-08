import {createTheme} from "@mui/material";


 let theme = createTheme({
    palette: {
        
        darkTeal:{
            main: '#17494D',
            light: '#237076',
            dark: '#12383b',
            contrastText: '#FFFFFF',
        },
        primary: {
            main: '#1B4B66',
            light: '#25678d',
            dark: '#102c3c',
            contrastText: '#FFFFFF',
        },
        primaryTint: {
            main: '#639599',
            light: '#579da2',
            dark: '#6a8d90',
            contrastText: '#FFFFFF',
        },
        error: {
            main: '#B00020',
            light: '#ef5350',
            dark: '#c62828',
            contrastText: '#FFFFFF',
        },
        accent: {
            main: '#F4F4F4',
            light: '#ffffff',
            dark: '#cccccc',
            contrastText: '#1a1a1a',
        },
        cc: {
            main: '#17494D',
            light: '#ffffff',
            dark: '#cccccc',
            contrastText: '#1a1a1a',
        },
        dark: {
            main: '#13101E',
            light: '#201b32',
            dark: '#000000',
            contrastText: '#FFFFFF',
        },
        bright: {
            main: '#FFFFFF',
            light: '#FFFFFF',
            dark: '#e6e6e6',
            contrastText: '#000000',
        },
        grey: {
            main: '#F1F1F1',
            light: '#ffffff',
            dark: '#d9d9d9',
            contrastText: '#000000',
        },
        lightText: {
            main: '#B6B6B6',
            light: '#cccccc',
            dark: '#a6a6a6',
            contrastText: '#FFFFFF',
        },
        TypeHighEmphasis: {
            main: '#171520',
            light: '#2c283e',
            dark: '#000000',
            contrastText: '#FFFFFF',
        },
        TypeLowEmphasis: {
            main: '#626262',
            light: '#737373',
            dark: '#4d4d4d',
            contrastText: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
        displayLarge: {
            fontSize: '40px',
            fontWeight: 700,
            fontFamily: 'Inter',
            lineHeight: '52px'
        },
        displayMedium: {
            fontSize: '34px',
            fontWeight: 600,
            fontFamily: 'Inter',
            lineHeight: '44px'
        },
        displaySmall: {
            fontSize: '20px',
            fontWeight: 600,
            fontFamily: 'Inter',
            lineHeight: '26px'
        },
        titleMedium: {
            fontSize: '14px',
            fontWeight: 500,
            fontFamily: 'Inter',
            lineHeight: '18px'
        },
        titleRegular: {
            fontSize: '14px',
            fontWeight: 600,
            fontFamily: 'Inter',
            lineHeight: '16px'
        },
        bodyMedium: {
            fontSize: '16px',
            fontWeight: 600,
            fontFamily: 'Inter',
            lineHeight: '20px'
        },
        bodyRegular: {
            fontSize: '16px',
            fontWeight: 400,
            fontFamily: 'Inter',
            lineHeight: '20px'
        },
        labelLarge: {
            fontSize: '14px',
            fontWeight: 400,
            fontFamily: 'Inter',
            lineHeight: '20px'
        },
        labelMedium: {
            fontSize: '12px',
            fontWeight: 400,
            fontFamily: 'Inter',
            lineHeight: '16px'
        },
        labelSmall: {
            fontSize: '12px',
            fontWeight: 600,
            fontFamily: 'Inter',
            lineHeight: '16px'
        },
        link: {
            fontSize: '12px',
            fontWeight: 500,
            fontFamily: 'Inter',
            lineHeight: '18px'
        },
    },

});


theme = createTheme(theme, {
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderWidth: '2px',
                    borderRadius: '8px'
                },
            },
        },
        MuiTab: {
            styleOverrides : {
                root: {
                    textTransform: 'none',
                    '&.Mui-selected' : {
                        backgroundColor:  theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        margin: '1rem',
                        borderRadius: '12px',
                    },
                },
            }

        }
    },
});

export default theme;
