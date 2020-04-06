var http = require('http')

var url = process.argv[2]

http.get(url, function (resp) {
    var respContent = ""
    resp.setEncoding('utf8')

    resp.on("data",function (data) {
        respContent += data
    }).on("end", function () {
            console.log(respContent.length)
            console.log(respContent)
        })
})



