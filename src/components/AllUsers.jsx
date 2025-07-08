import { useEffect, useState } from "react";
import { getUsers } from "../Services/api";
import { Table, TableBody, TableCell, TableHead, TableRow, Typography, Button } from "@mui/material";

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = async () => {
        const response = await getUsers();
        setUsers(response?.data || []);
    };

    return (
        <>
            <Typography variant="h4" style={{ margin: 20 }}>All Users</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(user => (
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
};

export default AllUsers;

// This component already fetches users from db.json using getUsers from api.js and displays them in a table.
// No changes are needed if you want to display the list as you already do.
// Just ensure you use this component for your /all route.
