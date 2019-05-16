const router = require("express").Router();
const Database = require("../data/helpers/databaseModel.js");

router.get("/", async (req, res) => {
  console.log(res.status);
  const database = await Database.getAll();
  res.status(200).json(database);
});

router.get("/:id", async (req, res) => {
  const data = await Database.findById(req.params.id);

  if (data) {
    res.status(200).json(data);
  } else {
    res
      .status(404)
      .json({ message: "The action with the specified ID does not exist." });
  }
});

router.post("/", async (req, res) => {
  const data = req.body;
  console.log("New Action", req.body);
  if (data.name === undefined) {
    res.status(400).json({
      message: "Please provide all of the required information for the action."
    });
  } else {
    const { id } = await Database.insert(data);
    const addedData = await Database.findById(id);
    res.status(201).json(addedData);
  }
});

router.delete("/:id", async (req, res) => {
  const data = await Database.remove(req.params.id);
  if (data) {
    res.status(200).json({ message: "The action has been deleted" });
  } else {
    res
      .status(404)
      .json({ message: "The action with the specified ID does not exist." });
  }
});

module.exports = router;
