const hello = require("./returnHello.js");
const express = require("express");
const app = express();

app.get("/:language", function (req, res) {
	var greeting = hello.generateHelloString(req.params.language.toLowerCase());
	res.send("<h1>" + greeting + "</h1>");
});

app.listen(process.env?.PORT || 3000);
