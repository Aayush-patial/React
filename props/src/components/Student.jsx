// function Student(props){
//     return (
//         <>
//         <h2> My name is {props.name}</h2>
//         <h2> His age is {props.age}</h2>
//         </>
//     )

// }

//2nd method 
function Student ({name,age}){
    return(
        <>
        <h2> My name is {name}</h2>
        <h2> His age is {age}</h2>
        </>
    )
}

export default Student;