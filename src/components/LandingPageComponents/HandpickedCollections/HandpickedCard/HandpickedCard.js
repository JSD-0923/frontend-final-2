import React from 'react'
import { Box, Card, CardMedia } from "@mui/material";
import { HandPickedBox, HandPickedCardStyle, HandPickedTypographyH2 } from "./style";
import { useNavigate } from 'react-router-dom';

const HandpickedCard = (props) => {
    const navigate = useNavigate();
    const { collection } = props


    if (!props) {
        return <></>
    }

    return (
        <div>
            <Card sx={HandPickedCardStyle} onClick={()=>navigate(`/products?categoryId=1&minRating=4.5&maxPrice=100`)}>
                <CardMedia
                    sx={{ height: '100%', width: 'cover' }}
                    component="img"
                    image={collection.image}
                />
                <Box sx={HandPickedBox}>
                    <HandPickedTypographyH2 component={"h2"}  >
                        {collection.name}

                    </HandPickedTypographyH2>
                </Box>
            </Card>
        </div>
    )
}

export default HandpickedCard
