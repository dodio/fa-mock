var nodePath = require('path')

module.exports = {
  "middleware": {
    "static": {
      "urlPattern": "/",
      "publicDir": nodePath.join(__dirname, '../data'),
      "disable": true
    }
  }
}