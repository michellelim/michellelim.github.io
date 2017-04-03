import React from 'react';
import {Link} from 'react-router-dom';

const NavLink = React.createClass({
    render: function() {
        const style = {
            textTransform: 'uppercase'
        };
        if (this.props.currentPage == this.props.link.title) {
            return (
                <Link className="selected" to={this.props.link.src}>{this.props.link.name}</Link>
            )
        } else {
            return (
                <Link to={this.props.link.src}>{this.props.link.name}</Link>
            )
        }
    }
});

export default NavLink;