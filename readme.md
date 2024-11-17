
# Express EJS Template

**Um template leve e eficiente para iniciar projetos com Express e EJS.**  
Este repositório fornece uma estrutura modular e organizada para acelerar o desenvolvimento de aplicações web dinâmicas, utilizando o framework **Express** e o motor de templates **EJS**.

---

## **Estrutura do Projeto**

```plaintext
.
├── public/             # Arquivos estáticos
│   ├── css/            # Arquivos CSS
│   ├── js/             # Scripts JavaScript
│   ├── images/         # Imagens usadas no projeto
│   └── ...             # Outros arquivos públicos
├── views/              # Templates EJS
│   ├── index.ejs       # Página inicial
│   ├── partials/       # Partials reutilizáveis (ex.: header, footer)
│   └── ...             # Outras views
├── server.js           # Arquivo principal do servidor Express
├── package.json        # Configuração do npm
├── .gitignore          # Arquivos ignorados pelo Git
└── README.md           # Documentação do projeto
```

---

## **Como Usar**

### 1. Clone o Repositório
Execute o comando abaixo no terminal para baixar o template para sua máquina local:

```bash
git clone https://github.com/LucasUltremare/Express-Starter.git
```

### 2. Instale as Dependências
Navegue para a pasta do projeto clonado e instale as dependências necessárias:

```bash
cd Express-Starter
npm install
```

### 3. Inicie o Servidor
Após instalar as dependências, execute o servidor local:

```bash
npm start
```

O servidor estará rodando em `http://localhost:3000`.

---

## **Funcionalidades**

- **Express**: Framework minimalista para Node.js.
- **EJS**: Motor de templates para renderização dinâmica.
- **Estrutura Modular**: Diretórios organizados para facilitar escalabilidade e manutenção.
- **Pronto para Produção**: Fácil de expandir e configurar para deploy.

---

## **Contribua**

Contribuições são bem-vindas! Para contribuir:
1. Faça um fork do repositório.
2. Crie uma nova branch para suas alterações:
   ```bash
   git checkout -b minha-nova-feature
   ```
3. Envie um pull request.

---

## **Licença**

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
