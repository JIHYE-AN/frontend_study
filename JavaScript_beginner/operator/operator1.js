/* 산술연산자 (+연산자) */
var value1 = 1+4+7;

console.log(value1);

var two = "2";

var value2 = 1+two;

console.log(value2);

var value3 = 1 + 5 + "ABC";

console.log(value3);

/* 숫자로 변환

undefined -> NaN
Null -> +0
boolean -> true:1, false:0
Number -> 전/후 같음
string -> 값이 숫자면 숫자로 연산, but +연산자는 연결 ex) 1+5+"abc" = 6abc
*/

var value4;

console.log(10 + value4);
console.log(10 + null);
console.log(10 + true);
console.log(10 + false);
console.log(10 + "123");
console.log(10 - "23");

/* 산술연산자 (-,*,/,% 연산자) */
// -연산자
console.log(10 - null);
console.log(10 - true);
console.log(10 - false);
console.log(10 - "123");
console.log(10 - "A");

// * 연산자
console.log(10 * null);
console.log(10 * true);
console.log(10 * false);
console.log(10 * "123");
console.log(10 * "A");

/* *연산자 소수값 처리 */
console.log(2.3 * 3); /* 값은 6.8999999999999995로 나옴 -> 이유 : 정상이며, IEEE 754의 유동 소수점 처리떄문임 */
// 유동소수점 대응 방법
console.log(2.3 * 10 * 3 / 10); /* 소수값에 10을 곱하여 정수로 만든 후 3을 곱한 후 다시 10으로 나눠 소수 처리하면 됨 */

// /연산자
console.log(10 / null);
console.log(10 / true);
console.log(10 / false);
console.log(10 / "123");
console.log(10 / "A");
console.log(0 / 23);

// %연산자 (나머지연산자)
console.log(5 % 2);
console.log(5 % 2.5);
console.log(5 % 2.3);
//유동소수점 대응
console.log(5*10 % (2.3 * 10) / 10);

/* 단항 연산자 */
// 단항 +연산자 : 형태 +vlaue
var value5 = "7";
console.log(typeof value5);
console.log(typeof +value5);
console.log(typeof Number(value5));
// +value = Number(value) -> string타입을 number타입으로 변환
// 가독성을 위해 +보다는 Number()을 사용하는 것이 좋음

// 단항 -연산자 : 형태 -value
var value6 = 7;
console.log(-value6);
console.log(10 + -value6);
console.log(value6);
// + -> - 로 - -> + 로 값의 부호를 바꿀 때 사용
// 원래 값에 영향을 주지는 않음

/* 후치, 전치, 논리 연산자 */
// 후치++연산자 : value++
// 값을 자동으로 1증가 시키는 연산자
var one = 1;
var value7 = one++ + 3;
console.log(value7);
console.log(one);
// 후치 연산자는 세미콜론(;) 다음에 증가! 한마디로 문장이 끝난 후 증가함
// 그래서 value7의 one은 세미콜론이 끝나기 전이라 값이 증가하지 않고 1이지만 value7후 one은 세미콜론 다음이므로 값이 1 증가

// 전치++연산자 : ++value
// 값을 자동으로 1증가 시키는 연산자
var one = 1;
var value7 = ++one + 3;
console.log(value7);
console.log(one);
// 전치 연산자는 후치 연사자와 달리 값이 끝나기 전에 1증가

// 후치--연산자 : value--
// 값을 자동으로 1감소 시키는 연산자
var two = 2;
var value7 = two-- + 3;
console.log(value7);
console.log(two);
// 후치 연산자는 세미콜론(;) 다음에 감소! 한마디로 문장이 끝난 후 감소함

// 전치--연산자 : --value
// 값을 자동으로 1감소 시키는 연산자
var two = 2;
var value7 = --two + 3;
console.log(value7);
console.log(two);
// 전치 연산자는 후치 연사자와 달리 값이 끝나기 전에 1감소

// 논리 NOt(!) 연산자 : !value
// 표현식 평가 결과를 true, false로 변환하여 사용
// true -> false, false -> ture로 반환
var value = true;
console.log(!value);
console.log(!!"A"); /* "A" = True, !"A" = False, !!"A" = True */

var one =  1;
console.log(one);
console.log( one-- + ++one );
console.log(one);

/* 유니코드 */
console.log("\u2714");

/* 관계연산자 */
// >연산자
// 왼쪽 > 오른쪽  왼쪽이 오른쪽보다 크면 true, 작으면 false를 반환
console.log((1+2) > 2);
console.log(1 > "A"); //한쪽이 string타입이면 false를 반환
console.log("A" > "1"); //둘다 string타입이면 둘 중 유니코드 사전 순서로 비교
console.log("\u0033" > "\u0022");
console.log("가" > "다");
/* 한쪽이 number타입이면 다른 한 쪽이 number타입으로 변환하여 비교할 수 있는지를 확인 후 변환 가능하면 비교 가능하니 true로
변환이 불가능 하면 false로 반환 
ex) 2 > "1" = true, 2 > "A" = false, "2" > "A" = true -> 같은 string타입 */
console.log("A07" > "A21"); /* 여러문자를 비교할때는 문자하나씩 비교 A와A, 0과2, 7과1을 비교하여 하나라도 false면 false를 반환 */
// <, >=, <= 는 비교 기준만 다름

/* 동등, 부등, 일치, 불일치 연산자 */

// == 동등연산자 같으면 true 다르면 false
// 타입은 비교 X 값만 비교
console.log("가" == "다");
console.log( 1 == "다");
console.log( 1 == "1");
console.log( 1 == "");
console.log("가" == "가");

// != 부등연산자 다르면 true, 같으면 false
// ===일치연산자 값과 타입이 모두 같으면 true, 하나라도 다르면 false
// 일치연산자로 먼저 비교 후 동등연산자로 비교
// !==불일치연산자 일치연산자의 반대