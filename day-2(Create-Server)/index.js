// Importing the built-in 'http' module to create a server
const http = require("http")

// Defining the port number where the server will listen for requests
const port = 1008;

// Creating a request handler function
// This function will be executed whenever a request is received
const portHandler = (req, res) => {

    // Writing an HTML response to the client browser
    res.write("<h1>Hello NodeJS</h1>");

    // Ending the response to signal that the response is complete
    res.end();
}

// Creating an HTTP server and passing the request handler function
const server = http.createServer(portHandler)
server.listen(port, (err) => {
    // Checking if there's an error while starting the server
    err ? console.log(err) : console.log(`server started on port: ${port}`)



    //also use if else
    /* 
    if (err) {
       console.log(err); // If there is an error, log the error message.
     } else {
        console.log(`Server started on port: ${port}`); // If no error, log the success message.
    }*/

})

/*this is tradition form and we translate into moduler form then*/