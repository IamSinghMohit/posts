require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const passport = require('passport')



/* PASSPORT  */
require('./passport')
app.use(passport)
app.use(passport.initialize())

app.use(cookieParser());
const corsOption = {
    credentials: true,
    origin: ['http://localhost:5173'],
};
app.use(cors(corsOption));

const PORT = process.env.PORT || 3001;
app.use(express.json({ limit: '8mb' }));
app.use(router);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
