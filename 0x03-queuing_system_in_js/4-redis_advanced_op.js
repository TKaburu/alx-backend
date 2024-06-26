import { createClient, print } from 'redis';
const redisClient = createClient();

redisClient.on('connect', () => {
  console.log('Redis client connected to the server');
});

redisClient.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err.message}`);
});

// Function to create the hash
function createHolbertonSchools() {
  redisClient.hset('HolbertonSchools', 'Portland', 50, print);
  redisClient.hset('HolbertonSchools', 'Seattle', 80, print);
  redisClient.hset('HolbertonSchools', 'New York', 20, print);
  redisClient.hset('HolbertonSchools', 'Bogota', 20, print);
  redisClient.hset('HolbertonSchools', 'Cali', 40, print);
  redisClient.hset('HolbertonSchools', 'Paris', 2, print);
}

// Function to display the hash
function displayHolbertonSchools() {
  redisClient.hgetall('HolbertonSchools', (err, object) => {
    if (err) {
      console.error(`Error: ${err.message}`);
      return;
    }
    console.log(object);
  });
}

createHolbertonSchools();
displayHolbertonSchools();
