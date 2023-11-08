import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography, useMediaQuery
} from "@mui/material";
// import { theme } from '../../MUI Themes/customTheme';
import  theme  from '../../MUI Themse/customTheme'
import FooterContainer from "./FooterContainer";


export default function Footer() {

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            {isSmallScreen ?  <AppBar position="relative" sx={{ top: 'auto', bottom: 0 }}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant={'titleMedium'} component={'h2'} color={'TypeLowEmphasis.main'}>More about CORA’L</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: 'primary.main'}}>
                        <FooterContainer />
                    </AccordionDetails>
                </Accordion>
            </AppBar> : <AppBar position="static" sx={{ top: 'auto', bottom: 0 }}> <FooterContainer /> </AppBar>}
        </>
    )
}
