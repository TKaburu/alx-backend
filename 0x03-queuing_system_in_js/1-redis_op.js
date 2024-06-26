import { createClient } from 'redis';
import redis from 'redis';

const redisClient = createClient();

redisClient.on('connect', () => {
	console.log('Redis client connected to the server');
});

redisClient.on('error', (err) => {
	console.log(`Redis client not connected to the server: ${err.message}`);
});

function setNewSchool(schoolName, value) {
	redisClient.set(schoolName, value, redis.print);
};

function displaySchoolValue(schoolName) {
	redisClient.get(schoolName, (err, response) => {
		if (err) {
			console.error(`Error: ${err.message}`);
			return;
		}
		console.log(response);
	});

}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
