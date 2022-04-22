import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    return (
        <div>
            UCLA Yelp
            <nav>
                <Link to='/menu'>Menu</Link>
            </nav>
        </div>

    )
}

export default Home