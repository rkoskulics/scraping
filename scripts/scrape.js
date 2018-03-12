var cheerio = require("cheerio");
var request = require("request");

console.log("Scraping test");
request("https://www.reddit.com/r/funny/", function(error, response, html){
    var $ = cheerio.load(html);
    var results = [];
    $(".title").each(function(i, element){
        var title = $(element).children("a").find("rel")
        results.push({ title: title });
    })
    console.log(results)
})