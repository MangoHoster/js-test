// Auto generate code

const express = require('express');
const app = express();
const PORT = 5000;
const HOST = '0.0.0.0';

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.json({
        message: 'Hello from Node.js!',
        server: 'Node.js/Express',
        port: PORT,
        host: HOST,
        timestamp: new Date().toISOString()
    });
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', uptime: process.uptime() });
});

app.post('/echo', (req, res) => {
    res.json({ received: req.body, method: 'POST' });
});

// Start server
app.listen(PORT, HOST, () => {
    console.log(`🚀 Node.js server running on http://${HOST}:${PORT}`);
    console.log(`📍 Local: http://localhost:${PORT}`);
});
