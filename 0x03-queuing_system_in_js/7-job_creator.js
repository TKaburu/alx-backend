import kue from 'kue';

// create jobs
const jobs = [
	{
		phoneNumber: '4153518780',
		message: 'This is the code 1234 to verify your account'
	},
	{
		phoneNumber: '4153518781',
		message: 'This is the code 4562 to verify your account'
	},
	{
		phoneNumber: '4153518743',
		message: 'This is the code 4321 to verify your account'
	},
	{
		phoneNumber: '4153538781',
		message: 'This is the code 4562 to verify your account'
	},
	{
		phoneNumber: '4153118782',
		message: 'This is the code 4321 to verify your account'
	},
	{
		phoneNumber: '4153718781',
		message: 'This is the code 4562 to verify your account'
	},
	{
		phoneNumber: '4159518782',
		message: 'This is the code 4321 to verify your account'
	},
	{
		phoneNumber: '4158718781',
		message: 'This is the code 4562 to verify your account'
	},
	{
		phoneNumber: '4153818782',
		message: 'This is the code 4321 to verify your account'
	},
	{
		phoneNumber: '4154318781',
		message: 'This is the code 4562 to verify your account'
	},
	{
		phoneNumber: '4151218782',
		message: 'This is the code 4321 to verify your account'
	}
];

const queue = kue.createQueue();

// loop each job
jobs.forEach((jobData) => {
	const job = queue.create('push_notification_code_2', jobData);

	// job creation
	job.on('created', () => {
		console.log(`Notification job created: ${job.id}`);
	});

	// job completion
	job.on('complete', () => {
		console.log(`Notification job ${job.id} completed`);
	});


	job.on('failed', (err) => {
		console.log(`Notification job ${job.id} failed: ${err}`);
	});

	job.on('progress', (progress) => {
		console.log(`Notification job ${job.id} ${progress}% complete`);
	});

	job.save();
});

queue.on('ready', () => {
	console.log('Worker is ready and listening for jobs');
});

queue.on('error', (err) => {
	console.error('Error in queue:', err);
});
