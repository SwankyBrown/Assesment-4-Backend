const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getRage, submitName, getHelp } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get('/api/Rage', getRage)
app.post('/api/name',submitName)
app.get('/api/help' ,getHelp)

app.listen(4000, () => console.log("Server running on 4000"));

