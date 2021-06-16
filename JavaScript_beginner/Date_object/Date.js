/* Date 오브젝트 */
// 시간값(년월일, 시분초, 밀리초) 제공
// UTC  기준
// 시간값 표시 기준 - 월은 0부터시작(0: 1월, 1: 2월 ~), 일은 1에서 31일까지 정수로 표시, 요일은 0부터 시작(0: 일요일, 1: 월요일 ~)
// 년월일, 시분초, 밀리초
var obj = new Date(1970, 1, 1, 1, 1, 1, 1);
console.log(obj.toLocaleString());

/* new Date() */
// Date 인스턴스 생성 - 파라미터값을 인스턴스의 프리미티 값으로 설정
// 년,월은 필수 나머지는 선택
var obj = new Date(2019, 02);
console.log(obj);
// 파라미터를 작성하지 않으면 -> UTC기준 현재 시간
console.log(new Date());
// 문자열로 작성하면 그냥 02일때는 3월로 "02"일때는 2월로 나옴
console.log(new Date("2019-02"));
// 시간 자동 넘김 - 월일시분초 범위를 넘치면 상위 시간값에 반영(문자열로 작성하면 에러)
console.log(new Date(2019, 11, 34));

/* Date.now() */
// 현재 시간을 밀리초로 반환
console.log(Date.now());
console.log(new Date());

/* Date.parse() */
// 문자열 값을 밀리초로 변환
console.log(Date.parse("2019-01-23T09:11:23.123"));

/* Date 오브젝트 함수 분류*/
// 시간을 반환하는 함수 - getMonth(), getDate()
var obj = new Date(2019, 02, 15);
console.log(obj.getMonth());
console.log(obj.getDate());

// 시간을 설정하는 함수 - setMonth(), setDate()
var obj = new Date();
console.log(obj.valueOf());
console.log(obj.setMonth(01));
console.log(obj.setDate(15));