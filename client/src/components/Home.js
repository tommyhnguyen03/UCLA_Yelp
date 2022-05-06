import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    return (
        <div>
            UCLA Yelp
            <nav>
                <Link to='/menu'>Menu</Link>
                <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."/> </a>                
            </nav>
        </div>

    )
}

export default Home