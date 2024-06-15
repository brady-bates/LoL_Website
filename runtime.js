"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Express = require('express');
// const Key_file = require('./riot_key.js');
var Axios = require('axios');
var APP = Express();
var PORT = 3000;
var riot_key_js_1 = require("./riot_key.js");
var API_URL = "https://na1.api.riotgames.com";
var request_param = "/" + "riot_tuxedo";
var request_url = "/riot/account/v1/accounts/me" +
    "?api_key=" + riot_key_js_1.API_KEY;
Axios({
    method: 'get',
    url: API_URL + request_url
})
    .finally(function (response) {
    if (typeof response !== undefined) {
        console.log("Data: " + response.data
            + "\nStatus: " + response.status);
    }
    else {
        console.log(typeof response + 2);
    }
});
/*  GET request to root dir  */
APP.get('/', function (req, res) {
    res.send();
});
// Starts server on $port=3000
APP.listen(PORT, function () {
    console.log("Server is running at http://localhost:".concat(PORT));
});
