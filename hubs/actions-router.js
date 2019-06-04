const express = require("express");

const Actions = require("../data/helpers/actionModel");
const Projects = require("../data/helpers/projectModel");

const router = express.Router();

// POST =========================== POST ============================ POST ============================== POST
router.post("/:id/actions", async (req, res) => {
  const messageInfo = { ...req.body, project_id: req.params.id };

  try {
    const saved = await Actions.insert(messageInfo);
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: "Failed to save message", error });
  }
});

// GET ============================ GET =============================== GET ================================ GET
router.get("/:id/actions", async (req, res) => {
  const { id } = req.params;

  try {
    const actions = await Projects.getProjectActions(id);

    if (actions.length) {
      res.json(actions);
    } else {
      res.status(500).json({ error: "No actions for this Project" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});
module.exports = router;
