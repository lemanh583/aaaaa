const express = require("express")
const app = express()
const axios = require("axios")

app.get("/", async (req, res) => {
    try {
        let rs = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return res.send({success: true, data: rs.data})
    } catch (error) {
        return res.status(500).send({success: false, message: error.message})
    }
})

const PORT = 3000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))