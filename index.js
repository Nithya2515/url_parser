const express = require('express');
const bodyParser = require('body-parser');
const metafetch = require('metafetch');
const dns = require('dns');

const app = express();
app.use(bodyParser.json());

app.post("/", async (req,res) => {
    try{
        const data =  await mData(req.body.url)
        res.send(parseMeta(data, req.body.name));
    }catch(err){
        res.send('Error')
    }
});
app.post("/dns", (req,res) => {
    
const hostName = new URL(req.body.url);
const a2 = hostName.hostname;
    dns.resolveTxt(a2, (err, records) => {
        console.log(records);
            if(records.flat().indexOf(req.body.txt) >= 0)
            {
            res.send(req.body.txt)
            }else{
                res.send("Not Found")
            }
    });   
});

const mData = (url) => {
    return metafetch.fetch(url, { 
    userAgent: "User Agent/Defaults to Firefox 58",
    flags: { 
        images: false,
        links: false,
        language: false
    },
    http: {
        timeout: 30000,
        headers: {
            Accept: "*/*"
        }
    }
}).then(meta => {return meta});

};

const parseMeta = (metaData, metaName) => {
    if (metaData.hasOwnProperty(metaName)){
        return metaData[metaName]
    }
};

app.listen(4000, () => {
    console.log ('server started')
});


