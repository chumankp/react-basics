
// const Student = (props) => {
//         return (
//         <div>
//             <h1>Student details</h1>
//             <p>First Name: {props.firstName}</p>
//             <p>Last Name: {props.lastName}</p>
//             <p>Email : {props.email}</p>
//         </div>
//         )
// }

// const Student = (props) => {
//     return (
//     <div>
//         <h1>Student details</h1>
//         <p>First Name: {props.student.firstName}</p>
//         <p>Last Name: {props.student.lastName}</p>
//         <p>Email : {props.student.email}</p>
//         <p>Skills: {props.data}</p>
//     </div>
//     )
// }

const Student = (props) => {
    const {firstName, lastName, email} = props
    return (
    <div>
        <h1>Student details</h1>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email : {email}</p>
    </div>
    )
}

export default Student
