import React from 'react';
import { Navbar, NavItem, NavLink, Nav} from 'mdbreact';
import img from "../images/Links_GREEN_Logo.png";

function topNav(logged, login, logout) {
          return (
            <Navbar id="topnavtext">
              {logged === 'true'&&(
                <Nav pullLeft={true} navbar={true} bsStyle={"tabs"} id="topnavtext">
                <a href="/" id="logo_a" onClick={logout}><img alt="logo" id="imglogo" src={img}/></a>
                <NavItem eventkey={1}>
                <NavLink to="/#">{localStorage.getItem('display')}
                  </NavLink>                 
            </NavItem>
              <NavItem eventkey={2} onClick={logout}><NavLink to="/#">Logout</NavLink>
              </NavItem>
              </Nav>
            )}{logged !== 'true'&&(
              <Nav id="topnavtext">
              <a href="/" id="logo_a" onClick={logout}><img alt="logo" id="imglogo" src={img}/></a>
              <NavItem>
            <NavLink to={"/"}>Home</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to={"/about"}>About</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to={"/service"}>Service</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to={"/donate"}>Donate</NavLink>
        </NavItem>
                    <NavItem eventkey={1}><NavLink to="/contactus">Contact Us</NavLink></NavItem>
                    <NavItem eventkey={2} onClick={login}><NavLink to="/">Members Only</NavLink></NavItem>
                  </Nav>
            )
            }
            </Navbar>
          )
}

export default topNav 