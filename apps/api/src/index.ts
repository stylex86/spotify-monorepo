import app from './app'

// Ejecuta el servidor
app.listen({ host: '0.0.0.0', port: 3000 }, function (err, address) {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }

  console.log(`Servidor ejecutandose en ${address}`);
});
