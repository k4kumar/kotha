var connection = new signalR.HubConnectionBuilder()
    .withUrl('/Home/Index')
    .build();

connection.on('recieveMessage', addMessageToChat);

connection.start()
    .catch(error => {
        console.error(error.message);
    });

function sendMessageToHub(message) {
    console.log(2);
    connection.invoke('sendMessage', message);
    //connection.invoke("recieveMessage", addMessageToChat);
}