const express = require("express")
const app = express()
const PORT = 4000;
const path = require("path")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("./public/"))

const clientRoutes = require("./routes/client-routes")
app.use("/", clientRoutes)

const apiRoutes = require("./routes/api-routes")
app.use(apiRoutes);


app.listen(PORT, () => console.log(`We are listening http://localhost:${PORT}`))