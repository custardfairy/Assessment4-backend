const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require("./controller");
const { getFortune } = require("./controller");
const { getInspo } = require("./controller");
const { getAdviceByCategory } = require("./controller");
const { postAdvice } = require("./controller");
const { deleteAdvice } = require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/inspiration", getInspo);
// app.get("/api/goaladvice", getAdviceHandler);
app.get("/api/goal/advice/", getAdviceByCategory);
app.post("/api/goal/advice", postAdvice);
app.delete("/api/goal/:category", deleteAdvice);
app.listen(4000, () => console.log("Server running on 4000"));
