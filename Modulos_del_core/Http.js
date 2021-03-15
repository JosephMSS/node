const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
  console.log('Nueva peticion!');
  console.log(req.url);
  switch (req.url) {
    case '/siuuu':
      res.write('Siuuuuu!!');
      res.end();

      break;

    default:
      res.write('Digamelo mamod :(');
      res.end();

      break;
  }
//   res.writeHead(201,  {'Content-Tye': 'text/plain' });
//   res.write('Hola soy una respuesta htp');
//   res.end();
}
