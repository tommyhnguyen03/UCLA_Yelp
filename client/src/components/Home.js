import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import css from '../styles/Home.module.scss';

function Home() {
    return (
        <div id={css.Home}>
            UCLA Yelp
            <nav>
                <Link to='/menu'>Menu</Link>
            </nav>
        </div>

    )
}

export default Home