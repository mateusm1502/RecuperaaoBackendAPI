import express from 'express'
import router from './router/operacoes.js'

const app = express()

app.use(express.json())

app.use("/operacoes", router)

const post = 3000
app.listen(post, () => {
    console.log("servidor rodando na porta 3000")
})