const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db/db");
const socket = require('socket.io')

const app = express();

//routers
const usersRouter = require("./routers/routes/auth/signUp");
const loginRouter = require("./routers/routes/auth/login");
const showRouter = require("./routers/routes/show");
const adsCreationRouter = require("./routers/routes/adsCreation");
const addImageRouter = require("./routers/routes/addImage");

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers
app.use(usersRouter);
app.use(loginRouter);
app.use("/advertisements", showRouter);
app.use("/advertisement", adsCreationRouter);
app.use("/", addImageRouter);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});

const io = socket(server, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ['GET', 'POST', 'DELETE', 'PUT'],
	},
});


io.on('connection', socket => {
  const id = socket.handshake.query.id
  socket.join(id)

  socket.on('send-message', ({ recipients, text }) => {
    recipients.forEach(recipient => {
      const newRecipients = recipients.filter(r => r !== recipient)
      newRecipients.push(id)
      socket.broadcast.to(recipient).emit('receive-message', {
        recipients: newRecipients, sender: id, text
      })
    })
  })
})