var path = require("path")

module.exports = function(app){
    app.get('/', function (res, res) {
        res.render(path.join(__dirname, '../views/index.handlebars'));
    });
}