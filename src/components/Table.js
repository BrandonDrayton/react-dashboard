import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from "react"

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}



export default function BasicTable() {
    const [users, setUsers] = useState([])
    const getUsers = () => {
        fetch('https://randomuser.me/api/?results=10')
            .then(res => res.json())
            .then(data => {
                setUsers(data.results)
                console.log(data.results[0].name.first)
            })
    }

    React.useEffect(() => {
        getUsers()
    }, [])
    return (
        <TableContainer sx={{ mt: '4em' }} component={Paper}>
            <Table sx={{ minWidth: 150, maxWidth: 300 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Username</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Registration Date</TableCell>
                        <TableCell align="right">Country</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user, i) => (
                        <TableRow
                            key={i}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{[user.name.first, user.name.last]}</TableCell>
                            <TableCell align="right">{user.login.username}</TableCell>
                            <TableCell align="right">{user.email}</TableCell>
                            <TableCell align="right">{user.registered.date}</TableCell>
                            <TableCell align="right">{user.location.country}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
