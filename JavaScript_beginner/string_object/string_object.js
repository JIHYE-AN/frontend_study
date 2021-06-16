/* String object */

/* 문자열 연결 방법 */
var concat1 = "12" + "ab" + "가나";
var concat2 = "abc \ 가나다라"; 

/* String() */
var value = String(123);
console.log(value);
console.log(typeof value);
console.log(typeof (""+123)); /* 문자열과 넘버타임을 더하면 스트링타입으로 변환 -> 앞에 빈 문자열이여서 값은 변경 X */

/* new String() */
var obj = new String(123);
console.log(obj);
console.log(typeof obj);

/* valueOf() */
var obj = new String(123);
console.log(obj.valueOf());
// Stirng 오브젝트의 프리미티브값 반환

/* length 프로퍼티 */
// 문자 수 반환
var value = "ABC";
console.log(value.length);
/* 문자열이 value.length를 만나면 

1. value의 타입을 구한다. -> String

2. new String("ABC")를 해서 인스턴스를 만든다.

3.  "ABC"는 PrimitiveValue에 설정된다.

4. "ABC"를 보고 length 프로퍼티를 만든다 -> 3

5. 그 후 value.length를 실행\

value가 내부에서 만든 인스턴스가 되는 것 */

for (var k = 0; k < value.length; k++){
  console.log(value[k]); 
}
/*"ABC"로 for()문을 반복할 때마다 문자를 하나씩 읽을 수 있었던 것은 인스턴스에 0: "A", 1: "B", 2: "C"로 분리되어 있기 때문

for()문을 반복할 때 value[k]에서 k를 프로퍼티 이름으로 값을 구함

우리가 볼때는 k를 인덱스로 사용했지만 자바스크립트엔진은 k를 프로퍼티 이름으로 본 것*/

/* trim() */
//문자열 앞뒤의 화이트 스페이스 삭제
var value = "  abcd   ";
console.log(value.length);
console.log(value.trim().length);

/* toString() */
var value = 123;
var result = value.toString(); /* 123은 넘버타입이고. 넘버.toString()을 하면 넘버인스턴스가 만들어 지기 때문에 현재 스트링오브젝트를 다루는 입장에서는 뉘앙스가 맞지않음*/
console.log(typeof result);

var result = toString(123);
console.log(result); 
/* 함수앞에 아무것도 작성하지 않았다 = 오브젝트가 없는 것!
그러면 빌트인 오브젝트(Object 오브젝트)의 toString()이 호출
Object 오브젝트는 키벨류인데 값만 작성했기 때문에 이상한 값이 들어오니까 
이상한 형태가 나온다 */

/* charAt() */
var value = "sports";
console.log(value.charAt(1));
console.log(value[1]);
console.log(value.charAt(12)); /* 문자열 길이보다 인덱스가 크면 빈 문자열을 반환 */
console.log(value[12]); /* 이 형태에서는 12번째 인덱스 = 프로퍼티가 없으므로 undefined가 반환 */

/* indexOf() */
// 데이타 위치의 문자열에서 파라미터의 문자와 같은 인덱스를 반환 왼쪽에서 오른쪽으로 검색
var value = "123123";
console.log(value.indexOf(2)); /* 앞에서 검색이 되면 더 이상 비교하지 않는다 */
console.log(value.indexOf(23)); /* 23중 첫번재 검색된 인덱스 반환*/
console.log(value.indexOf(2, 3)); /* 2를 검색하는데 3번 인덱스부터 검색한다 */
console.log(value.indexOf(15)); /* 같은 문자가 없으면 -1반환 */
console.log(value.indexOf(2, -1)); /* 두 번째 파라미터값이 0보다 작으면 처음부터 검색 */
console.log(value.indexOf(2, 9)); /* 두 번째 파라미터값이 length보다 크면 -1반환 */
console.log(value.indexOf(2, "A")); /* 두 번째 파라미터값이 NaN이면 처음부터 검색 */

/* lastIndexOf() */
// 오른쪽에서 왼쪽을 검색
var value = "123123";
console.log(value.lastIndexOf(2));
console.log(value.lastIndexOf(1, 4)); /* 4는 뒤에서가 아니라 앞에서 이므로 4번째 인덱스부터 거꾸로 검색 */
console.log(value.lastIndexOf(2, -1)); /* 두 번째 파라미터가 0보다 작으면 -1반환 */

