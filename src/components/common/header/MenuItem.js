import React from "react";
import { Link } from "react-router-dom";

class MenuItem extends React.Component {
    render() {
        const { text, url } = this.props;
        return (
            <li>
                <Link to={url}>{text}</Link>
            </li>
        );
    }
}

export default MenuItem;