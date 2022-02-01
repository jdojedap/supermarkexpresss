const express = require ('express');
const Database = require ('./mysqlcon');
const cors =require('cors')
const app = express();
const port = 3001;
app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('SUPERMARKET!!');
})
app.get('/supermarket', (req, res)=>
{ 
    const db= new Database()
    const cn=db.getConnection()
    cn.execute(
        'SELECT * FROM carnes', [],
        function(err, results, fields) {      
          res.json(results)      
        }
      );   
 
})
app.post('/supermarket', (req, res) => {

    const body = req.body;
    const db = new Database()
    const cn = db.getConnection()
    const query = `INSERT INTO supermarket
                (pollo, pescado, chancho, res) values
                 (?,?,?,?,?)`
    
    
                 
                 
    cn.execute(
        query, [body.pollo, body.pescado, body.chancho, body.res],
        function (err, results, fields) {
            if (err) {
                res.status(500).json({
                    message: err.message
                })
            }
            else {
                res.json(body)
            }
        }
    );

})


app.post('/supermarket', (req, res)=>{
    const body = req.body;
    res.json(body)
})


app.listen(port, () => {
    console.log('localhost:'+port);
})
