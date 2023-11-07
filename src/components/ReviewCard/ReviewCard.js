import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Avatar, Grid, Rating} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import {MainReviewCardStyle, userInfoCardStyle} from "./style";

 const ReviewCard = (props) => {

     const {reviews} = props
     console.log(reviews)
    return (
       <>
           {
               reviews.map(review => {
                   return (
                       <>
                           <Grid item xs={12} sm={6} md={4} lg={4}>
                               <Card sx={MainReviewCardStyle}>

                                   {review.review.length > 0 &&
                                       <CardContent >
                                           <Typography paragraph sx={{color: 'primary.contrastText', height:'40%', marginTop: '10%'}} variant="body2">
                                               {`"${review.review}"`}
                                           </Typography>
                                       </CardContent>
                                   }
                                   <CardContent>
                                       <Rating name="half-rating-read"
                                               defaultValue={2.5}
                                               precision={0.5}
                                               value={review.rating}
                                               readOnly
                                               sx={{position: 'absolute',
                                                   top: '40%',
                                                   left: '5%',}}
                                               emptyIcon={<StarIcon style={{ color: '#FFFFFF' }} fontSize="inherit" />}
                                       />
                                   </CardContent>
                                   <CardContent sx={userInfoCardStyle}>
                                       <Avatar sx={{borderRadius: '8px', marginBottom: '5px'}} variant="square" src={review.user_image}/>
                                       <Typography noWrap sx={{fontSize: '12px', color: 'primary.main', fontWeight: 600}} component={'h2'}>{review.creator ? review.creator : 'User'}</Typography>
                                       <Typography sx={{fontSize: '12px', color: 'lightText.dark', fontWeight: 400,  position: 'absolute', top: '70%', left: '10%',}} component={'h2'}>{review.created_at}</Typography>
                                   </CardContent>
                               </Card>
                           </Grid>
                       </>
                   )
               })
           }
       </>
    );
}

export default ReviewCard;


