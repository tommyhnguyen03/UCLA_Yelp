import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Menu() {

    return (
        <div>
            Menu
            <nav>
                <Link to='/'>Landing</Link>
                <Link to='/home'>Home</Link>
                <Link to='/deneve'>De Neve</Link>
                <Link to='/bplate'>BPlate</Link>
                <Link to='/epicuria'>Epicuria</Link>
            </nav>
        </div>
    )
}

export default Menu