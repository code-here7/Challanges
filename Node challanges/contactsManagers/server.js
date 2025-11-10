const http = require('http');
 const details = [];

const server = http.createServer((req,resp) => {
    
    if(req.method == "GET" && req.url == "/contacts")
    {
    //   console.log("GET Called!!");
      resp.end(JSON.stringify(details));
    }
    else if(req.method == "POST" && req.url == "/contacts")
    {
      try {
      let body = '';

      req.on('data', chunk => 
      body = body + chunk.toString())

      req.on('end', () => {
        // console.log(body);
        details.push(JSON.parse(body));
        // console.log(details);
        resp.end(body);
      })
      
      }
      catch(e) {
        console.log(e);
      }
    }
    else if(req.method == "PUT" && req.url.startsWith("/contacts/"))
    {
        // console.log(req.url);
         let body = '';

         req.on('data', chunk => 
         body = body + chunk.toString())

          req.on('end', () => {
        //   console.log(body);
          const id = req.url.split("/")[2];
        // console.log(id);
         const updt = details.map((item) => item.id==id ? {...item, ...JSON.parse(body)  } : item);
        //  console.log(updt);
         resp.end(JSON.stringify(updt));
          });
    }
    else if(req.method == "DELETE" && req.url.startsWith("/contacts/"))
    {
        // console.log(req.url)
        const id = req.url.split("/")[2];
        const update = details.filter((item) => item.id != id );
        console.log(update);
        resp.end(JSON.stringify(update));

    }
});

server.listen(8080,() => 
    console.log("Server is listening on port 8080")
);