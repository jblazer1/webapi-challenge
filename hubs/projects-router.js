const express = require("express");

const Projects = require("../data/helpers/projectModel");

const router = express.Router();

// POST =================================== POST =========================== POST =========================== POST
router.post("/", async (req, res) => {
  if (!req.body.name || !req.body.description) {
    res.status(404).json({ error: "Please provide a name and description. " });
  } else {
    try {
      const hub = await Projects.insert(req.body);
      res.status(201).json(hub);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error adding the project." });
    }
  }
});

// GET ==================================== GET ========================= GET ================================= GET
router.get("/", async (req, res) => {
  try {
    const projects = await Projects.get();
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error retrieving the projects. " });
  }
});

module.exports = router;
