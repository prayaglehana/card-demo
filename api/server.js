const express = require('express')
var modelApiRouter = require("./model/updateDB");

const app = express()
const port = 8000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {

  res.send('Hello World!')

})

app.use("/model", modelApiRouter);

