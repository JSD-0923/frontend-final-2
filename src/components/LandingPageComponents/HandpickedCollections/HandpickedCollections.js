import React from 'react'
import HandpickedCard from './HandpickedCard/HandpickedCard'
import {Box, Paper, Typography} from "@mui/material";
import {HandpickedCollectionsStyledBox, HandpickedCollectionsStyledPaper} from "./style";
import {HandpickedCollectionsData} from "./HandpickedCollectionsMock";
const HandpickedCollections = () => {


    return (

      <Paper sx={HandpickedCollectionsStyledPaper}>
          <Typography
              component={'h2'}
              variant={'h2'}
              sx={{margin: '1rem', color: 'primary.contrastText'}}
          >
              Handpicked Collections
          </Typography>
         <Box sx={HandpickedCollectionsStyledBox}>
             {HandpickedCollectionsData.map((item) =>
                 <HandpickedCard key={item.id} collection={item}/>
             )}

         </Box>
      </Paper>
  )
}

export default HandpickedCollections
