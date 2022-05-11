import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Grid, Card, CardContent, Typography } from '@mui/material'
import css from "../styles/DiningHall.module.scss"

function BPlate() {
    return (
        <div>BPlate
            <Link to='/menu'>Menu</Link>
            <Grid container spacing={5} align="center">
                <Grid item sm={4} m={4}>
                    <Card className={css.Card}>
                        <CardContent>
                            <Typography>
                                Food
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={4} m={4}>
                    <Card className={css.Card}>
                        <CardContent>
                            <Typography>
                                Food
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={4} m={4}>
                    <Card className={css.Card}>
                        <CardContent>
                            <Typography>
                                Food
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default BPlate