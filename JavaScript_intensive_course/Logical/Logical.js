/* 논리적 정리 */

/* 프로퍼티 연동 방지 */
// Object에 Object를 할당하면 프로퍼티 값이 연동된다.
var origin = {member: 100};
var dup = origin;
dup.member = 200;
console.log(origin.member);
// 1. origin 오브젝트를 dup변수에 할당한 후 dup.member에 200을 설정하면 origin.member 값이 연동되어 바뀐다.
// 2. 오브젝트를 할당하면 값을 공유하기 때문이다.

// 배열도 마찬가지로 연동된다.
var origin = [1,2,3];
var dup = origin;
dup[1] = 200;
console.log(origin);
// 배열도 마찬가지로 배열을 할당하면 값을 공유한다.

// 연동방지: 프로퍼티 단위로 할당
var origin = {member: 100};
var dup = { };
for (var name in origin){
  dup[name] = origin[name];
};
dup.member = 200;
console.log(origin.member);
console.log(dup.member);
// 값의 공유를 방지하려면 프로퍼티 단위로 할당해야 한다.

/* 재귀함수 */
// Recursive Function : 함수 안에서 자신 함수를 호출하는 형태
// 사용사례 : {name:{name:{name:value}}}, [[1,2],[3,4],[5,6]]

/* 재귀 함수 형태 */
var book = {
  member: {name:100},
  point: {value: 200}
};
function show(param){
  for (var type in param){
    typeof param[type] === "object"
      ? show(param[type])
      : console.log(type + ":", param[type]);
  }
};
show(book);
// 1. show(book); : 마지막 줄에서 show(book)를 호출하면서 book 오브젝트를 파라미터 값으로 넘겨준다.
// 2. for (var type in param){...} : for-in으로 파라미터로 받은 오브젝트를 전개한다.
// 3. param[type] 타입이 "object"이면 show()를 호출 자신을 호출하면서 param[type]을 넘겨준다.
// book["member"]이므로 {name: 100}이 넘어 간다.
// 4. param[type] 타입이 "object"가 아니면 member: {name: 100}에서 {name: 100}을 읽은 것이므로 값을 출력한다.

/* 즉시 실행 함수 IIFE(Immediately Invoked Function Exoression)*/
// 함수 즉시 실행이란? 엔진이 함수를 만났을때 자동으로 함수를 실행 즉, 엔진이 function키워드를 만났을때 function오브젝트를 생성하고 함수를 실행
// (function(){...}()) 형태. 함수 이름이 없으므로 함수 선언문, 함수 표현식도 아님
// 그러나 문법 에러가 나지 않음. 무명 함수, 익명 함수라고도 부름

/* 함수 즉시 실행 과정 */
// 표현식을 평가 소괄호()는 그룹핑 연산자
var total = (1+2);
console.log(total);
// 1. (1+2)형태에서 소괄호()는 그룹핑 연산자이며 1+2는 표현식이다.
// 2. 그룹핑 연산자는 소괄호 안의 표현식을 평가하고 평가 결과를 반환한다. 저장하지 않음.
// 3. 소괄호()와 표현식 평가가 키포인트!

// 함수이름 필요. 함수에 이름이 없으면 문법 에러
var value = function(){
  return 100;
};
console.log(value());
// 1. 함수표현식으로 엔진이 function 키워드를 만나면 function오브젝트를 생성하여 value 변수에 할당
// 2. value 변수를 선언하지 않으면 함수 이름이 없으므로 문법 에러. 함수 표현식도, 함수 선언문도 아니기 때문
// 3. value()처럼 function 끝에 소괄호()를 첨부하면 함수로 호출. 이때, 소괄호()는 그룹핑 연산자가 아닌 함수 호출

