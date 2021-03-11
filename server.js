const httpServer = require("http").createServer((req, res)=>{
  if (req.url == '/' || req.url == '/') {
    if(req.method == "POST"){
      let data = '';
      req.on('data', chunk => {
        data += chunk;
      })
      req.on('end', () => {
        io.emit("newChange", data);
        res.end("New state received");
        res.end();
      })
    } else {
      res.end("Hold down cow boy!")
    }
  } else {
    res.end("Hold down cow boy!")
  }
});


const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",
  },
});


httpServer.listen(9090)
