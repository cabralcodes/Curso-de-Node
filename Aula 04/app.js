import htpp from 'http';

htpp.createServer(function(req, res){
res.end("Helo World! Welcome to my website");
}).listen(49823);

console.log("O servidor esta rodando!");
