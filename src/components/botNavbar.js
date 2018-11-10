import React from 'react';
import { Navbar, NavItem, NavLink, Nav} from 'mdbreact';
import NavbarItem from './NavbarItem';
import {history} from './index'
import {formatEvent, parseEvents, isAdmin} from '../functions/utils'
const MentorHomeItem = NavbarItem('Home', 'mentorhome', 'mentorhome')



const LoggedInBottomNav = (addChapterMeeting, addReachMeeting) =>{
    return (
<Nav pullLeft={true} navbar={true} bsStyle={"tabs"} id="botnavtext">
                <NavItem>
                <NavLink to={"/mentorhome"}>Home</NavLink>
                    </NavItem>
                <NavItem activeHref="/">
                <NavLink to={"/calendar"}>Calendar</NavLink>
                </NavItem>
                <NavItem >
                <NavLink to={"/chapterexec"}>Chapter Exec Committee</NavLink>
                    </NavItem>
                <NavItem >
                <NavLink to={"/paydues"}>Pay Dues</NavLink>
                    </NavItem>
                    <NavItem >
                <NavLink to={"/safeguarding"}>Safeguarding</NavLink>
                    </NavItem>
                    <NavItem>
                <NavLink to={"/documents"}>Documents</NavLink>
                    </NavItem>  
                    {isAdmin()&&(<NavItem onClick={addChapterMeeting}>
                        <NavLink to={"/#"}>New Chapter Meeting</NavLink>
            </NavItem>)}
                <NavItem onClick={addReachMeeting}>
                   <NavLink to={"/#"}>Reach Mentoring Appointment</NavLink>
                </NavItem>  
            </Nav>
    )
} 

const LoggedOutBottomNav = () => {
    return (
        <Nav pullLeft={true} navbar={true} bsStyle={"tabs"} id="botnavtext">

    </Nav>
    )
}
function botNav(logged, addChapterMeeting, addReachMeeting) {
    return (
        <Navbar id="botnav" fixedTop={true}>{
            logged === 'true'&&(
                LoggedInBottomNav(addChapterMeeting, addReachMeeting)
            )
        }{
            logged != 'true'&&(
                <LoggedOutBottomNav/>
            )
        }
        </Navbar> 
    )
}

export default botNav