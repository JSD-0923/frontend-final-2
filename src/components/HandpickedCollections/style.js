import {Box, Paper, styled} from "@mui/material";


export const HandpickedCollectionsStyledPaper = styled(Paper)(({ theme }) => ({
    width: '100%',
    padding: '1rem',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}))

export const HandpickedCollectionsStyledBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap'
}))




