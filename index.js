const express = require("express");
const cors = require("cors"); //allow front-end
const { getTasks, createTask, updateTask } = require("./src/tasks");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors()); // and back-end to connect
app.use(express.json());

//Routes
app.post("/tasks", createTask);

app.get("/tasks", getTasks);

app.patch("/tasks/:taskId", updateTask);

app.listen(PORT, () => {
  console.log("listening on port:", PORT);
});
