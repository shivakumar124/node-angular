// const express = require('express'),
//     path = require('path'),
//     bodyParser = require('body-parser'),
//     cors = require('cors'),
//      app = express(),
//     mongoose = require('mongoose');
//     const port = process.env.PORT || 3001;
//     config = require('./config/database.config');
//     // const productRoute = require('./app/routes/product.routes');
// mongoose.Promise = global.Promise;
// mongoose.connect(config.url, { useNewUrlParser: true }).then(
//   () => {console.log('Database is connected') },
//   err => { console.log('Can not connect to the database'+ err)}
// );

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
cors = require('cors'),
app.use(bodyParser.urlencoded({ extended: true }))
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
   useNewUrlParser: true
}).then(() => {
   console.log("Successfully connected to the database");    
}).catch(err => {
   console.log('Could not connect to the database', err);
   process.exit();
});
app.use(bodyParser.json());
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With,Content-Type,Accept');
    next();
})
app.get('/', (req, res) => {
   res.json({"message": "Welcome to angular with node"});
});

// listen for requests
require('./app/routes/product.routes.js')(app);
app.listen(3001, () => {
   console.log("Server is listening on port 3001");
});

//     // const app = express();
//     app.use(bodyParser.json());
//     app.use(cors());
    
//     app.get('/', function (req, res) {
//         res.send('hello world')
//       })
//       require('./app/routes/product.routes.js')(app);
//       app.listen(3000, () => {
//           console.log("Server is listening on port 3000");
//       });












// const express = require('express');
//  const bodyParser = require('body-parser');
// const app = express();

//  app.use(bodyParser.urlencoded({ extended: true }))
// // Configuring the database
// const dbConfig = require('./config/database.config.js');
// const mongoose = require('mongoose');

// // mongoose.Promise = global.Promise;

// // Connecting to the database
// mongoose.connect(dbConfig.url, {
//     useNewUrlParser: true
// }).then(() => {
//     console.log("Successfully connected to the database");    
// }).catch(err => {
//     console.log('Could not connect to the database', err);
//     process.exit();
// });
// app.use(bodyParser.json())
// app.get('/', (req, res) => {
//     res.json({"message": "Welcome to node"});
// });

// // listen for requests
// require('./app/routes/product.routes.js')(app);
// app.listen(3000, () => {
//     console.log("Server is listening on port 3000");
// });