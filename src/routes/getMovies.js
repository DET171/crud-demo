import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getMovies = async (fastify, opts, done) => {
	['/movies', '/movies/'].forEach((path) => {
		fastify.get(path, async (req, reply) => {
			const movies = await prisma.movie.findMany();

			return reply
				.code(200)
				.header('Content-Type', 'application/json; charset=utf-8')
				.send(movies);
		});
	});

	fastify.get('/movies/:id', async (req, reply) => {
		const { id } = req.params;

		const movie = await prisma.movie.findUnique({
			where: { id: Number(id) },
		});

		if (!movie) {
			return reply
				.code(404)
				.header('Content-Type', 'application/json; charset=utf-8')
				.send({
					code: 404,
					error: 'Not found',
				});
		}

		return reply
			.code(200)
			.header('Content-Type', 'application/json; charset=utf-8')
			.send(movie);
	});
	done();
};