'use strict'

const Hapi = require('hapi')
const inert = require('inert')
const server = new Hapi.Server()

server.connection({
  port: 3000
})
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