/* concat() */
var result = "sports".concat("축구", 11);
console.log(result);

var obj = new String(123);
console.log(obj.concat("ABC")); /* 인스턴스의 프리미티브값에 설정된 123에 파라미터 값을 연결 */
// 인스턴스 함수의 concat함수를 호출하는 것 처럼 보이지만 사실은 인스턴스의 프리미티브값을 연결 */

/* substring() */
var value = "01234567";
console.log(value.substring(2,5));
// 2번 인덱스부터 5번 인덱스 직전까지 반환
console.log(value.substring(5)); /* 첫번째 인덱스부터 끝까지 반환 */
console.log(value.substring()); /* 파라미터를 모두 작성하지 않으면 전체 반환 */
console.log(value.substring(-7, 2)); /* 파라미터 값이 음수이면 0을 간주 */
console.log(value.substring(5, 1)); /* 첫번째 파라미터가 두번째보다 크면 값을 바꿔서 처리 */
console.log(value.substring(5, "A")); /* NaN는 0으로 간주 첫번째가 두번째보다 크므로 값을 바꿔 처리 */

/* substr() */
// 시작인덱스부터 지정한 무자 수를 반환
var value = "01234567";
console.log(value.substr(0, 3)); /* 0번 인덱스부터 문자 3개 반환 */
console.log(value.substr(-3, 3)); /* 값이 음수이면 length에서 파라미터 갑을 더해 시작 인덱스로 사용 */
console.log(value.substr(4)); /* 두번째 파라미터 값을 작성하지 않으면 양수 무한대, 즉 최댓값을 간주 */
console.log(value.substr()); /* 첫번째 파라미터 값을 작성하지 않으면 0으로 간주 전체 반환 */

/* slice() */
// 파라미터의 시작 인덱스부터 끝 인덱스 직전까지 반환
var value = "01234567";
console.log(value.slice(1,4)); /* 1번 인덱스부터 4번 인덱스 직전까지 반환 */
console.log(value.slice(false,4)); /* false, undefined, null, 빈 문자열은 0으로 간주 */
console.log(value.slice("A")); /* NaN이면 0으로 간주 */
console.log(value.slice()); /* 전체반환 */
console.log(value.slice(5)); /* 두번째를 작성하지 않으면 length사용 */
console.log(value.slice(5, 3)); /* 첫 번째가 두 번째보다 크거나 같으면 빈 문자열 반환*/
console.log(value.slice(-1, -3)); /* 값이 음수이면 length를 더해서 사용 */

/* 정규 표현식을 사용할 수 있는 함수 */
// 정규 표현식 : 문자열을 패턴으로 매치 (일치는 하나라면 매치는 다수 대상)
// 패턴형태 : ^, $, *, + 등
/* match() */
// 매치 대상에 정규 표현식의 패턴을 적용 -> 매치하고 결과 반환
var value = "Sports";
console.log(value.match(/s/));
console.log(value.match("spo")); /* 대문자 소문자 구분 */
// 처리를 했지마 없어서 null이 나옴

/* replace() */
// 매치 결과를 파라미터에 작성한 값으로 대체하여 반환
var value = "abcabc";
console.log(value.replace("a","바꿈"));
console.log(value.replace(/a/,"바꿈"));

function change(){
  return "함수";
};
console.log(value.replace(/a/,change()));

/* serch() */
// 검색된 첫 번째 인덱스 반환 매치되지 않으면 -1 반환
var value = "cbscba";
console.log(value.search(/a/));
console.log(value.search("k"));
/* 정규표현식은 다른 조건들을 ex)a이면서 다음에는 c가오고 그다음에는 b가 오고 등등
복합적으로 조건을 작성할 수 있다. */

/* split() */
// 분리대상을 분리자로 분리하여 배열로 반환
console.log("12_34_56".split("_"));

var value = "123";
console.log(value.split("")); /* 빈 문자열을 작성하면 문자를 하나씩 분리하여 반환*/
console.log(value.split()); /* 분리자를 작성하지 않으면 분리 대상 전체를 하나의 배열로 반환 */

var value = "12_34_56_78";
console.log(value.split("_", 3)); /* 두번째 파라미터에 작성 된 수만큼 반환 */

var value = "123";
console.log(value.split("A")); /* 분리자가 분리 대상에 없으면 분리 대상 전체를 하나의 배열로 반환 */

