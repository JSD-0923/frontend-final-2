import React from 'react'
import HandpickedCard from '../HandpickedCard/HandpickedCard'
import {Typography} from "@mui/material";
import {HandpickedCollectionsStyledBox, HandpickedCollectionsStyledPaper} from "./style";
import {HandpickedCollectionsData} from "./HandpickedCollectionsMock";
const HandpickedCollections = () => {


    return (

      <HandpickedCollectionsStyledPaper >
          <Typography
              component={'h2'}
              variant={'h2'}
              sx={{margin: '1rem', color: 'primary.contrastText'}}
          >
              Handpicked Collections
          </Typography>
         <HandpickedCollectionsStyledBox >
             {HandpickedCollectionsData.map((item) =>
                 <HandpickedCard key={item.id} collection={item}/>
             )}

         </HandpickedCollectionsStyledBox>
      </HandpickedCollectionsStyledPaper>
  )
}

export default HandpickedCollections
