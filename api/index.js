require('dotenv').config({ path: './config/.env' })
const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
const PORT = process.env.PORT || 8081

app.use(cors({ credentials: true }))
app.use(express.json())
// Apply all /api routes
app.use('/api', routes)
app.set('json spaces', 4)

// Start the server
app.listen(PORT, function () {
  console.log(`Server is starting on port ${PORT}`)
})
