"use strict";
exports.__esModule = true;
var countries_mock_1 = require("./countries.mock");
countries_mock_1.countries.forEach(function (country) {
    console.log("INSERT INTO Country (code, name) VALUES('" + country.code + "','" + country.name + "')");
});
