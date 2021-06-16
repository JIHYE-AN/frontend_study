/* Number 오브젝트 */
// 숫자 처리를 위한 오브젝트
// 숫자 처리를 위한 함수와 프로퍼티가 포함! 함수를 호출하여 숫자를 처리


/* Number() */
console.log(Number("123") + 500);
/* "123"은 String 타입이지만 값이 숫자이므로 숫자로 변환 가능
Number타입이 되므로 123+500이 되어 623을 반환 */
console.log(Number("ABC"));
/* "ABC"는 숫자로 변환 불가 - Nat a Number 반환
2가지 관점 1. 변환을 했는데 그 값이 Nat a Number
          2. 변환을 할려고 했는데 파라미터 값이 Not a Number
*/
console.log(Number(0x14));
/* 0x는 16진수 16*1+4 */ 
console.log(Number(true));
/* true = 1 false = 0 */
console.log(Number(null));
/* null = 0 */
console.log(Number(undefined));
/* undefined는 숫자로 변환할 수 없거나 변환했는데 숫자가 아니다 */

/* Number 상수 */
// 값을 변경, 삭제할 수 없음
// MAX_VALUE, MIN_VALUE, NaN, POSITIVE_INFINITY, NEGATIVE_INFINITY
// 상수는 영문 대문자 사용
// Number.MAX_VALUE 형태로 값 사용

/* new 연산자 */
//오브젝트로 인스턴스를 생성하여 반환
var obj = new Number();
console.log(typeof obj);
// 원본을 복사하는 개념
// 복사한 복사본이 인스턴스 -> 생성한 인스턴스를 obj에 할당
// 인스턴스의 생성 목적 : 인스턴스마다 값을 갖기 위한 것
var oneObj = new Number("123");
console.log(oneObj.valueOf());
var twoObj = new Number("456");
console.log(twoObj.valueOf());
/* 원본을 복사해서 나눠준 것을 자신에 복사본에 메모하는것
누구는 123이라 메모하고 누구는 456이라고 메모할 수 있다 
값이 다른 경우르 대비해 인스턴스를 만드는 것이다.*/

/* Number 인스턴스 생성 */
//빌트인 Number 오브젝트로 새로운 Number 인스턴스를 생성
var obj = new Number("123");
console.log(obj.valueOf());
// 인스턴스를 만드는 기준으 prototype이다.
// prototype에 연결되어있는 함수들을 복사해서 주는 것

/* 프리미티브 값 */
// 언어에 있어 가장 낮은 단계의 값
// var book = "책"; "책"은 더 이상 분해, 전개 불가
/* 프리미티브 타입 
* Number, String, Boolean : 인스턴스 생성 가능
* Null, Undefined : 인스턴스 생성 불가
* Object는 프리미티브 값을 제공하지 않음
*/
/* 프리미티브 값을 갖는 오브젝트 Boolean, Date, Number, String */
var obj = new Number(123);
console.log(obj + 200);

/* valueOf() */
//Number 인스턴스의 프리미티브 값을 반환
var obj = new Number(123);
console.log(obj.valueOf());

/* toString() */
//변환대상을 string타입으로 변환
// 파라미터에 진수작성 가능 작성하지 않으면 10진수로 처리
var value = 20;
console.log(20 === value.toString());
console.log(value.toString(16));
//변환 할 때 주의사항
console.log(20..toString()); /* 20. = 20.0 */
/* 20.toString() 형태로 작성하면 에러
20이 아니라 20.을 변환 대상으로 인식. 점이 없는 valuetoString()형태가 되기때문
20..을 작성*/
/* 자바스크립트는 20을 정수가 아닌 실수로 처리 */

/* toLocalString() */
// 숫자를 브라우저가 지원하는 지역화 문자로 변환
// 지역화는 한국, 중국, 프랑스 등의 지역애서 사용하는 문자
// 지역화 지원 및 형태를 브라우저 개발사에 일임 -> 브라우저마다 조금씩 차이가 날 수 있다.
// 지역화를 지원하지 않으면 toString()으로 변환
var value = 1234.56;
console.log(value.toLocaleString());
console.log(value.toLocaleString('de-DE'));
console.log(value.toLocaleString('zh-Hans-CN-u-nu-hanidec'));

/* toExponential() */
// 숫자를 지수 표기로 변환하여 문자열로 반환
// 파라미터에 소수 이하 자릿수 작성 - 0에서 20까지
var value = 1234;
console.log(value.toExponential());
/* 변환 대상의 첫 자리만 소수점(.) 표시
나머지는 소수점 아래에 표시
지수(e+) 다음에 정수에서 소수로 변환된 자릿수 표시 */
var value = 123456;
console.log(value.toExponential(3));
/* 소수점 아래 3자리로 표시하라 작성
1.234e+5로 표시가 되어야 하는데 1.235e+5인 이유는
2345에서 3자리로 표시할때 반올림하기 때문 */

/* toFixed() */
// 고정 소숫점 표기로 변환하여 문자열로 반환
var value = 1234.567;
console.log(value.toFixed(2)); /* 파라미터에 2를 작성 -> 소수 두 자리까지 표시. 이때 셋째 자리에서 반올림 */
console.log(value.toFixed()); /* 파라미터 값을 작성하지 않으면 0으로 간주 -> 소수 첫째 자리에서 반올림하여 정숫값을 표시 */
//파라미터 값보다 소수 자랏수가 길면 작성한 자리수에 1을 더한 위치에서 반올림
console.log(value.toFixed(5));
//변환 대상 자릿수보다 파라미터 값이 크면 나머지를 0으로 채워 반환