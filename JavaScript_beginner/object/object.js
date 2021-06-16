/* 프로퍼티(Property) */
// {name:value} 형태
// name => 프로퍼티 name/key 작성
// value => JS에서 지원하는 타입 작성 ex) {a:"abc", b=123, c:true, d: {}}, {book:function(){코드}}
var book3 = {
  title : "책",
  point : {
    ten : 10,
    bonus : 200,
    promotion: function(){}
  }
};

/* 프로퍼티 추가, 변경 */
//오브젝트.프로퍼티 = 값;
// 같은 명의 프로퍼티가 존재한다면 값이 변경되고 없으면 프로터피:값이 새로 추가가 된다.
// 작성방법 1. 오브젝트.프로퍼티 = 값;
var book = {};
book.title = "JS책";

console.log(book);
document.write("책 타이틀 : " + book.title);

// 2. 대괄호 사용 : 오브젝트["프로퍼티"] = "값";
var book1 = {};
book1["title"] = "JS책 비기너";

console.log(book1);
document.write("책 타이틀 : " + book1.title);

// 3. 변수 이름 사용 : 오브젝트[변수] = "값";
var book2 = {title : "JS책"}; 
var varName = "title";
book2[varName] = "HTML책"; /* varName의 변수를 사용하여 변수의 값인 title을 프로퍼티로 사용 */

console.log(book2);
document.write("책 타이틀 : " + book2.title);

/* 프로퍼티 값 추춘 */
// 오브젝트에서 프로퍼티 값을 추출 : 오브젝트.프로퍼티 형태
var obj = {book:"책"};
console.log(obj.book);
console.log(obj["sports"]); /* 이런 형태도 가능. 오브젝트에 해당 프로퍼티가 없을 경우 undefinded를 반환 */

/* for ~ in */
// 오브젝트에서 프로퍼티를 열거
// 형태 : for(변수 in 오브젝트) 문장;, for(표현식 in 오브젝트) 문장;
var sports = {
  soccer : "축구",
  baseball : "야구"
};

for(var item in sports) {
  console.log(item);
  console.log(sports[item]);
}
/* for문에 item이라는 변수를 설정 -> item 변수에 sports의 프로퍼티이름이 설정된다 
-> 첫번째 item변수=soccer sports[item] = sports[soccer] -> sports의 soccer은 "축구" 이므로 "축구"가 반환 
-> for문 끝에서 sports의 또 다른 프로퍼티가 없는지 확인 후 있으면 재실행
프로퍼티가 작성된 순서대로 읽혀진다. */


