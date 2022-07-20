import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const AuthorList = (props) => {

    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8000/api/author/${authorId}`)
            .then(res=> {
                props.reloadList()
            })
            .catch(err => console.log(err))
    }

    return (
    <div>
        <table>
            <thead>
                <tr>
                    <th> Author </th>
                    <th> Actions </th>
                </tr>
            </thead>
            <tbody>
                {
                props.authors.map((author, i) => {
                    return (
                        <tr key={i}>
                            <td>{author.fullName}</td>
                            <td>
                            <Link to={`/author/edit/${author._id}`}>
                                <button type="button">
                                    Edit
                                </button>
                            </Link>
                            <button onClick={()=>{deleteAuthor(author._id)}}>
                                Delete
                            </button>
                            </td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
    )
}

export default AuthorList