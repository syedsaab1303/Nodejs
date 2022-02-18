const  url =require('url');
const http =require("http");
const fs = require ("fs");
const { homedir } = require('os');



http.createServer((req, res) => {

// request
//index
//aboutclae
//service

const path =req.url

if (path== "/about"){
    console.log("About page");

    res.writeHead(200,{
        'content-type':'text/html'})
  
  const fileContent= fs.readFileSync("./views/about.html")
  res.write(fileContent);
  res.end();
  


}

else if(path == "/"){
    console.log("Home Page");

  res.writeHead(200,{
      'content-type':'text/html'})

const fileContent= fs.readFileSync("./views/home.html")
res.write(fileContent);
res.end();

}
else if(path == '/services'){

    console.log("services");


    res.writeHead(200,{
        'content-type':'text/html'})
  
  const fileContent= fs.readFileSync("./views/services.html")
  res.write(fileContent);
  res.end();
  

}

}).listen(1010);





