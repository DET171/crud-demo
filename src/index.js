import Fastify from 'fastify';

const app = Fastify({
	logger: {
		transport: {
			target: 'pino-pretty',
			options: {
				translateTime: 'HH:MM:ss Z',
				colorize: true,
			},
		},
	},
});


app.listen({ port: 3000 }, (err, address) => {
	if (err) {
		app.log.error(err);
		process.exit(1);
	}
	app.log.info(`Server listening on ${address}`);
});