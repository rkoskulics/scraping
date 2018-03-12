var cheerio = require("cheerio");
var request = require("request");
var mongoose = require("mongoose");

console.log("Scraping test");
request("https://www.reddit.com/r/funny/", function(error, response, html){
    var $ = cheerio.load(html);
    var results = [];
    $(".thing").each(function(i, element){
        var title = $(element).find(".title").children("a").text();
        var link = $(element).find(".title").children("a").attr("href");
        var thumbnail = $(element).find(".thumbnail").children("img").attr("src");
        results.push({ title: title });
        if(link.includes("/r/funny")) {
            link = "https://www.reddit.com" + link
        };
        results.push({ link: link});
        thumbnail = "https:" + thumbnail;
        results.push({ thumbnail: thumbnail});
    })
    console.log(results)

    mongoose.Promise = Promise;
    mongoose.connect("mongodb://localhost/homework", {
        useMongoClient: true
    });
var db = require("../models")

db.Funny.create(results)
.then(function(dbFunny){
    console.log(dbFunny)
})
.catch(function(err){
    return (err)
})

})