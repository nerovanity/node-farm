const fs = require('fs');
var http = require('http');
const url = require('url');
const replace_template = require('./modules/replace_card_template');



const data = fs.readFileSync('./dev-data/data.json', 'utf-8');

html = fs.readFileSync('templates/overview.html', 'utf-8');
const card = fs.readFileSync('templates/cards.html','utf-8');

const server = http.createServer((req, res) => {
    const path = req.url;

    const {query , pathname} = url.parse(req.url, true);

    var json_data = JSON.parse(data);

    if(path == '/' || path == '/overview'){
        res.writeHead(200, {'content-type': 'text/html'});
        let cards = json_data.map((product) => replace_template(card, product));
        html = html.replace("{cards_figure}", cards);
        res.end(html);
    }

    else if(pathname == '/product'){
        res.writeHead(200, {'content-type': 'text/html'});

        product = json_data[query.id];

        let pro = fs.readFileSync('templates/product.html', 'utf-8');
        let output = replace_template(pro, product);
        res.end(output);
    }
    else{
        res.writeHead(404, {'content-type' : 'text/html'})

        res.end('<h1 style="color: red;">error 404 </h1>');
    }
    
});


server.listen(8000, '127.0.0.1', () => {
    console.log('server started ......');
    
    console.log('press ctrl+c to stop');
});
