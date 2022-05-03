const express = require('express');
const app = express();
const port = 3000;

// For accessing "req.body"
app.use(express.json({ extended: false }));


app.post('/test', async (req, res) => {
  const { string_to_cut } = req.body;
  const result = [];

  for (let i = 0; i < string_to_cut.length; i++) {
    if (i > 0 && i % 3 === 0) {
      result.push(string_to_cut[i - 1]);
    }
  }

  res.json({
    return_string: result.join('')
  });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
