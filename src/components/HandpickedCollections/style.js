import {Box, Paper, styled} from "@mui/material";


export const HandpickedCollectionsStyledPaper = styled(Paper)(({ theme }) => ({
    padding: '1rem',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '1rem',
}))

export const HandpickedCollectionsStyledBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap'
}))




