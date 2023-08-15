const http=require(`http`)
const server= http.createServer((request,response)=>{
    if(request.url===`/`){
        response.write("this is our home page my client")
    }
    else if(request.url===`/about`){
        response.write("this is our about page , we welcome you")
        // response.end();
    }
    else{
        response.end(
            `
            <h1> OOPS! </h1>
            <p> we can't seem to find your request in our server </p?
            `
        )
    }
    response.end();
})
server.listen(9000);