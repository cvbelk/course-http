const http = require("http");
const PORT = 3000;
  
http.createServer(function(request, response) {
    
  response.setHeader("Content-Type", "text/html; charset=utf-8;");
    
  if(request.url === "/home"){
    response.write("<h2>Home</h2>");
  }
  else if(request.url == "/http"){
    response.write("<h2>Http</h2>");
  }
  else if(request.url == "/streams"){
    response.write("<h2>Streams</h2>");
  }
  else if(request.url === "/"){
    response.statusCode = 301; 
    // на адресу localhost:3000/redir
    response.setHeader("Location", "/redir");
  }
  else if(request.url == "/redir"){
    response.write("<h1>Redirected from root</h1>");
  }
  else if(request.url == "/util"){
    response.write("<h2>Util</h2>");
  }
  else {
    response.write("<h2>Not found</h2>");
  }
  response.end();
}).listen(PORT, function(){
  console.log(`Server started at ${PORT}`);
});

/*
1)Create server with 2 routes: POST and GET. 
  - Save body data from POST request into text file (using streams)
  - GET request: send file in response using streams
  - *Additional GET-route to zip existing file (using streams and nodejs zlib module)
  - **Send zipped file via email(nodemailer npm) to specified(query param in url) email

  fs.createReadStream(filePath).pipe(response);
*/