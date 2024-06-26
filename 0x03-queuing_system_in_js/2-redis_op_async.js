import { createClient } from 'redis';
import redis from 'redis';
import { promisify } from 'util';

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

// async
const getAsync = promisify(redisClient.get).bind(redisClient);

async function displaySchoolValue(schoolName) {
  try {
    const reply = await getAsync(schoolName);
    console.log(reply);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

(async () => {
  await displaySchoolValue('Holberton');
  setNewSchool('HolbertonSanFrancisco', '100');
  await displaySchoolValue('HolbertonSanFrancisco');
})();
