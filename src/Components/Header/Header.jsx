import React, { useState } from "react";
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";

function Header() {
    const [menuOpened, setMenuOpened] = useState(false)
    const getMenuStyle = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return{right: !menuOpened && "-100%"}
        }
    }
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">

                {/* <Link> */}
                    <img src="./logo.png" alt="logo" width={100} />
                {/* </Link> */}

                <OutsideClickHandler onOutsideClick={() => {setMenuOpened(false)}}>
                <div className="flexCenter h-menu" style={getMenuStyle(menuOpened)}>
                    {/* <NavLink to="/properties">Properties</NavLink> */}

                    <a href="">Residencies</a>
                    <a href="">Our Values</a>
                    <a href="">Contact Us</a>
                    <a href="">Get Started</a>
                    <button className='button'>
                        <a href="mailto:lalolalo0017@gmail.com">Contact</a>
                    </button>

                    {/* <button className="button">
                        Login
                    </button> */}
                </div>
                </OutsideClickHandler>

                <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
                    <BiMenuAltRight size={30} />
                </div>
            </div>
            
        </section>
    )
}

export default Header;