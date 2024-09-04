const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
    host: 'YOUR_DB_HOST',
    user: 'YOUR_DB_USER',
    password: 'YOUR_DB_PASSWORD',
    database: 'YOUR_DB_NAME'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

app.use(express.json());

app.post('/submit-request', (req, res) => {
    const { phoneNumber, request } = req.body;
    const query = 'INSERT INTO requests (phoneNumber, request) VALUES (?, ?)';
    db.query(query, [phoneNumber, request], (err, result) => {
        if (err) {
            res.json({ success: false });
            throw err;
        }
        res.json({ success: true });
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
