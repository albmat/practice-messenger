const server = require("http").createServer();
const io = require("socket.io")(server);
const PORT = 9090;
const chatEvent = "newChatMessage";

io.on("connection", (socket) => {
  socket.join(1);
  socket.on(chatEvent, (data) => {
    io.in(1).emit(chatEvent, data);
  });
  socket.on("disconnect", () => {
    socket.leave(1);
  });
});

server.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
