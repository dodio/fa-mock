//直接引入bluebird
require('./env')
global.Promise = require('bluebird'); 
var fa = global.fa = require("fa")(),
    app = fa.app
app.set("views", [__dirname, "views"].join("/"));

require('./routes')(fa.horse);

module.exports = fa;

fa.start();