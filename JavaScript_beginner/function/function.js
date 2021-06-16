/* function 함수 */
// 특정 기능을 처리하는 자바스크립트 코드 묶음
// 함수 형태
function book(){
  var title = "JS책";
};

var point = function(one, two){
  var total = one + two;
  var bonus = total + 100; 
};
/* funtion 함수이름(파라미터(선택사항)) {
  함수코드 or 소스텍스트(선택사항)
}
*/
/* 함수 이름 규칙
1. 첫문자 - 영문자, $, 언더바(_) 사용가능 but 숫자, &, *, +, @ 사용불가
2. 함수 이름 작명 권장 - 함수 코드를 읽지 않더라도 이름만 봐도 저게 어떤 처리를 하고 있다는 것인지를 알 수 있어야 한다. 시멘틱(의미, 뜻)을 부여하여 작명
*/
/* 함수 이름 관례
1. 동사로 시작 (~하다.)
2. 두 개 이상의 단어를 사용할 때 - 두 번째 단어부터 명사 사용, 명사의 첫 문자는 대문자 사용 (camel case)
3. 동사 + 명사 형태로 동적인 모습
4. 이름은 길더라도 구체적인 시멘틱을 가지는 것이 좋다.
*/

/* 호출 받는 함수 */
// 함수가 호출되었을 때 실행되는 함수. 함수라 하면 호출받는 함수를 지칭
function setValue(one, two){
  var total = one + two;
}; /* 호출받는 함수의 형태*/
// 파라미터 : 호출한 함수에서 넘겨준 값을 받는다.
setValue(10, 20); 
/* 호출하는 함수 */
// 함수이름(파라미터); 의 형태 소괄호()를 무조건 작성! 함수이름만 작성하면 호출 되지 않는다.
// 파라미터 : 호출된 함수에 넘겨줄 값을 작성, 자바스크립트에서 지원하는 타입 작성가능, 함수 이름 작성 가능, 콤마로 구분하여 다수 작성 가능

/* return */
// 형태 : return 표현식opt;  표현식의 평가 결과를 반환
//return 또는 표현식을 작성하지 않으면 undefined반환

function getPoint1(){
  return 10*30;
};

var result = getPoint1();
document.write("결과는" + result );

//return 또는 표현식을 작성하지 않으면 undefined반환
function getPoint2(){
};

var result = getPoint2();
document.write("결과는" + result );

// return과 표현식을 한 줄에 작성. return끝에 세미콜론이 자동첨부됨.
function getPoint3(){
  return 
  10*30;
};

var result = getPoint3();
document.write("결과는" + result );

/* 주석을 작성하는 목적 */
// 1. 코드가 목적을 달성하기위한 기능, 시나리오 등을 생각하고 정리하는 것 -> 이것을 문법에 맞춰 작성한 것을 코드
// 코드를 작성하기전 - 정리한 생각을 주석으로 작성! -> 습관화 하는 것이 좋음
// 주석 작성 기준 - 1. 코드의 목적, 결과가 미치는 영향을 작성. 2. 다른 사람이 알 수 있도록 자세하게 작성