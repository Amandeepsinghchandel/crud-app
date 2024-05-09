const fs = require("fs");

function logReqRes(){
    return(req, res, next) => {
        fs.appendFile(
          "log.txt",
          `\n ${Date.now()}  ${req.method} ${req.url}  ${req.ip}\n`,
          (err, data) => {
            next();
          }
        )
}
}

module.exports=logReqRes;