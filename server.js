const express = require("express")
const app = express()
const PORT = 4500;
const path = require("path")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("./public/"))

const clientRoutes = require("./routes/client-routes")
app.use("/", clientRoutes)


app.listen(PORT, () => console.log(`We are listening http://localhost:${PORT}`))