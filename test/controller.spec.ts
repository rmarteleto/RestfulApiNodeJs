import { expect } from "chai";
import "mocha";
import { agent as request } from "supertest";
import { AssertionError } from "assert";
const app = require("../index");

describe("controller function", () => {
  it("should create a new user", async function () {
    const res = await request(app).post("/users").send({
      email: "test@ns8.com",
      password: "passwordIsPizza",
      phone: "333-222-1111",
    });
    expect(res.status).to.equal(200);
  });
  it("should create another new user", async function () {
    const res = await request(app).post("/users").send({
      email: "test2@ns8.com",
      password: "passwordIsIcecream",
    });
    expect(res.status).to.equal(200);
  });
  it("fail to create existing user", async function () {
    const res = await request(app).post("/users").send({
      email: "test@ns8.com",
      password: "passwordIsIcecream",
    });
    expect(res.status).to.equal(400);
  });
  it("fail to create user - bad phone number", async function () {
    const res = await request(app).post("/users").send({
      email: "test3@ns8.com",
      password: "passwordIsIcecream",
      phone: "11-111-1111",
    });
    expect(res.status).to.equal(400);
  });
  it("should GET /users", async function () {
    const res = await request(app).get("/users");
    expect(res.status).to.equal(200);
    expect(res.body).to.length(2);
  });
  it("should GET all events", async function () {
    const res = await request(app).get("/events");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.length(3);
  });
  it("should GET all events for the last 24 hours", async function () {
    const res = await request(app).get("/events/lastdayevents");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.length(3);
  });
  it("should GET all events for the given email", async function () {
    const res = await request(app).get("/events/test2@ns8.com");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.length(1);
  });
  it("should add a new event", async function () {
    const res = await request(app).post("/events").send({
      type: "LOGIN",
    });
    expect(res.status).to.equal(200);
  });
  it("should GET all events", async function () {
    const res = await request(app).get("/events");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.length(4);
  });
});
