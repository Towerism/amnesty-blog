import express from 'express'
import cors from 'cors'
const app = express()

app.use(cors())

app.get('/version', (request, response) => {
  response.send('1.0.0')
})

app.listen(3000, () => {
  console.log('Amnesty Api running on port 3000')
})
