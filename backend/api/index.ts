import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import marked from "marked";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Backend application is live" });
});

app.post("/convert-to-html", (req: Request, res: Response) => {
  const { markdown } = req.body;
  if (typeof markdown !== "string") {
    return res.json({ success: false, message: "Please enter a markdown" });
  }
  const regex = /<\/?[\w\s="/.':;#-\\/\\?]+>/gi;
  const isHtml = regex.test(markdown);
  if (isHtml) {
    return res.json({ success: false, message: "Please enter valid markdown" });
  }
  const html = marked.parse(markdown);
  return res.json({ html, success: true });
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
