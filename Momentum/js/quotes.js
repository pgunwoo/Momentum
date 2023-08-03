const quotes = [
    {quote : "깨지고 부셔져라.",
     author : "우왁굳",},
    {quote : "중요한 건 꺽이지 않는 마음.",
     author : "Deft",},
    {quote : "제발 니 인생에 훈수하세요.",
     author : "우왁굳",},
    {quote : "알아서 잘 딱 깔끔하고 센스있게.",
     author : "우왁굳",},
    {quote : "포기하면 이미 진거다.",
     author : "우왁굳",},
    {quote : "어깨를 펴고 당당히 살아. 넌 멋있는 놈이야.",
     author : "우왁굳",},
    {quote : "재능은 어느 날 발견되는 거지 내가 가꾸는게 아니다.",
     author : "우왁굳",},
    {quote : "진실을 알았을 때 자존감은 저절로 채워진다.",
     author : "우왁굳",},
    {quote : "사기는 세상에서 아름답고, 트렌디하고, 멋있고, 늘 새롭게 보여진다.",
     author : "우왁굳",},
    {quote : "거짓말을 믿는 사람은 진실을 거부한다.",
     author : "우왁굳",}
];
// array 내부의 object 형태
// arry형태로 정렬된 object에 랜덤하게([0]~[7]중에 하나) 접근하여 그 중 1개를 송출해야함

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Math object : 수학 계산과 관련된 계산 기능을 포함한 객체
// Math.random() = 0~1사이의 숫자를 랜덤으로 송출함(0.4353423423)
// Math.random() * 10 = 1~10사이의 숫자를 송출 
// Matn.round(반올림), ceil(올림), floor(버림)

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

