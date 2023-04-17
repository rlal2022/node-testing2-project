const router = require("express").Router();
const Cars = require("../cars/cars-model");

router.get("/cars", (req, res) => {
  Cars.getAll()
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/cars/:id", (req, res, next) => {
  Cars.getById(req.params.id)
    .then((car) => {
      res.json(car);
    })
    .catch(next);
});

module.exports = router;
