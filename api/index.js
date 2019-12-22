require('dotenv').config({ path: './config/.env'});
const express = require("express");
const app = express();
const cors = require("cors");
const routes = require('./routes/routes');
const PORT = process.env.PORT || 8081;

//Allow this server to all origins
app.use(cors()); //Warning: Later Cors MUST be enabled ONLY to whitelist array!!!;

//Apply all /api routes
app.use("/api", routes);

//Start the server
app.listen(PORT, function() {
  console.log(`Server is starting on port ${PORT}`);
});