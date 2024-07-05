import request from "supertest";
import express from "express";
import bodyParser from "body-parser";
import marked from "marked";
import cors from "cors";
import { describe, it } from "node:test";
import { expect } from "expect";

const app = express();
app.use(cors());
app.use(bodyParser.json());

console.log("🚀 ~ app:", app.post);
app.post("/convert-to-html", (req, res) => {
  const { markdown } = req.body;
  const html = marked.parse(markdown);
  res.json({ html });
});

describe("POST /convert-to-html", () => {
  it("should convert markdown to html", async () => {
    const response = await request(app)
      .post("/convert-to-html")
      .send({ markdown: "# Hello World" });

    expect(response.status).toBe(200);

    expect(response.body.html).toBe("<h1>Hello World</h1>\n");
  });
});
