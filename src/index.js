const express = require('express');

const app = express();

app.get("/", (request, response) => {
    return response.json({message: "Teste"});
})

app.listen(5555)