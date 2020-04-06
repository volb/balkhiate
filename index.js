require('dotenv').config()
const fetch = require('node-fetch');

const base_url = "https://www.stands4.com/services/v2/poetry.php";
const api_uid = "?uid=" + process.env.STANDS4_API_UID;
const api_token = "&tokenid=" + process.env.STANDS4_API_TOKEN;
const full_base_url = base_url + api_uid + api_token;
let term_query = "&term=";
let data_format = "&format=json";

exports.scrapePoem = function(query) {
    fetch(full_base_url + term_query + query + data_format)
    .then( r => r.json() )
    .then( data => console.log(data) )
}

exports.translate = function () {
    console.log("translation not implemented");
}