// 함수 표현식 끝에 소괄호 작성 
var value = function(){
  return 100;
}();
console.log(value);
// 1. 함수 끝에 소괄호를 첨부한 형태
// 2. function 키워드를 만나 function 오브젝트 생성
// 3. 소괄호가 있으므로 함수 호출
// 4. 함수에서 반환한 100을 value 변수에 할당.
// 함수 끝에 소괄호를 첨부했더니 함수를 바로 실행. 변수에 함수를 할당하지 않고 바로 즉시 실행해서 return 100을 한다.

// 소괄호()에 함수 작성
var value = (function(){
  return 100;
}());
console.log(value);
// 1. 소괄호 안에서 함수 작성
// 2. 소괄호는 그룹핑 연산자
// 3. 그룹핑 연산자이므로 소괄호 안의 표현식을 평가
// 4. 표현식이 함수이므로 function 오브젝트 생성
// 5. function 끝에 소괄호가 있으므로 함수 실행

// 그룹핑 연산자에셔 반횐된 값이 할당되는 변수를 작성하지 않은 형태
(function(){
  console.log(100);
}());
// 그룹핑 연산자를 작성하지 않으면 문법에러 하지만, 그룹핑 연산자를 작성하면 표현식에 function을 작성한 것이므로 문법에러가 발생하지 않습니다.
// 표현식과 표현식 평가 결과는 평가 결과가 빈환할 때까지 메모리에 저장하고 평가 결과를 반환하면 지워진다.
// 코드로 만든 오브잭트도 메모리에 저장되지 않는다.
// 따라서 저장할 것이 있다면 표현식 밖의 변수, 프로퍼티애 저장해야 한다.
// 저장할 필요가 없는 1회성 코드이면서 엔진이 fucntion키워트를 만나는 시점에 즉시 실행해야 한다면 그룹핑 연산자 안에 표현식으로 작성
// 무명함수는 그룹핑 연산자 안의 코드를 한 번만 사용할 떄 사용한다. 주로 초깃값을 설정할 때 사용

/* 클로저 논리 */
// 클로저(Closure) 란? function 오브젝트를 생성할 때 함수가 속한 스코프를 [[Scope]]에 설정하고 함수가 호출되었을 때  [[Scope]]의 프로퍼니를 사용하는 메커니즘
// [[Scope]]의 설정과 사용 방법을 이해하면 클로저는 단지 논리적인 설명이다.

//실행 중인 function 오브젝트에 작성한 변수, 함수를 선언적 환경 레코드에 설정한다.
// [[Scope]]의 변수, 함수를 외부 렉시컬 환경 참조에 바인딩한다.
// 변수 이름으로 접근하여 값을 사용하거나 변경할 수 있다. 함수를 호출할 수 있다.
/* 실행 콘텍스트: {
    렉시컬 환경 컴포넌트: {
      환경 레코드: {
        선언적 환경 레코드:{},
        오브젝트 환경 레코드: {}
      },
      외부 렉시컬 환경 참조: {}
    }
  } */
//외부 렉시컬 환경 참조에 있는 것을 내 것처럼 사용하겠다는 것 그것이 클로저 논리

/* 클로저 논리 전개 */
function book(){
  var point = 100;
  var getPoint = function(param){
    point = point + param;
    return point;
  };
  return getPoint;
};
var obj = book();
console.log(obj(200));
// 1. var obj = book(); : book()을 호출하면 엔진은 아래 방법으로 처리. getPoint()의 클로저가 만들어진다.
// 실행 준비 단계 ....
// 2. 실행 콘텍스트(EC) 생성
// 3. 3개의 컴포넌트 생성 : 렉시컬/변수 환경 컴포넌트, this 바인딩 컴포넌트
// 4. function 오브젝트의 [[Scope]]를 외부 렉시컬 환경 참조에 바인딩
/* 실행 콘텍스트: {
    렉시컬 환경 컴포넌트: {
      환경 레코드: {
        선언적 환경 레코드:{},
        오브젝트 환경 레코드: {}
      },
      외부 렉시컬 환경 참조: {[[scope]]}
    },
    변수 환경 컴포넌트 = {Same},
    this 바인딩 컴포넌트: {}
  } */
