const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send(`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Home</title></head><body style="font-family:Arial,Helvetica,sans-serif;margin:40px;"><h1>Bem-vindo</h1><p>Esta é a página inicial da aplicação Node.js.</p><nav><a href="/about">Sobre</a> | <a href="/contact">Contato</a> | <a href="/time">Hora do servidor</a></nav></body></html>`)
})

app.get('/about', (req, res) => {
    res.send(`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Sobre</title></head><body style="font-family:Arial,Helvetica,sans-serif;margin:40px;"><h1>Sobre</h1><p>Aplicação exemplo para o trabalho: modelo request-response com múltiplas rotas que retornam HTML.</p><p><a href="/">Voltar</a></p></body></html>`)
})

app.get('/contact', (req, res) => {
    res.send(`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Contato</title></head><body style="font-family:Arial,Helvetica,sans-serif;margin:40px;"><h1>Contato</h1><p>Você pode simular um formulário aqui. Para esta demonstração, apenas exibimos informações estáticas.</p><address>Email: contato@exemplo.com</address><p><a href="/">Voltar</a></p></body></html>`)
})

app.get('/time', (req, res) => {
    const now = new Date()
    res.send(`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Hora</title></head><body style="font-family:Arial,Helvetica,sans-serif;margin:40px;"><h1>Hora do servidor</h1><p>Hora ISO: ${now.toISOString()}</p><p>Hora local: ${now.toString()}</p><p><a href="/">Voltar</a></p></body></html>`)
})

app.use((req, res) => {
    res.status(404).send(`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>404</title></head><body style="font-family:Arial,Helvetica,sans-serif;margin:40px;"><h1>404 - Não encontrado</h1><p>A rota ${req.originalUrl} não existe.</p><p><a href="/">Voltar</a></p></body></html>`)
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
