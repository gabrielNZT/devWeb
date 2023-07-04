const express = require('express');
const configureExpress = require('./config');
const injectAppState = require('./middleware/injectAppState');
const assetsRouter = require('./routes/assets.routes');
const stylesRouter = require('./routes/styles.routes');
const loginRouter = require('./routes/login.routes');
const usersRouter = require('./routes/users.routes');
const logoutRouter = require('./routes/logout.routes');
const productsRouter = require('./routes/products.routes');
const registerRouter = require('./routes/register.routes');
const registerUserRouter = require('./routes/registerUser.routes');
const editUserRouter = require('./routes/editUser.routes');

require('dotenv').config();

const port = process.env.PORT;
const app = express();

configureExpress(app);

app.get('/', (req, res) => {
    res.redirect('/login');
});

app.use(injectAppState);
app.use('/styles.css', stylesRouter);
app.use('/assets', assetsRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);
app.use('/logout', logoutRouter);
app.use('/products', productsRouter);
app.use('/register', registerRouter);
app.use('/registerUser', registerUserRouter);
app.use('/editUser', editUserRouter);

app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port);
});
