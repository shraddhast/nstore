import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography } from '@material-ui/core'

import Cards from './Cards'
import data from './CardData'

function CardRoot() {
    return (
        <div>
            <Typography>Popular Products</Typography>
            <Link to = "./" ><Typography>View all</Typography></Link>

            <Grid container>
                {
                    data && data.map((data) => (
                        <Grid item xs={12} sm={6} md={4} lg={4} spacing={2}>
                        <Cards data={data}/>
                        </Grid> ))
                }
            </Grid>

        </div>
    )
}

export default CardRoot
