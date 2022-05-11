import { Typography, Button } from '@mui/material';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import css from '../styles/Home.module.scss';
import { useState } from "react"

function Home() {

    const [vote, setVote] = useState(0);


    const incrementVote = (e) => {
        e.preventDefault();
        setVote(vote + 1);
    }

    const decrementVote = (e) => {
        e.preventDefault();
        setVote(vote - 1);
    }

    return (
        <div id={css.Home}>
            UCLA Yelp
            <nav>
                <Link to='/menu'>Menu</Link>
            </nav>
            <Typography>
                BPlate
            </Typography>
            <Typography>{vote}</Typography>
            <Button onClick={incrementVote}>Up Vote</Button>
            <Button onClick={decrementVote}>Down Vote</Button>
            <Typography>
                Epicuria
            </Typography>
            <Button>Up Vote</Button>
            <Button>Down Vote</Button>
            <Typography>
                De Neve
            </Typography>
            <Button>Up Vote</Button>
            <Button>Down Vote</Button>
        </div >

    )
}

export default Home