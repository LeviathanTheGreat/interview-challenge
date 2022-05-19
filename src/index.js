const app = require('./app');

const port = 80
const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});