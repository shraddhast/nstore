import React from 'react'
import Rating from '@material-ui/lab/Rating';
import {Card, CardActionArea,CardMedia, Typography, Button, CardContent} from "@material-ui/core"

import CardStyles from './CardStyles'

function Cards(props) {
    const classes = CardStyles()
    const { image, description, price, rating}= props.data
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media}image={image}/>
                    <CardContent>
                    <Typography variant="p">
                        {description}
                    </Typography>
                    <Typography className={price}>
                        {price}
                    </Typography>
                    </CardContent>
                </CardActionArea>

                    <Typography> <Button className={classes.addFeedback}> Add Feedback</Button></Typography>
                    <Typography><Rating name="half-rating-read" defaultValue={rating} readOnly/></Typography>

            </Card>
        </div>
    )
}

export default Cards
