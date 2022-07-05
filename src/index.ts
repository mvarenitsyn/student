import express from 'express'
import {Request, Response} from 'express'

const app = express()

const port = process.env.PORT || 3003

app.get('/', (req:Request, res: Response) => {
    res.send('Hello world!!?!')
})
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})