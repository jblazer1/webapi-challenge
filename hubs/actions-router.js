const express = require("express");

const Actions = require("../data/helpers/actionModel");

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

module.exports = router;
