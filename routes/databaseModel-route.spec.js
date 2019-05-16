const request = require("supertest");

const db = require("../data/dbConfig.js");
const Server = require("../server.js");

describe("Database endpoints", () => {
  // you want items to still be there and make sure things are cleaned up before every test is run.
  beforeAll(async () => {
    await db("database").truncate();
  });

  it("sets the environment to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("/get", () => {
    it("it should return 200 status code", async () => {
      // use the squad
      const res = await request(Server).get("/api/data");
      // console.log(res);
      expect(res.status).toBe(200);
    });

    it("it should return a JSON object", async () => {
      // use the squad
      const res = await request(Server).get("/api/data");
      // console.log(res);
      console.log(res.headers);
      expect(res.headers["content-type"]).toMatch(/json/i);
    });
  });

  describe("/post", () => {
    it("it should return 201 status code", async () => {
      // use the squad
      const res = await request(Server)
        .post("/api/data")
        .send({ name: "test" });

      // console.log(res);
      expect(res.status).toBe(201);
    });

    it("it should return a JSON object", async () => {
      // use the squad
      const res = await request(Server)
        .post("/api/data")
        .send({ name: "test" });
      // console.log(res);
      console.log(res.headers);
      expect(res.headers["content-type"]).toMatch(/json/i);
    });
  });

  describe("/delete", () => {
    it("it should return 200 status code", async () => {
      // use the squad
      const res = await request(Server).delete("/api/data/1");
      // console.log(res);
      expect(res.status).toBe(200);
    });

    it("it should return a JSON object", async () => {
      // use the squad
      const res = await request(Server).delete("/api/data/1");
      // console.log(res);
      console.log(res.headers);
      expect(res.headers["content-type"]).toMatch(/json/i);
    });
  });
});
