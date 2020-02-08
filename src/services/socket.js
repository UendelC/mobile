import socketio from "socket.io-client"

const socket = socketio("http://192.168.0.100:3333", {
    autoConnet: false
})

function connect() {
    socket.connect();
}

function disconnect() {
    if (socket.connected) {
        socket.disconnect();
    }
}

export {
    connect,
    disconnect
};