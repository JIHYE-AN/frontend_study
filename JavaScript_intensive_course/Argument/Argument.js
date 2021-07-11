/* Argument 처리 메커니즘 */
// 함수를 호출하면 함수 안에서 우선 argument 오브젝트를 만든다.
// 그리고 거기에 파라미터를 {key:value} 형태로 저장
// 파라미터 수만큼 0부터 인덱스 부여, key로 사용
// 파라미터로 받은 값을 value에 설정 { 0: param1, 1:param2 }
function get() {
  return arguments;
};
console.log(get("A","B"));
// Array-like key값이 0부터 1씩 증가! length 프로퍼티가 있어야 함.
// length가 있다라는 것은 for문으로 돌릴 수 있다는 것!

/* 엔진의 파라미터 처리 */
// 1. get함수를 호출하면서 77과 100을 파라미터 값으로 넘겨줌
// 2. 넘겨받은 값을 함수의 파라미터 이름에 설정. one에 77이 맵핑. 정적 환경의 선억적 환경 레코드에 one:77 형태로 설정! 스코프 개념으로 정의
// return one; 을 했을때 one은 표현식으로 표현식을 평가하게 되는데 그때 선언적 환경 레코드로 가서 식별자 해결을 한다. one이 있으므로 77이 반환
// 함수의 파라미터에 작성한 이름을 key로해서 파라미터로 받은 값을 값으로 해서 선언적 환경 레코드에 설정한다. 
// 3. Argument 오브젝트를 생성
// 넘겨 받은 파라미터 수를 Argument 오브젝트의 length 프로퍼티에 설정
// 넘겨받은 파라미터 수만큼 반복하면서 0부터 key로 하여 순서대로 파라미터 값을 설정 {0: 77}, {1: 100} 형태
// 함수의 초기화 단계에서 실행된다.
var get = function(one){
  return one;
};
get(77, 100);



