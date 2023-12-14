import React from 'react'
import HandpickedCard from './HandpickedCard/HandpickedCard'
import { Box, Paper, Typography } from "@mui/material";
import { HandpickedCollectionsStyledBox, HandpickedCollectionsStyledPaper } from "./style";
import { useLandingProducts } from '../../../api/query'
import LoadingProgress from "../../Loading/LoadingProgress";
const HandpickedCollections = (props) => {

    const {innerRef} = props
    const { data: Handpicked, isLoading } = useLandingProducts('categories');
    let filteredHandpicked = []
    if (Handpicked) {
        filteredHandpicked = Handpicked.filter(item => {
            return item.name === "Handbags" || item.name === "Personal Care" || item.name === "Watches" || item.name === "Eye Wear";
        });
    }
    return (
        <Paper
            ref={innerRef}
            sx={HandpickedCollectionsStyledPaper}
        >
            {isLoading &&  <div>
                <LoadingProgress />
            </div>}
            <Typography
                component={'h2'}
                variant={'h2'}
                sx={{ marginLeft: '1rem', color: 'primary.contrastText', marginTop: '2rem', marginBottom: '2rem' }}
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