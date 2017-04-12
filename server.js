'use strict'

const Hapi = require('hapi')
const inert = require('inert')
const server = new Hapi.Server()
const data = require('./database/utiles.db.js');
server.connection({
  port: 3000
})
data.createTable((err, res)=>{
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
    path: '/data',
    handler: (request, reply) => {
      data.add(request.payload,(err)=>{
        reply(request.payload)
      })
    }
  })
  server.route({
    method: 'POST',
    path: '/update',
    handler: (request, reply) => {
      data.updateById(request.payload,(err)=>{
        reply(request.payload)
      })
    }
  })
  server.route({
    method: 'GET',
    path: '/data',
    handler: (request, reply) => {
      data.select((err,result)=>{
        reply(result)
      })
    }
  })
  server.route({
    method: 'DELETE',
    path: '/delete/{id}',
    handler: (request, reply) => {
      var id = encodeURIComponent(request.params.id);
      data.deleteById(id,(err)=>{
        if(err){
          reply([{error : 'error'}]);
        }
        data.select((err,result)=>{
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
