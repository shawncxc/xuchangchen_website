const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(80, () => {
  console.log(`Server running on port 80`);
});
