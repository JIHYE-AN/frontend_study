/* Math 오브젝트 */
// 수학 계산용 오브젝트
// new 연산자로 인스턴스 생성불가 - Math, JSON, 글로벌 오브젝트
// Math.abs(값) 형태

/* abs() */
// 음수를 양수로 변환한 절댓값 반환
console.log(Math.abs(-123));
console.log(Math.abs(-Infinity));

/* floor() */
// 소수 이하 버림, 정수값 반환
// 소수 이하 값이 있으면 서 음수이면 -1을 더해 반환
console.log(Math.floor(5.3));
console.log(Math.floor(-1.7));
console.log(Math.floor(-1.0));

/* ceil() */
// 소수 이하 올림, 정수값 반환
console.log(Math.ceil(5.3));
console.log(Math.ceil(-1.7));
console.log(Math.ceil(-0.3));

/* round() */
// 소수 이하 반올림, 정수값 반환
// 양수이면 반올림, 음수이면 반내림
console.log(Math.round(5.1));
console.log(Math.round(5.5));
console.log(Math.round(-1.6));
console.log(Math.round(-1.2));

/* max() */
// 파라미터 값 중에서 가장 큰 값 반환
// 파라미터 갑을 전부 숫자로 변환하여 비교 - NaN가 하나라도 있으면 NaN 반환
console.log(Math.max(5,3,9));
console.log(Math.max(5,3, "A"));

/* min() */
// 파라미터 값 중에서 가장 작은 값 반환
// 파라미터 갑을 전부 숫자로 변환하여 비교 - NaN가 하나라도 있으면 NaN 반환
console.log(Math.min(5,3,9));
console.log(Math.min(5,3, "A"));

/* random() */
// 0에서 1미만 사이의 난수 반환
console.log(Math.random());
console.log(Math.random());

/* pow() */
// 파라미터 : x, y
// 파라미터 x 값의 y승 값을 반환
// y가 0일 때 x가 NaN라도 1을 반환
// y가 NaN이면 NaN반환
// 경우의 수가 많으므로 사용하기 전에 테스크 필요
console.log(Math.pow(10, 2));
console.log(Math.pow(10, 1));
console.log(Math.pow("A", 1));
console.log(Math.pow(10, "A"));
// 두 번째 파라미터를 작성하지 않으면 NaN
console.log(Math.pow(1));
