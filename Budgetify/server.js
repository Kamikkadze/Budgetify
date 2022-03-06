const express = require("express")
const logger = require("morgan")
const routes = require("./routes")

const app = express()

const port = 3000;

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api", routes)

app.listen(port, () => {
    console.log(`listening on localhost:${port}`)
})