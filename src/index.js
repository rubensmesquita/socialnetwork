import express 		from 'express';
import socket 		from 'socket.io';
import http 		from 'http';
import ejs 			from 'ejs';
import path 		from 'path';
import bodyParser 	from 'body-parser';
import morgan 		from 'morgan';
import jwt 			from 'jsonwebtoken';
import TwinBcrypt   from 'twin-bcrypt';
import cors 		from 'cors';
import initializeDb from './app/core/db';
import config 		from './app/core/config.json';

// Express connection;
const app = express();
const server = http.Server(app);
const io = socket(server);

app.set('superSecret', 'h1En2lb0Ot2Q46jhCGq39X73ecq3l19L'); // secret variable
app.set('views', config.dir + 'src/app/views');
app.engine('html', ejs.renderFile);
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false })); // Para obter informações POST e / ou parâmetros de URL
app.use(bodyParser.json());
app.set('view engine', 'ejs');
//app.use(morgan('dev')); // Logs de requisição no console node.


initializeDb( db => {

	// Liste server.
	io.listen(app.listen(config.port));

	// Public folder.
	app.use(express.static(config.dir + '/src/app/public'));

	app.use('/components', express.static(config.dir + 'node_modules'));

	// Default router.
	app.get('/', function (req, res){
		res.render('index.html');
	});

	let api = express.Router();

		api.get('/', function(req, res) {
			res.json({"status":0});
		});

	app.use('/api', api); // Router /api/ <router>


	console.log(`server is run port ${config.port}`);

});
