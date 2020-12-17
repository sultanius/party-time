const app = require('./app');
const http = require('http');
const server = http.createServer(app);

const PORT = 4200
server.listen(PORT, () => {
    console.log(`work at port - ${PORT}`);
})