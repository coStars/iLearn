'use strict'

const Hapi = require('hapi')
const inert = require('inert')
const vision = require('vision')

const server = new Hapi.Server()
server.connection({
  port: 3000
})
server.register([vision, inert], (err) => {
  if (err) {
    throw err
  }
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply.file('assets/html/index.html')
      // reply('index.html')
    }
  })
  server.route(
    {
      method: 'GET',
      path: '/assets/{file*}',
      handler: {
        directory: {
          path: 'assets'
        }
      }
    }
)
})
server.start((err) => {
  if (err) {
    throw err
  }
  console.log(`Server running at: ${server.info.uri}`)
})
