/** 함수 호출 시작 측정
 * 배열 오브젝트 이름 : value
 * 함수 이름 : check()
 * 배열 : 1 ~ 1,000,000
 * forEach()로 배열 반복 -> check()함수 호출
 * 실행 시간 출력 
 * 현재 시각 구하기 : var start - Date.now();
 */

var value = [];
var time = Date.now();

for (k = 1; k <= 1000000; k++) {
  value.push(k);
};

var check = function () {};

console.log("반복 시작 시간은?" + time);
value.forEach(check);
console.log("반복 끝난 시작은?" + time);