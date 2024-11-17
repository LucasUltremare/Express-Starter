const express = require('express');
const router = express.Router();

// Rota para renderizar qualquer página EJS com base na URL
router.get('/:page', (req, res) => {
  const page = req.params.page;
  
  // Renderiza a página correspondente, se existir
  res.render(page, { page });
});

module.exports = router;
