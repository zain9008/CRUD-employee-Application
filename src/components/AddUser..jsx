import { useState } from "react";
import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from "@mui/material";
import { addUser as addUserApi } from "../Services/api";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px;
    }
`;

const initialValues = {
    name: "",
    username: "",
    email: "",
    phone: "",
};

const AddUser = () => {
    const [User, setUser] = useState(initialValues);
    const navigate = useNavigate();

    const onValuechange = (e) => {
        setUser({ ...User, [e.target.name]: e.target.value });
    };

    const addUserDetails = async () => {
        await addUserApi(User); // This will POST to json-server and save to db.json
        navigate("/all"); // Redirect to All Users page
    };

    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={onValuechange} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={onValuechange} name="username" />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={onValuechange} name="email" />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={onValuechange} name="phone" />
            </FormControl>
            <FormControl>
                <Button onClick={addUserDetails} variant="contained">
                    Add User
                </Button>
            </FormControl>
        </Container>
    );
};

export default AddUser;