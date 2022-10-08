const express = require("express");
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

express()

app.use(express.static(path.join(__dirname, "assets")));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// ROTA
app.get("/", (req, res) => {
    res.render('index.html');
});


app.listen(port, () => { 
    console.log(`servidor rodando em http://localhost:${port}`)
});

