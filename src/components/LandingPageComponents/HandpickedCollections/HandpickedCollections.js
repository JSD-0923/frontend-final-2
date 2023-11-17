import React from 'react'
import HandpickedCard from './HandpickedCard/HandpickedCard'
import { Box, Paper, Typography } from "@mui/material";
import { HandpickedCollectionsStyledBox, HandpickedCollectionsStyledPaper } from "./style";
import { HandpickedCollectionsData } from "./HandpickedCollectionsMock";
import { useLandingProducts } from '../../../api/query'
const HandpickedCollections = () => {

    const { data: Handpicked, isLoading, isError } = useLandingProducts('categories');
    let filteredHandpicked = []
    if (Handpicked) {
        filteredHandpicked = Handpicked.filter(item => {
            return item.name === "Handbags" || item.name === "Personal Care" || item.name === "Watches" || item.name === "Eye Wear";
        });
    }
    return (
        <Paper sx={HandpickedCollectionsStyledPaper}>
            <Typography
                component={'h2'}
                variant={'h2'}
                sx={{ margin: '1rem', color: 'primary.contrastText' }}
            >
                Handpicked Collections
            </Typography>
            <Box sx={HandpickedCollectionsStyledBox}>
                {filteredHandpicked?.map((item) =>
                    <HandpickedCard key={item.id} collection={item} />
                )}

            </Box>
        </Paper>
    )
}

export default HandpickedCollections
