import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import {Avatar, Grid, Rating} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import {MainReviewCardStyle, userInfoCardStyle} from "./style";
import Box from "@mui/material/Box";

 const ReviewCard = (props) => {

     const {reviews} = props

    return (
       <>
           {
               reviews.map((review, index) => {
                   return (
                           <Grid key={Math.random()}  item xs={12} sm={6} md={4} lg={4}>
                               <Card key={index} sx={MainReviewCardStyle}>

                                   <Grid container spacing={1}>
                                       <Grid item xs={12} sx={{marginTop: '1rem', marginLeft: '1rem'}}>
                                               <Rating name="half-rating-read"
                                                       defaultValue={2.5}
                                                       precision={0.5}
                                                       value={review.rating}
                                                       readOnly
                                                       emptyIcon={<StarIcon style={{ color: '#FFFFFF' }} fontSize="inherit" />}
                                               />
                                       </Grid>
                                       <Grid item xs={12} md={5} lg={4}>
                                           <Box sx={userInfoCardStyle}>
                                               <Avatar sx={{borderRadius: '8px', marginBottom: '5px'}} variant="square" src={review.user_image}/>
                                               <Typography noWrap sx={{fontSize: '12px', color: 'primary.main', fontWeight: 600}} component={'h2'}>{review.creator ? review.creator : 'User'}</Typography>
                                               <Typography sx={{fontSize: '12px', color: 'lightText.dark', fontWeight: 400}} component={'h2'}>{review.created_at}</Typography>
                                           </Box>
                                       </Grid>
                                       <Grid item xs={12} md={7} lg={7}>
                                           {review.review.length > 0 &&
                                                   <Typography paragraph sx={{color: 'primary.contrastText', height:'40%', marginLeft: '1rem', marginRight: '1rem', '@media (min-width: 600px)': { marginTop:'1rem'},}} variant="body2">
                                                       {`"${review.review}"`}
                                                   </Typography>
                                           }
                                       </Grid>
                                   </Grid>

                               </Card>
                           </Grid>

                   )
               })
           }
       </>
    );
}

export default ReviewCard;


