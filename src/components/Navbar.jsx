import styled from "@emotion/styled";
import { AppBar,Tab,Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const  Header = styled(AppBar)`
background: #111111;
`

const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 20px;
    color: #fff;
    text-decoration: none;

    &.active {
        font-weight: bold;
        border-bottom: 2px solid #fff;
    }
`

const Navbar = () =>{
    return(
    <Header position="static">
        <Toolbar>
            <Tabs to="/">Code for Interview</Tabs>
            <Tabs to="/all">All Users</Tabs>
            <Tabs to="/add">Add Users</Tabs>
        </Toolbar>
    </Header>
    )
}


export default Navbar ;