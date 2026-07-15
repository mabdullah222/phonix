const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        application: "Demo ECS Application",
        version: process.env.APP_VERSION || "1.0.0",
        message: "Successfully deployed using AWS CodePipeline!",
        hostname: process.env.HOSTNAME
    });
});

app.get("/health", (req, res) => {
    res.status(200).send("Healthy");
});

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});