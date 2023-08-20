import Fastify from 'fastify';
import { getMovies } from './routes/getMovies.js';
import { addMovies } from './routes/addMovies.js';

const app = Fastify({
	logger: {
		transport: {
			target: 'pino-pretty',
			options: {
				translateTime: 'SYS:hh:MM:ss TT',
				colorize: true,
			},
		},
	},
});

app.register(addMovies);
app.register(getMovies);

app.listen({ port: 3000 }, (err, address) => {
	if (err) {
		app.log.error(err);
		process.exit(1);
	}
	// app.log.info(`Server listening on ${address}`);
});