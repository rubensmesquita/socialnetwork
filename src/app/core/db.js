import mysql 	from 'mysql';
import config 	from './config.json';

export default callback => {

	// Mysql
	const connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '',
	  database : 'socialnetwork'
	});

	// Connect to DB
	connection.connect();

	callback(connection);
	
}