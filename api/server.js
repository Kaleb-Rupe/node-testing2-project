const express = require("express");

const Friends = require("./friends/friends-model");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/hobbits", (req, res) => {
  Friends.getAll()
    .then((hobbits) => {
      res.status(200).json(hobbits);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

server.get("/hobbits/id", (req, res) => {
  res.end();
});

server.post("/hobbits", async (req, res) => {
  res.status(201).json(await Friends.insert(req.body));
});

server.delete("/hobbits/:id", (req, res) => {
  res.end();
});

server.put("/hobbits/:id", (req, res) => {
  res.end();
});

module.exports = server;
