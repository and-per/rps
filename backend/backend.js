const express = require('express')

const app = express()
const port = 3000

app.get('/hello', function(req, res){
    res.send("hi.")
})

app.use('/', express.static(__dirname + '/../frontend/'))

app.listen(port, function() {
    console.log(port)
}
)
