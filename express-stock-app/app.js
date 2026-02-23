const express = require('express');
const app = express();
const port = 3000;
const siteRoutes = require('./routes/siteroutes');
const authRoutes = require('./routes/authRoutes');

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));
app.use('/', siteRoutes);
app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`server running at 
        http://localhost:${port}`);
});