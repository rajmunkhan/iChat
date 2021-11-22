const io=require("socket.io")(5501);

const users={}

io.on("connection",socket =>{
    socket.on("new-user-joined",name =>{
        console.log("username is",name)
        users[socket.id]=name;
        socket.broadcast.emit("user-joined",name)
    })
    socket.on("send",message =>{
        socket.broadcast.emit("recieve",{message:message,name:users[socket.id]})
    })
})
