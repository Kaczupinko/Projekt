import React from "react";
import { AuthButton, Logo, Nav } from "./header/index";
import items from "./../../utils/items";

class Header extends React.Component {

    render() {
        return (
            <header>
                <Logo />
                <Nav items={items} />
            </header>
        )
    }
}

export default Header;