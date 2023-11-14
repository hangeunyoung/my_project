// 자바스크립트는 html보다 늦게 실행되어야한다(defer)

// 명언데이터(배열객체)
const saying_data = [
    {
        text: '강한자가 살아남는 것이 아니라<br>살아남는 자가 강한 것이다',
        author: '김유신 장군',
    },
    {
        text: '내가 남을 알지 못하는 것이 죄일뿐<br>남이 나를 알아주지 않는게<br>무슨 죄란 말인가',
        author: '장영실',
    },
    {
        text: '가볍게 움직이지 말라 침착하게<br>태산같이 무거이 행동하라<br>나를 알고 적을 알아야만<br>백번 싸워도 위태함이 없다',
        author: '충무공 이순신'
    },
    {
        text: '배우는 사람은 모르지기<br>심신을 수련해야 한다',
        author: '퇴계 이황'
    },
    {
        text: '뜻이 서지 않으면 만사가 성공하지<br>못한다 먼저 반듯이 뜻을 세워라',
        author: '율곡 이이'
    },
    {
        text: '세월을 헛되이 보내지 마라<br>청춘은 다시 돌아오지 않는다',
        author: '안중근 의사'
    },
    {
        text: '진실은 반드시 따르는 자가 있고<br>정의는 반드시 이루는 날이 있다',
        author: '도산 안창호'
    }
]
console.log(saying_data);

// 명언데이터 초기값 화면에 출력(DOM)
const titileEl = document.querySelector('.text-box h2');
const authorEl = document.querySelector('.text-box b');

console.log(titileEl);
console.log(authorEl);
console.log(saying_data[0].text); // 첫번째 text자료

// 초기값 표시
let count = 0;
titileEl.innerHTML = saying_data[count].text;
authorEl.innerHTML = saying_data[count].author;

// 인터벌 재생 함수
setInterval(function () {
    let r = 0;
    // 0~6의 램덤 숫자 발생
    r = Math.floor(Math.random()*saying_data.length);
    console.log(r);
    titileEl.innerHTML = saying_data[r].text;
    authorEl.innerHTML = saying_data[r].author;
}, 5000);