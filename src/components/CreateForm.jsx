import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';

const AuthorForm = (props) => {
    const [fullName, setFullName] = useState("")
    const navigate = useNavigate()

    const [errors, setErrors] = useState([])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/author', {
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
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p style={{backgroundColor: "red",color:"white", width: "200px"}} key={index}>{err}</p>)}
        <p>
            <Link to="/"> Home </Link>
        </p>
        <p>
            <label>Name: </label>
            <input type="text" onChange={(e) =>setFullName(e.target.value)} value={fullName}/>
        </p>
        <input type="submit" />
        <Link to="/">
                <button type="button">
                    Cancel
                </button>
        </Link>
    </form>
    )
}

export default AuthorForm