import React from 'react'
import "./header.css"
import Avatar from '@mui/material/Avatar';

const Header = () => {
    return (
        <>
            <header>
                <nav><h1>ShopperSpy</h1>
                    <div className='avtar'>
                        <Avatar style={{ background: "black" }}>H</Avatar>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header