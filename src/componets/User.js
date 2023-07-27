import { useState } from "react"

const User = () =>{
    // const [firstName, setFirstName] = useState('chuman')
    // const [lastName, setLastName] = useState('panda')
    // const [email, setEmail] = useState('chuman@gmail.com')
    const [user, setUser] = useState({
        firstName:'chuman',
        lastName: 'panda',
        email:'chuman@gmail.com'
    })
    function updateUser(){
        // setFirstName('kalia')
        // setLastName('kumar')
        // setEmail('chuman.panda@gmail.com')
        setUser({
            firstName:'kumar',
            lastName: 'panda',
            email:'chuman.kumar@gmail.com'
            })
    }

    return (
        <div>
            <h1>User Details</h1>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.email}</p>
            <button onClick={updateUser}>User Update</button>
        </div>
    )
}

export default User