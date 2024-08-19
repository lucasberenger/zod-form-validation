import express from 'express';
import helmet from 'helmet';
import registerRouter from './routes/api/register.js'
import homeRouter from './routes/web/home.js'


const app = express();
const PORT = 3000;

app.use(helmet());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use(homeRouter);
app.use(registerRouter);


app.listen(PORT, () => {
    console.log('HTTP server is running.')
})

export default app;
