import './UserList.css';
import Card from '../Card';
import { useEffect, useState } from 'react';

const UserList = () => {

    const [username, setUsername] = useState('Username')
    const [key, setKey] = useState(0)

    useEffect(() => {
        const API = fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => console.log(json))
        }, [key])

    return (
        <Card key={key} username={username} />
    )
}

export default UserList