import React from 'react'
import {Box, Card, CardMedia} from "@mui/material";
import {HandPickedBox, HandPickedCardStyle, HandPickedTypographyH2} from "./style";

const HandpickedCard = (props) => {

    const {collection} = props


    if (!props) {
        return <></>
    }

  return (
    <div>
            <Card sx={HandPickedCardStyle}>
                <CardMedia
                    sx={{ height: '100%', width: 'cover' }}
                    component="img"
                    image={require(`../../../../assets/HandpickedCard/${collection.image}`)}
                />
                <Box sx={HandPickedBox}>
                    <HandPickedTypographyH2 component={"h2"}  >
                        {collection.title}
                    </HandPickedTypographyH2>
                </Box>
            </Card>
    </div>
  )
}

export default HandpickedCard
