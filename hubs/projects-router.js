const express = require("express");

const Projects = require("../data/helpers/projectModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await Projects.find(req.query);
    res.status(200).json(projects);
  } catch (error) {
    // console.log(error);
    res.status(500).json({ message: "Error retrieving the projects. " });
  }
});

module.exports = router;
