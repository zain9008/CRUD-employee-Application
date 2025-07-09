import { Table, TableBody, TableCell, TableHead, TableRow, styled } from "@mui/material"
import { useEffect, useState } from "react";
import { getUsers } from "../Services/api";

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px auto 0 auto;
    `

const AllUsers = ()  =>{
    const [users, setUsers] = useState([]);
    useEffect (() =>{
        getUsersDetails();
    },[]);

    

    const getUsersDetails = async () => {
        let response = await getUsers ();
        console.log(response);
        setUsers(response.data);
    }
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                     <TableCell>Name</TableCell>
                      <TableCell>UserName</TableCell>
                       <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
                users.map(user =>(
                <TableRow>
                    <TableCell>{user.id}</TableCell>
                       <TableCell>{user.id}</TableCell>
                          <TableCell>{user.id}</TableCell>
                             <TableCell>{user.id}</TableCell>
                                <TableCell>{user.id}</TableCell>
                </TableRow>
                ))
            }
            </TableBody>
        </Table>
    )
}

export default AllUsers;