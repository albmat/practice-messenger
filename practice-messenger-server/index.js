const server = require("http").createServer();
const io = require("socket.io")(server);
const PORT = 9090;
const chatEvent = "newChatMessage";

io.on("connection", (socket) => {
  socket.join();
  socket.on(chatEvent, (data) => {
    io.in().emit(chatEvent, data);
  });
  socket.on("disconnect", () => {
    socket.leave();
  });
});

server.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
