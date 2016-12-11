var express = require('express'); // require 로 라이브러리 로드
var path = require('path');
var app = express(); // 로드한 라이브러리의 인스턴스 생성

app.use(express.static(path.join(__dirname, 'public'))); // 외부 소스 사용
app.listen(8000, function() { // 포트 알맞게 지정
    console.log('Server On!'); // 콘솔 로그 보냄
});