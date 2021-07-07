const express = require("express");

const Actions = require("../data/helpers/actionModel");
const Projects = require("../data/helpers/projectModel");

const router = express.Router();

// POST =========================== POST ============================ POST ============================== POST
router.post("/:id", async (req, res) => {
  const messageInfo = { ...req.body, project_id: req.params.id };

  try {
    const saved = await Actions.insert(messageInfo);
    res.status(201).json(saved);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to save message", error });
  }
});

// GET ============================ GET =============================== GET ================================ GET
router.get("/:id", async (req, res) => {
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

// PUT ============================== PUT ================================ PUT ============================ PUT
router.put("/:id", async (req, res) => {
  try {
    const hub = await Actions.update(req.params.id, req.body);
    if (hub) {
      res.status(200).json(hub);
    } else {
      res.status(404).json({ message: "The Action could not be found." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating Action. " });
  }
});

// DELETE ============================= DELETE ============================= DELETE ===================== DELETE
router.delete("/:id", async (req, res) => {
  try {
    const count = await Actions.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: "The Action has been nuked!" });
    } else {
      res.status(404).json({ message: "The Action could not be found. " });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error removing the Action." });
  }
});

module.exports = router;
