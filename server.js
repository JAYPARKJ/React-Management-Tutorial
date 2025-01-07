// 서버 모듈 기능 선언
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// 클라이언트가 api 경로에 hello 접속시 메세지 출력 처리 
app.get('/api/hello', (req, res) => {
    res.send({message : 'Hello Express!'});
});

// 5000번 포트로 동작 시킴, 서버 동작 중 출력 메세지

app.listen(port, () => console.log('Listening on port ${port}'));

