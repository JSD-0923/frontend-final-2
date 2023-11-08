import React from 'react'
import {CardMedia} from "@mui/material";
import {HandPickedBox, HandPickedCard, HandPickedTypographyH2} from "./style";

const HandpickedCard = (props) => {

    const {collection} = props


    if (!props) {
        return <></>
    }

  return (
    <div>
            <HandPickedCard>
                <CardMedia
                    sx={{ height: '100%', width: 'cover' }}
                    component="img"
                    image={require(`../../${collection.image}`)}
                />
                <HandPickedBox>
                    <HandPickedTypographyH2 component={"h2"}  >
                        {collection.title}
                    </HandPickedTypographyH2>
                </HandPickedBox>
            </HandPickedCard>
    </div>
  )
}

export default HandpickedCard
