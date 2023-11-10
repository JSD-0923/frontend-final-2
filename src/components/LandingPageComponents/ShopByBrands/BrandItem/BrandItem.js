import React from 'react'
import {CardMedia} from "@mui/material";
import {BrandCard} from "./style";

const BrandItem = (props) => {

    const {brand} = props;

    if (!brand) {
        return <></>
    }
  return (
    <div>
        <BrandCard>
            <CardMedia
                component="img"
                image={require(`../../../../assets/brands/${brand.image}`)}
                style={{ width: '50%', height: 'auto' }}
            />
        </BrandCard>

    </div>
  )
}

export default BrandItem
