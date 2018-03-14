var cheerio = require("cheerio");
var request = require("request");
var mongoose = require("mongoose");
var db = require("../models")
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/homework", {
    // useMongoClient: true
});

console.log("Scraping test");
request("https://www.reddit.com/r/funny/", function(error, response, html){
    var $ = cheerio.load(html);
;
    $(".thing").each(function(i, element){
        var results = {};
        var title = $(element).find(".title").children("a").text();
        var link = $(element).find(".title").children("a").attr("href");
        var thumbnail = $(element).find(".thumbnail").children("img").attr("src");
        results.title =  title ;
        if(link.includes("/r/funny")) {
            link = "https://www.reddit.com" + link
        };
        results.link = link;
        thumbnail = "https:" + thumbnail;
        results.thumbnail = thumbnail;
        console.log(results)
        var funny = new db.Funny(results)
        funny.save(function(err, funny){
            if (err) return console.error(err);
        })
    })
    



})