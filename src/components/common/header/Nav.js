import React from "react";
import { Menu } from './index';

class NavBar extends React.Component {
    render () {
        const { items } = this.props;
        return (
            <nav>
                <Menu items={items} />
            </nav>
        );
    }
}

export default NavBar;