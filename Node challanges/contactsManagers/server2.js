const http = require('http');

let users = [ {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
  },
 {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net"
  },
 {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "phone": "1-463-123-4447",
    "website": "ramiro.info"
  },
 {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "phone": "493-170-9623 x156",
    "website": "kale.biz"
  },
 {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "phone": "(254)954-1289",
    "website": "demarco.info"
  }]

const server = http.createServer((req,resp) => {

    if(req.method == 'GET' && req.url == "/users")
    {
        try{
            resp.writeHead(200, {'Content-Type': 'application/json'});
            resp.end(JSON.stringify(users));
        }
        catch (e)
        {
            console.log(e);
            resp.end("Error in fetching data!!")
        }
    }
    else if(req.method == 'POST' && req.url == "/users")
    {
        try{
           body = '';
           req.on('data',chunk =>{
           body = body + chunk.toString();
           });
           req.on('end',() =>{
            // console.log(body);
            const newuser = JSON.parse(body);
            users.push(newuser);
            resp.writeHead(200, {'Content-Type': 'application/json'});
            resp.end(JSON.stringify(users));
           });
        }
        catch (e)
        {
            console.log(e);
            resp.end("Error in Adding data!!")
        }
    }
    else if(req.method == 'PUT' && req.url.startsWith("/users/"))
    {
        try{
           const id = req.url.split("/")[2];
        //    console.log(id);
           body = '';
           req.on('data',chunk =>{
            body = body + chunk.toString();
           });
           req.on('end',() =>{
            const updateuser = JSON.parse(body);
            // console.log(updateuser)
            users = users.map((item) => item.id == id ? {...item,...updateuser} : item);
            console.log(users);
            resp.writeHead(200, {'Content-Type': 'application/json'});
            resp.end(body);
           });
        }
        catch (e)
        {
            console.log(e);
            resp.end("Error in Adding data!!")
        }
    }
    else if(req.method == 'DELETE' && req.url.startsWith("/users/"))
    {
        try{
         const id = req.url.split("/")[2];
         users = users.filter(item => item.id != id);
         console.log(users);
         resp.writeHead(200, {'Content-Type': 'application/json'});
         resp.end(JSON.stringify(users));
        }
        catch(e)
        {
            console.log(e);
            resp.end("data not deleted!!");
        }
    }
    else
    {
        resp.end("Please select a valid method!!");
    }
});

server.listen(2000,()=> {
    console.log("I am listening at port 2000");
});