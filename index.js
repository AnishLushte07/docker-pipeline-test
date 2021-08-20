const express = require('express');

const app = express();

app.get('/', function(res, res) {
    return res.send({
        msg: 'This is version 1 pipeline'
    })
})

app.listen(4500, () => console.log('runngin on 4500'))