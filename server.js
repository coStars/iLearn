'use strict'

const Hapi = require('hapi')
const inert = require('inert')
const vision = require('vision')
const handlebars = require('handlebars')

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
      reply.view('index')
      // reply('index.html')
    }
  })
  server.route(
    {
      method: 'GET',
      path: '/public/{file*}',
      handler: {
        directory: {
          path: 'public'
        }
      }
    }
)
})
server.views({
  engines: {
    html: handlebars
  },
  path: 'public',
})
server.start((err) => {
  if (err) {
    throw err
  }
  console.log(`Server running at: ${server.info.uri}`)
})
