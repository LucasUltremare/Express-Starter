const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const compression = require('compression');
const minifyHTML = require('express-minify-html');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar o EJS como mecanismo de template
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// **Otimização:** Combinar arquivos estáticos
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '1d', // 1 dia
  etag: false
}));

// Usar o arquivo de rotas
app.use('/', routes);

// **Otimização:**  Aplicar compressão antes de outras middlewares
app.use(compression());

// **Otimização:** Configurar o EJS para cache
app.set('view cache', true);

// **Otimização:** Minificar HTML
app.use(minifyHTML({
  override: true,
  htmlMinifier: {
    removeComments: true,
    collapseWhitespace: true,
    minifyJS: true,
    minifyCSS: true
  }
}));

// Iniciar o servidor
const server = app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);

  // Usar BrowserSync apenas em desenvolvimento
if (process.env.NODE_ENV === 'production') {
  app.use(minifyHTML({
    override: true,
    htmlMinifier: {
      removeComments: true,
      collapseWhitespace: true,
      minifyJS: true,
      minifyCSS: true
    }
  }));
}
}); 