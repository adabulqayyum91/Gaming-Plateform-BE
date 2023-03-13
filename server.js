const socket = require("socket.io");
const cors = require("cors");
const http = require("http");
const fs = require("fs");
const app = require("./app");
const UserHelper = require("./Services/UserHelper");
const { add } = require("nodemon/lib/rules");
const port = process.env.PORT || 4005;
const options = {
	key: fs.existsSync(process.env.SSL_KEY)
		? fs.readFileSync(process.env.SSL_KEY)
		: null,
	cert: fs.existsSync(process.env.SSL_CRT)
		? fs.readFileSync(process.env.SSL_CRT)
		: null,
};
const server =
	process.env.MODE == "DEV"
		? http.createServer(app)
		: http.createServer(options, app);
console.log("Serving on ", port);
const clients = [];
// const io = require("socket.io")(server);
var io = socket(server, {
	cors: {
		origin: "*",
	},
});
//TODO :declare empty aray for add online/active users
let users = [];
let userOffline;
//TODO :add online user(userid and socketId) to users array when user connected
const addUser = (userId, socketId) => {
	console.log("1 : ", userId);
	!users.some((user) => user.userId === userId) &&
		users.push({ userId, socketId });
};
//TODO :remove online user(userid and socketId) from users array when user disconnected
const removeUser = async (socketId) => {
	userOffline = users.find((user) => user.socketId === socketId);
	//isOnline set to false
	if (typeof userOffline != "undefined") {
		await UserHelper.setUserOnlineStatus(userOffline.userId, false);
	}
	users = users.filter((user) => user.socketId !== socketId);
};
//TODO :show online user(userId,socketId) by userId
const getUser = (userId) => {
	return users.find((user) => user.userId === userId);
};
//io connection
io.on("connection", (socket) => {
	//get socketId and userId from user
	//TODO : addUser call for add user to online .....
	socket.on("addUser", async (userId) => {
		let senderId = userId.senderId;

		addUser(senderId, socket.id);
		await UserHelper.setUserOnlineStatus(senderId, true);
		// console.log("users after connected/online : ", users)
		//TODO:show all online users after add a user
		io.emit("getUsers", users);
	});
	//TODO:send and receive msg
	socket.on("sendMessage", async ({ senderId, receiverId, text }) => {
		let stringReceiverId = receiverId.toString();

		//TODO: get conversationId of two(sender and receiver) users
		//
		// let conversationDetail = await conversationController.conversationDetail(stringSenderId, stringReceiverId)
		// console.log(conversationDetail)
		// let conversationId = conversationDetail._id
		//TODO:save msg to DB
		//
		// await ChatMessageHelper.createMessage(conversationId, stringSenderId, text)
		const user = getUser(stringReceiverId);
		// console.log("user : ", user)
		//TODO:Emit(recieve msg which was send with sendMessage event
		io.to(user.socketId).emit("getMessage", {
			senderId,
			text,
		});
	});
	//TODO: discount user when goes offline
	socket.on("disconnect", () => {
		// console.log("a user disconnected!");
		//TODO: remove user from users array
		removeUser(socket.id);
		//TODO:show all online users after remove a user
		io.emit("getUsers", users);
		// console.log("after user offline", users)
	});
});
server.listen(port);
