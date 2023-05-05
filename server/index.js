const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, postNameInOrb } = require('./controller.js')

app.get("/api/fortune", getFortune);
app.get("/api/compliment", getCompliment);
app.post('/submit-name', postNameInOrb);

app.listen(4000, () => console.log("Server running on 4000"));
