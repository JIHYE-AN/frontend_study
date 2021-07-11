/* Function object */
//빌트인 Function 오브젝트 Function.prototype.call()형태로 만들어져 있다.
/* function 오브젝트
function키워드를 사용해 함수를 선언 : function book(){...}
function키워드를 사용해 function 오브젝트를 만들어서 변수에 할당 : var book = function(){...}
인스턴스이지만, new연산자로 생성한 인스턴스와 구분하기 위해 function 오브젝트로 표기 하겠음
일반적으로 함수, 메소드라고 하는 것은 function 오브젝트이다.*/
/* function 인스턴스
new.Book()처럼 new연산즈를 사용하여 Book.prototype에 연결된 메소드로 생성한 인스턴스
*/
/* function 오브젝트 생성 */
// var book = function(){}; 형태
// 엔진이 function 키워드를 만나면 빌트인 Function오브젝트의 prototype에 연결된 메소드로 function 오브젝트 생성
/* 오브젝트 저장 */
// 함수를 호출하려면 생성한 function오브젝트를 저장해야한다.
// function 오브젝트를 저장할때 네임:벨류 형태로 저장
// {함수이름: 생성한 function 오브젝트}
/** 함수를 호출하면
 * 저장된 오브젝트에서 함수 이름 검색
 * value 값을 구하고
 * value가 function 오브젝트이면 호출한다.
 */

/* 생각의 전환 */
// 함수가 호출되면 엔진은 함수의 변수와 함수(함수안에 있는 것들)를 프로퍼티형태로 만들어 실행 환경을 설정하고 실행한다.
// 프로퍼티 형태로 생각을 전환해야 JS의 아키텍처와 메커니즘을 이해할 수 있다.
// 엔진관점에서는 네임과 벨류형태이다.

/* function 오브젝트 생성 과정 */
//function sports(){...}형태
// function 키워드를 만나면 오브젝트를 생성하고 저장 
//{sports: {...}}
/* sports의 prototype안에는 constructor이 있고 __proto__가 있다.
__proto__는 Object입니다.
그래서 빌트인오브젝트에 관련 된 메소드들이 설정되어 있다. */
/* prototype과 같은 레벨로  __proto__있다.
__proto__를 전개해보면 빌트인 Function 오브젝트에 prototype에 연결되어있는 메소드들이 설정되어 있다. */
// sports 오브젝트에 prototype 오브젝트 첨부
// prototype에 constructor 프로퍼티 첨부 prototype.constructor가 sports 오브젝트 참조
// prototype에 __proto__ 오브젝트 첨부
// 빌트인 Object.prototype의 메소드로 Object 인스턴스를 생성하여 prototype.__proto__에 첨부
// sport 오브젝트에 __proto__ 오브젝트 첨부 sports.__proto__ 구조
// 빌트인 Function.prototype의 메소드로 function 인스턴스를 생성하여 sports.__proto__에 첨부
// sports 오브젝트 프로퍼티에 초기값 설정 argument, caller, length, name 프로퍼티

/* 함수 실행 환경 인식 */
// 함수 실행 환경 인식이 필요한 이유는? 함수가 호출되었을때 실행되 환경을 알아야 실행환경에 맞춰 실행할 수 있기 때문
// 실행 환경 설정 시점 : function 키워드를 만나 function 오브젝트를 생성할떄 (정적으로 설정)
// 설정하는것? 실행영역(함수가 속한 스코프 - 렉시컬스코프), 파라미터, 함수에 작성한 함수코드 등 => 함수가 실행되는 환경
// function오브젝트를 생성할 때 딱 한번만 스코프를 만들면 된다.

/* 함수 실행 환경 저장 */
// function 오브젝크를 생성하고 바로 실행하지 않으므로 함수가 호출되었을 때 사용할 수 있도록 환경을 저장해야한다.
// 어디애? 생성한 function 오브젝트 저장 => 생성한 function 오브젝트를 읽으면 그 안에 함수가 실행될 수 있는 환경이 설정되어있다.
// 다른 거 읽을 필요 없이 생성한 function오브젝트만 읽으면 된다.
// 생성한 function오브젝트로 내부프로퍼티로 인식할 환경을 설정 : 프로퍼티 형태로 저장
// 내부프로퍼티란? 엔진이 내부 처리에 사용하는 프로퍼티로 스펙 표기로 외부에서 사용 불가! [[]]형태

