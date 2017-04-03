import React from 'react';
import NavLink from './navlink';

const Header = React.createClass({
    _getNavItems: function() {
        return this.props.links.map((link) => {
            return (
                <NavLink
                    key={link.name}
                    link={link}
                    currentPage={this.props.pageTitle}
                />
            )
        });
    },
    render: function() {
        const navItems = this._getNavItems();

        return (
            <header className='main'>
                <div className='primary'>
                    <h1>Michelle Lim</h1>
                    <nav>
                        {navItems}
                    </nav>
                </div>
                <h1 className='title'>{this.props.pageTitle}</h1>
            </header>
        )
    }
});

export default Header;