
const request = require("supertest");
const app = require("../src/index");

describe("GET /Usuarios", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/").send();
      expect(response.statusCode).toBe(200);
    })}
);