const express = require('express');
const router = express.Router();

// Rota para a página inicial (index.ejs)
router.get('/', (req, res) => {
  res.render('index');
});

// Rota renomeada para 'servicos' (services.ejs)
router.get('/marketing', (req, res) => {
    res.render('mkthome');
  });
  
// Rota renomeada para 'servicos' (services.ejs)
router.get('/programador', (req, res) => {
    res.render('programadorhome');
  });
  
// Rota renomeada para 'servicos' (services.ejs)
router.get('/produtor', (req, res) => {
    res.render('produtorhome');
  });
  

// Rota renomeada para 'quem-somos' (about.ejs)
router.get('/quem-somos', (req, res) => {
  res.render('about');
});


// Rota renomeada para 'contato' (contact.ejs)
router.get('/contato', (req, res) => {
  res.render('contact');
});

// Adicione outras rotas aqui conforme necessário
module.exports = router;
