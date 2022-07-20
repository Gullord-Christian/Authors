import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate, Link } from "react-router-dom";

const EditForm = () => {
    const [fullName, setFullName] = useState("")

    const {id} = useParams();
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
        //this is pre-populating the form when we go to update product
            .then(res => {
                setFullName(res.data.fullName);
            })
            .catch(err => console.log(err))
    }, []);

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/author/${id}`, {
            fullName,
        })
            .then(res => navigate('/'))
            .catch(err => {
                const errMsgArr = []
                const errRes = err.response.data.errors
                for (const eachKey in errRes){
                    errMsgArr.push(errRes[eachKey].message)
                }
                setErrors(errMsgArr)
                // this is for an unsuccessful response
            })
    }

    return (
    <div>
        <Link to="/"> Home </Link>
        <h3>Edit this author </h3>
        <form onSubmit={updateAuthor}>
        {errors.map((err, index) => <p style={{backgroundColor: "red",color:"white", width: "300px"}} key={index}>{err}</p>)}
            <p>
            <label>Name</label>
            <input type="text" name="fullName" value={fullName} onChange={(e) => {setFullName(e.target.value) }} />
            </p>
            <Link to="/">
                <button>
                    Cancel
                </button>
            </Link>
                <button>
                    Update
                </button>
        </form>
    </div>
    )
}

export default EditForm