const express = require("express");

const ProjectsRouter = require("../hubs/projects-router.js");
const ActionsRouter = require("../hubs/actions-router.js");

const server = express();

server.use(express.json());
server.use("/api/projects", ProjectsRouter);
server.use("/api/projects", ActionsRouter);

server.get("/", (req, res) => {
  res.send("This is a test. This is only a test.");
});

module.exports = server;
