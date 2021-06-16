/* new Function() */
//Funtion 인스턴스 생성
// 파라미터에 문자열로 함수의 파라미터와 함수 코드 작성
/* var obj = new Function("파라미터이름", "함수블럭코드;");
 obj("파라미터 값"); */
// 파라미터 수에 따라 인스턴스 생성 기준이 다름
// 파라미터 2개 이상 작성
var obj = new Function("one", "two", "return one + two;");
console.log(obj(100, 200));
// 마지막 파라미터는 함수를 실행할 함수 코드 작성
// 파라미터 하나 작성
var obj = new Function("return 1+2;");
console.log(obj());
// 파라미터가 없을 때 사용
// 파라미터를 작성하지 않으면 함수 코드가 없는 Function 인스턴스 생성

/* Funtion() */
// 단지 new 연상자를 사용하지 않은 것

/* 함수 선언문 */
function getBook1(title) {
  return title;
}
var result = getBook1("JS책");
console.log(result);
// function 키워드, 함수 이름, {} 작성은 필수
// 파라미터, 함수 코드는 선택

/* 함수 표현식 */
// 할당연산자가 있어야한다.
var getBook2 = function(title){
  return title
};
var result = getBook2("JS책");
console.log(result);

// var name = function abc() {}의 형태도 가능\
// 여기서 abc() => 식별자 위치의 함수, 생략 가능
var getBook3 = function inside(value){
  if (value === 102){
    return value;
  };
  console.log(value);
  return inside(value + 1);
};
getBook3(100);
// inside()는 함수 외부에서는 호출이 불가능하고 함수 내부에서 호출이 가능
// 함수 안에서 inside()를 호출하는 것은 자신을 호출하는 것 이므로 무한으로 반복하여 호출 -> 재귀함수

/* call() */
// call()메소드 앞에 호출할 함수를 작성한다.
// 첫번째 파라미터에다가 호출된 함수에서 this로 참조할 오브젝트 작성
// 이후의 파라미터에다가 콤마로 구분하여 호출된 함수로 넘겨줄 파라미터 작성(선택)
function getTotal(one, two) {
  return one + two;
}
var result = getTotal.call(this, 10, 20);
console.log(result);
// this는 파라미터 값으로 넘어가지 않는다.
// 두번째 파라미터가 첫번째 파라미터로 넘어간다.

var value = {one: 10, two: 20}; /* 오브젝트를 생성해 value 변수에 할당 */
function getTotal2() {
  return this.one + this.two;
}; /* 함수 안에서의 this는 첫번째 파라미터로 넘겨준 value를 참조하게 된다. */
/* this.one + this.two = value.one + value.two */
var result = getTotal.call(value);
console.log(result);

/* apply() */
// call과 같다. 다른점은 두번째 파라미터를 배열로 작성 -> 배열이니 엘리멘탈의 수는 상관 없음 
function getTotal(one, two) {
  return one + two;
}
var result = getTotal.apply(this, [10, 20]);
console.log(result);

/* toString() */
// 거의 대부분의 빌트인 오브젝트에 toString()이 있지만 오브젝트마다 반환되는 형태는 다르다.
// funtion오브젝트의 toString()은 함수코드를 문자열로 반환한다.
var getBook4 = function(){
  return 100 + 23
};
var result = getBook4.toString();
console.log(result);

/* 아규먼트 오브젝트 */
function getTotal(one) {
  return one + arguments[1] + arguments[2];
};
var result = getTotal(10,20,30);
console.log(result);
// arguments[0]부터 차례대로 파라미터값이 저장

function getTotal(one) {
  return one + arguments[1] + arguments[2];
};
var result = getTotal.apply(this,[10,20,30]);
console.log(result);