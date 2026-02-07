const request = require("supertest");
const app = require("../../src/app.js");

describe("GET /v1/items", () => {
  it("returns a list of items", async () => {
    const response = await request(app).get("/v1/items");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});