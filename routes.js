var fa = global.fa,
    nodePath = require('path'),
    fs = require('fs'),
    exist = fs.existsSync

module.exports = function (router) {
  router.use(function(req, res, next){
    var path = req.path,
        filePath = nodePath.join(__dirname, 'data', path),
        ext = nodePath.extname(path)

      try{
        if(ext != ""){
          return res.sendFile(filePath)
        }

        filePath = filePath.replace(/\/$/, "")

        var method = req.method.toLowerCase(),
            dirPath = filePath + "/index",
            jsFile = paserPrefer(filePath, method, '.js'),
            jsonFile = paserPrefer(filePath, method, '.json'),
            jsDir = paserPrefer(dirPath, method, '.js'),
            jsonDir = paserPrefer(dirPath, method, '.json' )

        if(jsFile){
          require(jsFile)(req, res, next)
          return
        }
        if(jsonFile){
          return res.sendFile(jsonFile)
        }
        if(jsDir){
          require(jsDir)(req, res, next)
          return 
        }
        if(jsonDir){
          return res.sendFile(jsonDir)
        }
        
      }catch(e){

      }
      next()
  })
}


function paserPrefer(path, method, ext){
  var methodFile = path + "-" + method + ext,
      file = path + ext

  if(exist(methodFile)){
    return methodFile
  }
  if(exist(file)){
    return file
  }
  return ""
}