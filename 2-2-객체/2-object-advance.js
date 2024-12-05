
//게시판 게시글

let article1 ={
  title: '요새 재밌는 영화 추천좀 ...',
  Content: '요즘에 재밌는 영화를 보고 싶은데 찾기가 어렵네요',
  writer: {                   //객체 중첩 구조
    name: '잔망루피',         //string
    account: 'loopy1234',     
    joinDate: '2020-11-30',  
    grade: 'GOLD',            
    emailVerify: true         //boolean
  },
  viewcount: 14,              //number
  likeCount: 3,
  dislikeCount: 30,
  regDate: '2024-11-01',      //string
  hashTags: ['질문', '취미']  //object로출력되지만 array
};

console.log(article1.title);           //요새 재밌는 영화 추천좀 ... 출력
console.log(typeof article1.writer);   //object 

// 객체 프로퍼티 수정하기
article1.title = '제목없음';   // title: '제목없음', 으로 수정됨
article1.writer.grade = 'VIP'; //  grade: 'GOLD' -> 'VIP',로 수정

// 프로퍼티 동적 추가: 실행중에 프로퍼티 추가하기
article1.isadmin ='false';     // 객체 안에 없는 프로퍼티 이름 지정후 입력 
console.log(article1.isadmin)  //  isadmin: 'false' 새로운 프로퍼티 생성

//프로퍼티 삭제
delete article1.dislikeCount;
console.log(article1);         // 프로퍼티 dislikeCount 삭제


console.log('======================================');

//객체의 중첩구조
//예시 : 게시판

let articles = {
  totalCount: 25578, //총 게시물 수
  admin: 'abc1234', //게시판 관리자 아이디
  page: 2558, //총 페이지 수
  articleList: [
    // 게시물 목록
    {
      bno: 3, //글번호
      title: '가위바위보', //글제목
      writer: '김짱껨뽀', //작성자
      content: '다덤벼 ^^', //글내용
      viewCount: 53, //조회수
      recomm: 10, //추천수
      regDate: '21-12-07', //작성일자
    },
    {
      bno: 2, //글번호
      title: '노는게', //글제목
      writer: '뽀로로', //작성자
      content: '제일조와~~~', //글내용
      viewCount: 253, //조회수
      recomm: 11, //추천수
      regDate: '21-12-06', //작성일자
    },
    {
      bno: 1, //글번호
      title: '아멘', //글제목
      writer: '개신교신자', //작성자
      content: '할렐루야', //글내용
      viewCount: 23, //조회수
      recomm: 5, //추천수
      regDate: '21-12-05', //작성일자
    },
  ],
};

console.log(articles.articleList.length);    //3
console.log(articles.articleList[2].title);  //아멘
for(let obj of articles.articleList){        //obj의 
  console.log(obj.title);                    //obj의 title만 출력  , 가위바위보, 노는게, 아멘 출력
}

