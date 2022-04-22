import React from 'react'
import { Link } from "react-router-dom"


function Menu() {
    return (
        <div>
            Menu
            <nav>
                <Link to='/'>Home</Link>
            </nav>
        </div>
    )
}

export default Menu