import styled from "@emotion/styled";
import { AppBar,Toolbar, Typography } from "@mui/material";

const  Header = styled(AppBar)`
background: #111111;
`

const Navbar = () =>{
    return(
    <Header>
        <Toolbar>
            <Typography>Code for Interview</Typography>
            <Typography>All Users</Typography>
            <Typography>Add Users</Typography>
        </Toolbar>
    </Header>
    )
}


export default Navbar ;