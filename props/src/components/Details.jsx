function Details (){
    let isLoggedIn = true;
    // if(isLoggedIn){
    //     return <h1> Welcome back</h1>
    // }
   // return <h1> Register to access website</h1>

   //Ternary operator method:
//   let result = isLoggedIn ? "Welcome back" : "Register to access the website";

//   return (
//     <>
//     <h1>{result}</h1>
//     </>
// )

    //Logical AND  method
    return (
        <>
        {isLoggedIn && <h1> Welcome back</h1>}
        </>
    )

}

export default Details;