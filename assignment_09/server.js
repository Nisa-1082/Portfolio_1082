const { error } = require('console');
const fs = require('fs');
const http = require('http');

const hostname = 'localhost';
const port = 3000;


const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end();
  });

let readMsg = () => {
    return new Promise((reslove, reject) => {
        fs.readFile("cloth1.json", "utf-8", (error, data) => {
            if(error)
            {
                reject(error);
            }
            else
            {
                reslove(data);
            }
        });
    });
}

// จำนวนเสื้อผ้าตามที่กำหนด
let editJson = (data) => { 
    const stock = {
        item1: 12,
        item2: 13,
        item3: 50,
        item4: 22,
        item5: 55,
        item6: 87,
        item7: 12,
        item8: 29,
        item9: 10
    }
    var newclothdata = JSON.parse(data);
        for (let [key, value] of Object.entries(stock)) {
            newclothdata[key]["count"] = value;
        }

        resolve(newclothdata);
}

let writeMsg = (data) =>{
    return new Promise((reslove, reject) => {
        var jsondata = JSON.stringify(data, null, 4);
        fs.writeFile("clothfinal.json", jsondata, (error) => {
            if(error)
            {
                reject(error);
            }
            else
            {               
                reslove(data);
            }
        });
    });
}

server.listen(port, hostname, () => {
console.log(`Server running at   http://${hostname}:${port}/`);
});