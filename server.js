const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.port || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/socialNetworkApi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set('debug', true)

app.listen(PORT, () => console.log(`API server running @ http://localhost:${PORT}!`));

