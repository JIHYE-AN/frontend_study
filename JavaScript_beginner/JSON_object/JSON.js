/* JSON 오브젝트 */
// JavaScript Object Notation 
// 빌트인 오브젝트
// new연산자로 인스턴스 생성불가 -> 생성할 필요 X 인스턴스 생성 필요성이 없음
/* 주요 기능
1. 데이터 송수신의 변환 기준
2. 텍스트이므로 전송 속도가 빠름
3. 파일 확장자: JSON, TXT도 사용 가능
* JSON이 나오기 전에는 XML을 사용했다. 하지만 XML은 텍스트가 아니라 오브젝트로 무거워
최근에는 텍스트인 JSON을 사용
*/

/* stringify() */
// JS타입을 JSON타입의 문자열로 변환
// JSON.stringify() 형태로 호출
// 첫 번째 파라미터
var value = {
  book: "책",
  title: 123
};
var result = JSON.stringify(value);
console.log(result);

var value = ['book', '책', 123];
var result = JSON.stringify(value);
console.log(result);
// infinity, NaN -> null
console.log(JSON.stringify([Infinity, NaN, null]));
console.log(JSON.stringify([true, false]));
// undefined가 배열에 있으면 null로, 프로퍼티 값이면 빈문자열로 이름까지도 없애서 반환한다.
console.log(JSON.stringify(undefined));
console.log(JSON.stringify([undefined]));
console.log(JSON.stringify({value: undefined}));

//두 번째 파라미터
var data = {book: '책', point: 55};
function replace(key, value) {
  // point 값 55를 11로 변경
  return key === "point" ? 11 : value;
};
var result = JSON.stringify(data, replace);
console.log(result);

var data = {book: '책', point: 11, amount: 90};
// 배열에 프로퍼티 이름을 작성하면 이름이 같은 것만 반환
var result = JSON.stringify(data, ['book', 'amount']);
console.log(result);

// 세 번째 파라미터
// 줄바꿈
var data = {sports: 'soccer', time: 90};
var result = JSON.stringify(data,"", '\n');
console.log(result);
// 들여쓰기(숫자)
var data = {sports: 'soccer', time: 90};
var result = JSON.stringify(data,"", '\n');
console.log(result);
// 문자열 작성하면 데이터 앞에 문자열 표시
var data = {sports: 'soccer', time: 90};
var result = JSON.stringify(data,"", '##');
console.log(result);

/* parse() */
// JSON타입을 JS타입으로 변환
// 서버에서 데이터를 가져오는 동안 어떤일이 일어날지 모르므로 반드시 trycatch문 사용 필수!
var value = "123";
try {
  var result = JSON.parse(value);
} catch (e) {
  console.log("JSON 파싱 에러")
};
console.log(result);
console.log(typeof result);
// trycatch 사용은 필수!
var value = "true";
var result = JSON.parse(value);
console.log(result);
console.log(typeof result);
// 배열에 작성된 String타입의 숫자는 숫자로 변환하지 않는다.
var value = '["ABC", "가나", "12"]';
var result = JSON.parse(value);
console.log(result);
// JS는 프로퍼티 이름에 큰따옴표를 사용하지 않으므로 큰따옴표가 표시되지 않는다.
var value = '{"point": "123"}';
var result = JSON.parse(value);
console.log(result);

// 두 번째 파리미터 작성
var data = '{"book": "책", "movie": "영화"}';
var check = function (key, value) {
  return key === "book" ? "JS책" : value;
};
var result = JSON.parse(data, check);
console.log(result);
// 값을 반환하지 않거나 undefined를 반환하면 프로퍼티가 제외되므로 반환해야한다.
// 변환할 것이 없다하면 value를 반환 해줘야 한다. 그렇지 않으면 날라간다.