// 초기화 및 실행 단계...
// 5. var point; var getPoint; : 변수 이름을 선언적 환경 레코드에 설정한다.
// 6. var point = 100; : 선언적 환경 레코드의 point에 100 할당
// 7. var getPoint = function(param){...}; : function 오브젝트를 생성한다. 스코프를 [[Scope]]에 바인딩한다. point:100이 [[Scope]]에 바인딩된다.
/*  렉시컬 환경 컴포넌트: {
      환경 레코드: {
        선언적 환경 레코드:{},
      },
      외부 렉시컬 환경 참조: {
        point: 100
      }
    } */
// 8. return getPoint; : getPoint function 오브젝트 반환
// 9. var obj = book(); : return getPoint에서 반환한 getPoint function 오브젝트를 obj에 할당
// 10. console.log(obj(200)); : obj()를 호출하면 getPoint(200)함수가 호출된다. 클로저와 관련된 부분만 추려보면 아래 처리를 하게 된다.
// 클로버와 관련된 부분 ...
// 11. 실행 콘텍스트(EC) 생성 : getPoint 오브젝트의 [[Scope]]를 외부 렉시컬 환경 참조에 바인딩한다. 파라미터 이름에 값을 매핑하고 결과를 선언적 환경 레코드에 설정한다.
/*  렉시컬 환경 컴포넌트: {
      환경 레코드: {
        선언적 환경 레코드:{
          param: 200
        },
      },
      외부 렉시컬 환경 참조: {
        point: 100
      }
    } */
// 12. 함수 안의 코드 실행
// 13. point = point + param; : point를 선언적 환경 레코드에서 식별자 해결.
// point가 없으므로 외부 렉시컬 환경 참조에서 식별자 해결. point가 있으며 값이 100이다.
// param을 선언적 환경 레코드에서 식별자 해결. param이 있으며 값이 200이다.
// 100과 200을 더해 외부 렉시컬 환경 참조의 point에 할당한다.
// 14. 변수가 선언적 환경 레코드에 없으면 외부 렉시컬 환경 참조에서 식별자 해결!
// ** 이것이 클로저 논리이다 **

/* 클로저와 무명 함수 */
// 무명 함수 안에 작성한 값, 함수는 무명 함수가 끝나면 지워진다.
// 따라서 다시 사용하려면 저장 필요. 무명 함수는 저장하지 않으려는 의도로 사용!
// 클로저는 함수 밖 스코프의 변수와 함수를 사용할 수 있다.
// 변수는 외부에서 직접 접근할 수 없으므로 정보를 보호할 수 있다.
// 무명 함수 안에서 클로저의 변수를 가진 함수를 반환하면 함수를 재사용과 정보 보호를 할 수 있다.

var book = (function(){
  var point =100;
  function getPoint(param){
    return point + param;
  };
  return getPoint;
}());
console.log(book(200));
// function getPoint(param){...} : [[Scope]]에 스코프설정
// return getPoint; : 즉시 실행 함수에서 getPoint 함수 반환. book 변수에 할당. point 변숫값을 사용할 수 있다.
// console.log(book(200)); : 반환된 함수를 호출하면서 200을 파라미터 값으로 넘겨 준다.
// function getPoint(param){코드} : getPoint function 오브젝트의 [[Scope]]를 외부 렉시컬 환경 참조에 바인딩한다. 
// point와 param을 선언적 환경 레코드에서 식별자 해결을 하고 만약 없으면 외부 렉시컬 환경 참조에서 식별자 해결을 한다.

/* JS에서 클로저 */
// 함수에서 함수 밖의 변수 사용은 JS의 기본 메커니즘
// 논리적 근거는 외부 렉시컬 환경 참조에 함수가 속한 스코프가 설정되기 때문
// 클로저는 이를 나타내는 용어. 용어보다 논리적 구조 이해
