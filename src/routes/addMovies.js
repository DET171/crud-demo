import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const addMovies = async (fastify, opts, done) => {
	['/movies', '/movies/'].forEach((path) => {
		fastify.post(path, async (req, reply) => {
			const { title, release, director, runtime, genre, plot, rating } = req.body;
			const releaseDate = new Date(release);

			const movie = await prisma.movie.create({
				data: {
					title,
					release: releaseDate,
					director,
					runtime,
					genre,
					plot,
					rating,
				},
			});

			return reply
				.code(200)
				.header('Content-Type', 'application/json; charset=utf-8')
				.send(movie);
		});
	});

	done();
};