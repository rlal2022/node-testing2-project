exports.seed = function (knex) {
  return knex("cars")
    .truncate()
    .then(function () {
      return knex("cars").insert([
        {
          make: "Toyota",
          model: "Prius",
          year: "2022",
          color: "White",
        },
        {
          make: "Nissan",
          model: "Altima",
          year: "2019",
          color: null,
        },
        {
          make: "Ford",
          model: "Explorer",
          year: "2020",
          color: "Black",
        },
        {
          make: "Hyundai",
          model: "Elantra",
          year: "2017",
          color: "Red",
        },
      ]);
    });
};
