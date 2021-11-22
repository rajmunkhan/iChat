const socket = io("http://localhost:5501");

let form=document.getElementById("form")
let chat=document.querySelector(".chat")
let msg=document.getElementById("sent-msg")


const append=(message,position)=>{
    const msgEle=document.createElement('div');
    msgEle.innerText=message;
    msgEle.classList.add('msg')
    msgEle.classList.add(position)
    chat.append(msgEle);
}
const username=prompt("enter the name");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    append(`${msg.value}: You`,'right');
    socket.emit('send',msg.value);
    msg.value="";
})
socket.emit("new-user-joined",username);

socket.on('user-joined',name =>{
    append(`${name} has joined`,'left');
});

socket.on("recieve",data =>{
    append(`${data.name}: ${data.message}`,'left');
    
})