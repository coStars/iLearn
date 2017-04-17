'use strict'

const Hapi = require('hapi')
const inert = require('inert')
const server = new Hapi.Server()
const data = require('./database/utiles.db.js');
server.connection({
  port: 3000
})
data.createTable((err, res) => {
  if (err) {
    throw err;
  }
});
server.register(inert, (err) => {
  if (err) {
    throw err
  }
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply.file('public/index.html')
    }
  })
  server.route({
    method: 'POST',
    path: '/learn',
    handler: (request, reply) => {
      data.add(request.payload, (err) => {
        if (err) {
          reply([{
            error: 'error'
          }]);
        }
        data.select((err, result) => {
          reply(result);
        });
      })
    }
  })
  server.route({
    method: 'PUT',
    path: '/learn',
    handler: (request, reply) => {
      data.updateById(request.payload, (err) => {
        if (err) {
          reply([{
            error: 'error'
          }]);
        }
        data.select((err, result) => {
          reply(result);
        });
      })
    }
  })
  server.route({
    method: 'GET',
    path: '/learn',
    handler: (request, reply) => {
      data.select((err, result) => {
        reply(result)
      })
    }
  })
  server.route({
    method: 'DELETE',
    path: '/learn/{id}',
    handler: (request, reply) => {
      data.deleteById(request.params.id, (err) => {
        if (err) {
          return reply([{
            error: 'error'
          }]);
        }
        data.select((err, result) => {
          reply(result);
        });
      });
    }
  })
  server.route({
    method: 'GET',
    path: '/public/{file*}',
    handler: {
      directory: {
        path: 'public'
      }
    }
  })
})

server.start((err) => {
  if (err) {
    throw err
  }
  // eslint-disable-next-line no-console
  console.log('Server running at:' + server.info.uri)
})
