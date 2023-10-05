const db = require("../../data/db-config");
const Friends = require("./friends-model");

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
  test("resolve all the friends in the table", async () => {
    const result = await Friends.getAll();
    expect(result).toHaveLength(4);
    expect(result[0]).toMatchObject({ name: "mark" });
    expect(result[1]).toMatchObject({ name: "ryan" });
    expect(result[2]).toMatchObject({ name: "kyle" });
    expect(result[3]).toMatchObject({ name: "jordan" });
  });
});

describe("getById", () => {
  test("resolve the friends by the given id", async () => {
    let result = await Friends.getById(1);
    expect(result).toMatchObject({ name: "mark" });
    result = await Friends.getById(2);
    expect(result).toMatchObject({ name: "ryan" });
    result = await Friends.getById(3);
    expect(result).toMatchObject({ name: "kyle" });
    result = await Friends.getById(4);
    expect(result).toMatchObject({ name: "jordan" });
  });
});

describe("insert", () => {
  const john = { name: "john" };
  test("resolves the newly created friends", async () => {
    const result = await Friends.insert(john);
    expect(result).toMatchObject(john);
  });
  test("add the friend to the friends table", async () => {
    await Friends.insert(john);
    const records = await db("friends");
    expect(records).toHaveLength(5);
  });
});
