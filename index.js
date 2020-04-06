require('dotenv').config()

const base_url = "https://www.stands4.com/services/v2/poetry.php";
const api_uid = "?uid=" + process.env.STANDS4_API_UID;
const api_token = "&tokenid=" + process.env.STANDS4_API_TOKEN;
const full_base_url = base_url + api_uid + api_token;
let term_query = "&term=";
let data_format = "&format=json";

exports.scrape = function() {

}

exports.translate = function () {
}