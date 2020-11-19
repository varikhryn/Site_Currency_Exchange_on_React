import "./Nav.css";

import React from "react";

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="header-nav">
                <div className="container">
                    <nav>
                        <ul>
                            {this.props.menu.map((item, index) => {
                                return <li key={index}><a href={item.link}>{item.name}</a></li>
                            })}
                        </ul>
                    </nav>
                </div>
            </div >
        );
    }
}

export default Nav;