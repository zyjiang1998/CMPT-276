const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5050
var app = express();

const {Pool} = require('pg');
var pool;
pool = new Pool({
  connectionString:process.env.DATABASE_URL
});
pool.connect();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req,res) =>{
  var create_table = `create table if not exists tokimon(id serial, name text, weight int, height int, fly int, fight int, fire int, water int, electric int, frozen int, total int, trainer_name text)`
    pool.query(create_table, (error, result) => {
    });
    res.render('pages/home');
});

app.get('/add', (req, res) => res.render('pages/add'));

app.post('/submit', (req, res) =>{
  var addQuery = `insert into tokimon(name, weight, height, fly, fight, fire, water, electric, frozen, total, trainer_name) values('${req.body.name}',${req.body.weight},${req.body.height},${req.body.fly},${req.body.fight},${req.body.fire},${req.body.water},${req.body.electric},${req.body.frozen},${req.body.total},'${req.body.Trainer}')`
  pool.query(addQuery, (error, result) => {
    if(error)
      res.end(error);
  });
  res.render('pages/submit');
});

app.get('/display', (req, res) =>{
  var displayQuery = `select * from tokimon`;
  pool.query(displayQuery, (error, result)=>{
    if(error)
      res.end(error);
    var results = {'rows': result.rows};
    res.render('pages/display', results);
    });
});
app.get('/delete', (req, res) => res.render('pages/delete'));
app.post('/removed', (req,res) => {
    var deleteQuery = `delete from tokimon where id=${req.body.delete1}`;
    pool.query(deleteQuery, (error, result) => {
      if (error)
        res.end(error);
    });
    res.render('pages/removed');
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
