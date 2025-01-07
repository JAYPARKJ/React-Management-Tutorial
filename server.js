// 서버 모듈 기능 선언 express 기본 설정
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
///////////////////////////////////////////////

// 클라이언트가 api 경로에 hello 접속시 메세지 출력 처리 
//app.get('/api/hello', (req, res) => {
//    res.send({message : 'Hello Express!'});
//});

// 이전 시간에 클라이언트에 명시해놨던 3명의 고객정보 데이터(json) 반환하기 
app.get('/api/customers', (req, res) => {
     res.send([
        {
          id: 1,
          image: 'https://picsum.photos/350/400',
          name: '홍길동',
          birthday: '950503',
          gender: '남자',
          job: '대학생'
        },
        {
          id: 2,
          image: 'https://picsum.photos/380/490',
          name: '지원숭',
          birthday: '960808',
          gender: '남자',
          job: '프로그래머'
        },
        {
          id: 3,
          image: 'https://picsum.photos/360/470',
          name: '김메로',
          birthday: '970809',
          gender: '남자',
          job: '디제이'
        }
      ]);
    
});
// 5000번 포트로 동작 시킴, 서버 동작 중 출력 메세지

app.listen(port, () => console.log('Listening on port ${port}'));