/* 내부 프로퍼티 분류 */
/* 공통 프로퍼티 : 모든 오브젝트(빌트인 오브젝트로 만든 오브젝트)에 공통으로 설정되는 프로퍼티 */
/* 선택적 프로퍼티 : 오브젝트에 따라 선택적으로 설정되는 프로퍼티
예를 들면 Array오브젝트에는 설정되지만 String오브젝트에는 설정되지 않는 그런 프로퍼티들 */

/* 엔진 해석 방법 */
/* 순서 */
// 자바스크립트 = 스크립팅 언어
// 스크립팅 언어는 작성된 코드를 위에서 부터 한 줄씩 해석(환경설정)하고 실행  but! 자바스크립트는 다르다.
// 중간에 있는 코드가 먼저 해석될 수도 있다. (먼저해석되는 기분이 있다.)
// 첫번째, 함수 선언문을 순서대로 해석 (코드 중 함수 선언문을 모두 추려낸다. 그후 작성한 순서로 해석)
// 두번째, 표현식(변수형태로 할당한 것)을 순서대로 해석(작성한 순서대로 해석)
function book() {
  debugger;
  var title = "JS책";
  function getBook() {
    return title;
  }
  var readBook = function(){};
  getBook();
};
book();

function book() {
  console.log(title);
  console.log(readBook);
  console.log(getBook);
  debugger;
  var title = "JS책";
  function getBook() {
    return title;
  }
  var readBook = function(){};
  getBook();
};
book();
// 실행 결과
// title, readBook = undefined
// getBook = function getBook(){ return title; }
// getBook이 function 오브젝트라는 것은 해석했다라는 뜻 - function오브젝트를 만들었다라는 것
// title, readBook에 undefined가 설정되어 있지만 이것은 해석을 했다라는 것
// 해석을 했다라는 것은 스코프에다가 식별자 해결을 위해 등록을 한 것
// 함수 선언문은 이름과 값이 전체가 등록되어 있고 title과 readBook은 이름은 정상적으로 등록되어 있지만 값은 아니다.
// undefined가 값으로 설정되어 있는 것은 자바스크립트는 프로퍼티를 등록할 때 이름만 있으면 값을 undefined로 자동으로 설정
// 그래야 네임: 벨류 형태로 등록되기 때문

/* 함수 코드 해석 순서 */
// 1. 함수 선언문 해석
// 2. 변수 초기화 (값을 할당하지 않음, 변수는 선언만 하고 값을 undefined 할당)
// 3. 코드 실행 ( 변수에 값을 할당 )

/* 호이스팅 (함수 앞에서 호출) */
// 일반적으로 스크립팅 언어는 위에서 아래로 내려오며 해석한다.
var result = book();
console.log(result);

function book(){
  return "호이스팅";
};
// function문이 아래에 있어 일반적인 스크립팅 언어이면 에러가 발생한다.
// 그러나 자바스크립트 언어는 다른 스크립팅 언어와 다르게 함수 선언문부터 해석을 하기 때문에 에러가 발생하지 않는다.
// 함수 앞에서 호출 가능하다 = 호이스팅
// 초기화 단계에서 값이 있으면 초기화 하지 않는다.

/* 오버로딩 */
// 함수 이름이 같더라도 파라미터 수 또는 값 타입이 다르면 각각 존재
// 함수를 호출하면 파라미터 수와 값 타입이 같은 함수가 호출
// JS는 오버로딩을 지원하지 않음! why? JS는 파라미터 수와 값 타입을 구분하지 않고 {name: value} 형태로 저장하기 때문
function book(one) {};
function book(one, two) {};
function book(one, two, three) {};

book(one, two);
// 오버로딩 미지원: 함수 선언문 초기화, 변수 초기화, 코드 실행