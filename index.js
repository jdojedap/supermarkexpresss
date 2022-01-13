const express = require ('express');
const Database = require ('./mysqlcon');

const app = express();
const port = 3001;

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Servidor OK !!!');
})

app.get('/cards', (req, res)=>
{ 
    const db= new Database()
    const cn=db.getConnection()
    cn.execute(
        'SELECT * FROM profesor', [],
        function(err, results, fields) {      
          res.json(results)      
        }
      );   
 
})

app.post('/cards', (req, res)=>{
    const body = req.body;
    res.json(body)
})


app.listen(port, () => {
    console.log('localhost:'+port);
})