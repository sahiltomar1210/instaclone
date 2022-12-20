const express = require("express");
const data = require("../Mock-data/data.json")
const PORT = process.env.PORT || 3004;
const path = require('path');
const app = express();
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/data", (req, res) => {
    res.json({ data});
});
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});