/* 콤마, 그룹핑, 논리 연산자 */
// 콤마(,) 연산자. 표현식 분리 ex) var a=1, b=2;
// 그룹핑() 연산자. 5 + (1+2) 소괄호 안의 표현식 먼저 평가

// ||연산자(논리 or 연산자). 하나라도 true면 true 아니면 false.
var value, zero = 0, two = 2;
console.log(value || zero || two); /* value, zero는 false two는 true이므로 하나라도 true가 있어서 true의 값을 반환 */
console.log(value || zero); /* 둘다 false인 경우 마지막 값을 반환 */

var one = 1
console.log(one===1 || three===3); /* 왼쪽이 true인 경우 오른쪽은 비교하지 않음! 오른쪽과 비교할 경우 three의 변수가 없기 때문에 에러발생*/

// &&연산자 (논리 and 연산자). 모두 true면 true 아니면 false.
var one = 1, two = 2, zero = 0;
console.log(one && two); /* 둘다 true일 경우 마지막 변수 값을 반환 */
console.log(one && zero && nine); /* one은 true이므로 오른쪽 변수 값과 비교 -> 오른쪽 변수 값인 zero가 false이므로 오른쪽과 비교하지 않고 zero의 변수값을 반환 */

/* 조건연산자 */
// 형태 : exp ? exp-1 : exp-2
// exp의 표현식을 평가 후 true면 exp-1을 false면 exp-2의 결과를 반환
console.log(1=='1' ? "같다" : "다르다");
console.log(1==='1' ? "같다" : "다르다");