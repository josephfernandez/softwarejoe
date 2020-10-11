const router = require("express").Router();
let Idea = require("../models/idea.model");

router.route("/").get((req, res) => {
  Idea.find()
    .then((ideas) => res.json(ideas))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const creationDate = Date.parse(req.body.creationDate);
  const estimatedDateOfCompletion = Date.parse(
    req.body.estimatedDateOfCompletion
  );

  const newIdea = new Idea({
    creationDate,
    title,
    description,
    estimatedDateOfCompletion,
  });

  newIdea
    .save()
    .then(() => res.json("Idea added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Idea.findById(req.params.id)
    .then((idea) => res.json(idea))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Idea.findByIdAndDelete(req.params.id)
    .then(() => res.json("Idea deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Idea.findById(req.params.id)
    .then((idea) => {
      idea.creationDate = req.body.creationDate;
      idea.title = req.body.title;
      idea.description = req.body.description;
      idea.estimatedDateOfCompletion = req.body.estimatedDateOfCompletion;

      idea
        .save()
        .then(() => res.json("Idea updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
