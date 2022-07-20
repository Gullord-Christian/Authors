import React, {useState, useEffect} from 'react'

import AuthorList from '../views/AuthorList'
import axios from 'axios';
import {Link} from 'react-router-dom'

const Dashboard = (props) => {
    const [authors, setAuthors] = useState([])
    const [refresh, setRefresh] = useState(true)

    const reloadList = () => {
        setRefresh(!refresh)
    }

    const removeFromDom = authorId => {
        setAuthors(authors.filter(authors => authors._id !== authors));
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then(res=> {
                setAuthors(res.data)
            })
            .catch(err=> console.log(err))
    }, [refresh])

    return (
    <div>
        <h1>Favorite Authors </h1>
        <p><Link to="/author/new"> Add an author </Link>
        </p>
        <h4>We have quotes by:</h4>
        <AuthorList authors = {authors} reloadList={reloadList} />
    </div>
    )
}

export default Dashboard