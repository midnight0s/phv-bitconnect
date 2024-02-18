const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/abs', (req, res) => {
  const planks = req.query.sideplanks;
  const raises = req.query.legraises;
  const crunches = req.query.crunches;
  let day = req.query.day;

  while (day % 5 !== 0) day -= 1;

  const increment_percent = 1 + (0.05 * (day / 5))
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send({
    0: [
      Math.ceil(planks * 0.95 * increment_percent),
      Math.ceil(raises * 0.95 * increment_percent),
      Math.ceil(crunches * 0.95 * increment_percent),
      30
    ],
    1: [
      Math.ceil(planks * 0.75 * increment_percent),
      Math.ceil(raises * 0.75 * increment_percent),
      Math.ceil(crunches * 0.75 * increment_percent),
      60
    ],
    2: [
      Math.ceil(planks * 0.7 * increment_percent),
      Math.ceil(raises * 0.7 * increment_percent),
      Math.ceil(crunches * 0.7 * increment_percent)
    ]
  });
});

app.get('/legs', (req, res) => {
  const squats = req.query.pistol;
  const calf_raises = req.query.calfraise;
  const lunges = req.query.lunge;
  let day = req.query.day;

  while (day % 5 !== 0) day -= 1;

  const increment_percent = 1 + (0.05 * (day / 5))

  res.send({
    0: [
      Math.ceil(squats * 0.95 * increment_percent),
      Math.ceil(calf_raises * 0.95 * increment_percent),
      Math.ceil(lunges * 0.95 * increment_percent),
      30
    ],
    1: [
      Math.ceil(squats * 0.75 * increment_percent),
      Math.ceil(calf_raises * 0.75 * increment_percent),
      Math.ceil(lunges * 0.75 * increment_percent),
      60
    ],
    2: [
      Math.ceil(squats * 0.7 * increment_percent),
      Math.ceil(calf_raises * 0.7 * increment_percent),
      Math.ceil(lunges * 0.7 * increment_percent)
    ]
  });
});

app.get('/arms', (req, res) => {
  const holds = req.query.holds;
  const diamondpushups = req.query.diamondpushups;
  const pull = req.query.pull;
  let day = req.query.day;

  while (day % 5 !== 0) day -= 1;

  const increment_percent = 1 + (0.05 * (day / 5))

  res.send({
    0: [
      Math.ceil(holds * 0.95 * increment_percent),
      Math.ceil(diamondpushups * 0.95 * increment_percent),
      Math.ceil(pull * 0.95 * increment_percent),
      30
    ],
    1: [
      Math.ceil(holds * 0.75 * increment_percent),
      Math.ceil(diamondpushups * 0.75 * increment_percent),
      Math.ceil(pull * 0.75 * increment_percent),
      60
    ],
    2: [
      Math.ceil(holds * 0.7 * increment_percent),
      Math.ceil(diamondpushups * 0.7 * increment_percent),
      Math.ceil(pull * 0.7 * increment_percent)
    ]
  });
});

app.get('/chest', (req, res) => {
  const widepush = req.query.widepush;
  const incline = req.query.incline;
  const declinepushups = req.query.declinepushups;
  let day = req.query.day;

  while (day % 5 !== 0) day -= 1;

  const increment_percent = 1 + (0.05 * (day / 5))

  res.send({
    0: [
      Math.ceil(widepush * 0.95 * increment_percent),
      Math.ceil(incline * 0.95 * increment_percent),
      Math.ceil(declinepushups * 0.95 * increment_percent),
      30
    ],
    1: [
      Math.ceil(widepush * 0.75 * increment_percent),
      Math.ceil(incline * 0.75 * increment_percent),
      Math.ceil(declinepushups * 0.75 * increment_percent),
      60
    ],
    2: [
      Math.ceil(widepush * 0.7 * increment_percent),
      Math.ceil(incline * 0.7 * increment_percent),
      Math.ceil(declinepushups * 0.7 * increment_percent)
    ]
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
