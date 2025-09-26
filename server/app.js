const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + "/public/index.html")
})
app.get('/character/1', (req, res) => {
    res.sendFile(process.cwd() + "/public/character/max.html")
})
app.get('/character/2', (req, res) => {
    res.sendFile(process.cwd() + "/public/character/shara.html")
})
app.get('/character/3', (req, res) => {
    res.sendFile(process.cwd() + "/public/character/marden.html")
})
app.get('/character/4', (req, res) => {
    res.sendFile(process.cwd() + "/public/character/casitra.html")
})
app.get('/character/5', (req, res) => {
    res.sendFile(process.cwd() + "/public/character/sparrow.html")
})

// 404 handler (MUST be last)
app.use((req, res) => {
  res.status(404).sendFile(process.cwd() + "/public/error.html")
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})