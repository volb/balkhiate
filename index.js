require('dotenv').config()
const fetch = require('node-fetch');

const baseUrl = "https://www.stands4.com/services/v2/poetry.php";
const apiUid = "?uid=" + process.env.STANDS4_API_UID;
const apiToken = "&tokenid=" + process.env.STANDS4_API_TOKEN;
const fullBaseUrl = baseUrl + apiUid + apiToken;
let termQuery = "&term=";
let dataFormat = "&format=json";

exports.scrapePoem = async function(query) {
    let response = await fetch(fullBaseUrl+termQuery+query+dataFormat);
    let data = await response.json();
    return data;
}