const express = require('express');
const app = express();
const port = 8080;

const loggingMiddleware = (req, res, next) => {
    const start = Date.now();
    const { method, url } = req;
    const timestamp = new Date().toISOString();

    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`[${timestamp}] ${method} ${url} - ${res.statusCode} - ${duration}ms - Logged by Anand Kumar Sahani`);
    });

    next();
};

app.use(loggingMiddleware);
app.get('/', (req, res) => {
    res.send('Logged In Successfully.');
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
