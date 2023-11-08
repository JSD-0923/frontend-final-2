import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {responsiveFontSizes, ThemeProvider} from "@mui/material";
import theme from "./MUI Themse/customTheme";

let responsiveTheme = responsiveFontSizes(theme);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={responsiveTheme}>
        <App />
    </ThemeProvider>
);

