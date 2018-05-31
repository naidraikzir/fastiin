const fastify = require('fastify')();

const start = async server => {
  try {
    await server.listen(8080, '0.0.0.0');
    console.log(`server is listening on ${server.server.address().port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

fastify.get('/', async (request, reply) => {
  reply.send('Hello Ultimate Badazz 🤘!');
});

start(fastify);
