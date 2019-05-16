const db = require("../dbConfig.js");
const Database = require("./databaseModel.js");

describe("test environment is working", () => {
  it("test", () => {
    //   await Database.insert({ name: "test" });

    //   const database = await db("database");

    //   expect(database).toHaveLength(1);
    expect(process.env.DB_ENV).toBe("testing");
  });
});

describe("database model", () => {
  beforeAll(async () => {
    await db("database").truncate();
  });

  afterEach(async () => {
    await db("database").truncate();
  });

  describe("insert()", () => {
    it("should insert provided data", async () => {
      await Database.insert({ name: "test" });

      const database = await db("database");

      expect(database).toHaveLength(1);
    });

    it("should insert provided data", async () => {
      let data = await Database.insert({ name: "trishna" });
      expect(data.name).toBe("trishna");

      data = await Database.insert({ name: "rick" });
      expect(data.name).toBe("rick");

      const database = await db("database");

      expect(database).toHaveLength(2);
    });
  });
});
