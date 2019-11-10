const electron = require("electron");
const cheerio = require("cheerio");
const request = require("request");

const baseURL = "https://www.lectio.dk/lectio/680/login.aspx"

request(baseURL, (error, response, html) => {
     if (!error && response.statusCode == 200) {
          const chload = cheerio.load(html);

          const mainName = chload("title").text();
          document.getElementById("mainHeader").innerHTML = mainName.slice(0, 17);

          const userNameInput = chload("input");
          document.getElementById("username").innerHTML = userNameInput;
     }
     else {
          console.log("apparently didn't work");
     }
     
});