const axios = require("axios");
const cheerio = require("cheerio");

const getHtml = async () => {
    try {
        return await axios.get("https://www.yeongdo.go.kr/marinocamping/00003/00015/00028.web#?");
    } catch (error) {
        console.error(error);
    }
}

getHtml()
    .then(html => {
        let ulList = [];
        console.log(typeof html.data)
        const $ = cheerio.load(html.data);
        console.log($('button[title|="예약가능"]').text())
    })
    .catch(err => {
        console.log("error");
    })