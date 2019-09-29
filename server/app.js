import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send("Hello world, this is de-scholar")
})

app.listen(3000, () => {
    console.log('ur app is listening to port 3000')
})