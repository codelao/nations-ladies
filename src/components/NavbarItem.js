import React from 'react';
import {NavItem, NavLink} from 'mdbreact';

const NavbarItem = (navText, linkPath, activeHref) => {
    return (<NavItem activeHref={`/${activeHref}`}>
                <NavLink to={`/${linkPath}`}>${navText}</NavLink>
                    </NavItem>)
}

export default NavbarItem