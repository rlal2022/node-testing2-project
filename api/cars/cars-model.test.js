const db = require("../../data/dbConfig");
const Cars = require("./cars-model");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db.seed.run();
});

test("environment is testing", () => {
  expect(process.env.NODE_ENV).toBe("testing");
});

describe("getAll", () => {
  test("can get all cars from table", async () => {
    const result = await Cars.getAll();
    expect(result).toHaveLength(4);
    expect(result[0]).toMatchObject({ make: "Toyota" });
    expect(result[1]).toMatchObject({ make: "Nissan" });
    expect(result[2]).toMatchObject({ make: "Ford" });
    expect(result[3]).toMatchObject({ make: "Hyundai" });
  });
});

describe("getById", () => {
  test("can get car by id", async () => {
    let result = await Cars.getById(1);
    expect(result).toMatchObject({ make: "Toyota" });
    await Cars.getById(2);
    expect(result).toMatchObject({ make: "Nissan" });
  });
});
