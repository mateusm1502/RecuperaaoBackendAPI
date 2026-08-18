import express from 'express'
const router = express.Router()

router.post("/somar", ( req, res ) => {
    const{num1, num2} = req.body
    const somar = num1 + num2
    res.send({ mensagem })
})

router.post("/subtrair", ( req, res ) => {
    const{num1, num2} = req.body
    const subtrair = num1 - num2
    res.status
})

router.post("/", ( req, res ) => {
    const{num1, num2} = req.body
    const somar = num1 + num2
    res.status
})

router.post("/somar", ( req, res ) => {
    const{num1, num2} = req.body
    const somar = num1 + num2
    res.status
})

export default router