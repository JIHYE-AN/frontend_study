/* this 개요 */
// 키워드
// obj.name() 형태로 호출함 함수(메소드)에서 this로 인스턴스(오브젝트)를 참조
// 실행 콘텍스트의 this바인딩 컴포넌트에 바인딩

/* this와 글로벌 오브젝트 */
// 글로벌 오브젝트에서 this는 글로벌 오브젝트 참조
// this와 window오브젝트
// window는 JS에서 만든 것이 아니며 글로벌 오브젝트의 스코프도 아님
// window와 글로벌 오브젝트를 같은 선상에서 사용한다.
// Host 오브젝트 개념 적용

/* this와 글로벌 오브젝트 */
// 글로벌 오브젝트에 코드 작성 window.onload = function(){ //안이 아니라 밖에 코드 작성 };
// this가 window 참조 (true가 출력된 것은 값과 타입이 같다는 것!)
console.log(this === window);
// this로 글로벌 변수 사용
var value = 100; /* value는 글로벌 변수 */
console.log(this.value); /* this가 글로벌 오브젝트를 참조하므로 this.value 형태로 글로벌 변수 사용 가능 */
// window로 글로벌 변수 사용
var value = 100; 
console.log(window.value); /* window가 글로벌 오브젝트를 참조하므로 window.value 형태로 글로벌 변수 사용 가능 */
// window오브젝트가 글로벌오브젝트가 같은 선상이다. 그렇다면 window.value나 this.value나 똑같다. 즉, window = 글로벌오브젝트로 봐도 되겠지만 실체는 다르다.
// this.value = 100; 형태로 값 할당
this.value = 100;
console.log(window.value);
// this가 글로벌 오브젝트를 참조하므로 글로벌 오브젝트에 설정된다.
// window가 글러벌 오브젝트를 참조하므로 value를 사용할 수 있다.
// window 오브젝트와 같이 다른 오브젝트를 마치 내것 처럼 사용하는 개념을 Host 오브젝트라고 한다.
// DOM 오브젝트도 Host오브젝트 이다.

/* this 와 window 오브젝트 */
// window.onload = function(){//여기에 코드 작성};
// onload는 이벤드 헬들함수. 즉, onload 이벤트가 발생되면 function에 작성한 코드를 실행
// this가 window 참조 (true가 출력된 것은 값과 타입이 같다는 것!)
window.onload = function(){
  console.log(this === window);
};
// onload 이벤트가 발생하게 되면 실행 콘텍스트를 만들고 onload앞에 작성한 window를 this바인딩컨포넌트에 바인딩한다. 그리고 함수안에서 그것을 this로 참조하게 된다.
// this가 window를 참조하는 것은 onload()가 window의 핸들러 함수이기 때문이다.
// this로 로컬(지역) 변수 사용
window.onload = function(){
  var value = 100; // value는 핸들러 함수의 지역 변수
  console.log(this.value); // this가 window 오브젝트를 참조하므로 this.value로 지역 변수에 악세스 할 수 없다.
  // this를 사용하면 this바인딩컨포넌트에 가서 찾는다 그 곳에는 value 변수가 없다. 
};
// this.value = 100; 형태로 값 할당
window.onload = function(){
  this.value = 100; 
  console.log(window.value); // this가 window오브젝트를 참조하므로 window 오브젝트에 설정된다.
};

/* this 참조 범위 */
/* this와 strict 모드*/
// 오브젝트.함수이름() 형태로 함수 호출 글로벌 오브젝트는 오브젝트 이름이 없으므로 함수 이름만 작성하여 호출
// strict 모드에서는 window.book()처럼 book()앞에 window를 글로벌 오브젝트로 작성
// 함수 앞에 오브젝트를 작성하지 않으면 this 바인딩 컴포넌트에 undefined가 설정되므로 this로 window(글로벌 오브젝트)를 참조할 수 없다.
function book() {
  "use strict";
  return this;
};
var result = book()
console.log(result);
// 호출하는 book() 함수 앞에 오브젝트를 작성하지 않으면 return this에서 undefined를 반환
// this 바인딩 컴포넌트에 undefined가 설정된다는 뜻이다.

function book() {
  "use strict";
  return this;
};
var result = window.book()
console.log(result === window);
// 호출하는 book() 함수 앞에 window 오브젝트 작성. book() 함수가 글로벌 함수이므로 호출되며 return this에서 window 오브젝트 반환

/* this 참조 오브젝트 */
var book = {
  point: 100,
  member: {
    point: 200,
    get: function(){
      console.log(this === book.member);
      console.log(this.point);
    }
  }
};
book.member.get();
// this가 참조하는 오브젝트
// 마지막 줄에서 book.member.get() 호출 : this가 member 오브젝트 참조. book은 get()을 호출하는 경로 역할
// console.log(this === book.member); : [실행결과] ture 출력. this가 book.member를 참조하기 때문 즉, this 바인딩 컴포넌트에 book.member 오브젝트가 설정됩니다.
// console.log(this.point); : this가 book.member를 참조하므로 book.point 값인 100을 출력하지 않고 book.member의 200을 출력합니다.

/* this와 인스턴스 */
// 인스턴스 목적? 인스턴스마다 고유 값 유지
// 인스턴스에서 this의 목적? this로 인스턴스를 참조하여 this.name 형태로 프로퍼티에 접근. name의 값이 function오브젝트이면 name은 메소드이름이 되고, 값이 number형태이면 name은 프로퍼티이름이 된다.
// __proto__ 프로퍼티 접근. prototype에 연결된 프로퍼티가 인스턴스의 __proto__에 첨부되며 this.method()형태로 __proto__에 첨부된 method() 호출
// prototype에 연결된 메소드는 모든 인스턴스에서 공유. 그리고 인스턴스마다 고유의 값을 유지. 백개를 만들던 만개를 만들던 prototype에 연결된 메소드는 모두 같다.
// 그러나 인스턴스마다 고유의 값을 갖게 되므로 일관된 환경에서 값만 다르게 가져가겠다는 것! 즉, 데이터 중심의 처리인 것
var book = {};
book.Point = function(point){
  this.point = point;
};
book.Point.prototype.getPoint = function(){
  console.log(this.point);
};
var obj = new book.Point(100);
var obj2 = new book.Point(200);
obj.getPoint();
obj2.getPoint();
// 1. var obj = new book.Point(100); : book.Point 인스턴스를 생성하고 넘겨준 100을 this로 참조하는 point프로퍼티에 값을 할당한다.
// 2. this.point = point; : this가 생성한 인스턴스를 참조하므로 point는 인스턴스 프로퍼티가 된다. 이논리로 인스턴스마다 프로퍼티 이름과 값을 유지할 수 있다.
// 3. obj.getPoint(); : obj 인스턴스의 getPoint() 메소드를 호출
// 4. console.log(this.point); : obj.getPoint()로 호출, this가 obj 참조한다. obj는 book.Point 인스턴스이다.
// book.Point 인스턴스의 point 값을 출력한다.

/* this와 call() */
// getTotle.call(this, 10, 20) 형태로 작성
// 첫 번째는 파라미터 값으로 넘어가지 않고 두 번째부터 넘어갑니다.
// 첫 번째 파라미터에 호출된 함수에서 this로 참조할 오브젝트를 작성한다. this 이외에 다른 오브젝트 사용 가능하다.
// this바인딩컴포넌트에 첫 번째 파라미터에 작성된 오브젝트가 바인딩 된다.

/* this 사용 */
// window.onload = function(){//onload 밖에 코드를 작성한다. //즉, 글로벌 오브젝트에서 실행한다.};
"use strict";
var value = 100;
function get(param) {
  return param + this.value;
};
var result = get.call(this,20);
console.log(result);
// 1.get.call(this.20); : 첫번째 파라미터에 this 작성
// 2. return param + this.value; : this가 글로벌 오브젝트를 참조하므로 (var value=100)을 사용한다.
// ----- call()을 사용하지 않고 -----
// 3. return param + this.value; : get(20)으로 호출하면 this가 undefined를 참조하므로 에러가 발생한다.
// get앞에 오브젝트를 작성하지 않았고 use strict모드 이므로 this는 undefined를 참조하게 된다.

/* Object 사용 */
var get = function(value){
  return this.base * this.rate + value;
};
var value = {base: 20, rate: 30};
var result = get.call(value, 50);
console.log(result);
// 1. var result = get.call(value, 50); : call()의 첫 번째에 Object 작성. 50은 파라미터 값
// 2. return this.base * this.rate + value; : this가 {base: 20, rate: 30}을 참조. 20*30+50
// 3. this로 참조할 오브젝트를 변경할 수 있는 것이 call()의 특징이다.
// get()함수 안에서는 코드가 바뀌지 않아도 된다. 다만 this로 참조하는 오브젝트가 바뀔 뿐이다.

/* 숫자 작성 */
function get(){
  return this.valueOf();
};
var result = get.call(123);
console.log(result);
// 1. var result = get.call(123); : this가 오브젝트를 참조하므로 숫자를 작성하면 에러가 발생해야 하지만
// 값(123) 타입에 해당하는 Number 인스턴스를 생성하고 123을 프리미티브 값으로 설정한디..
// this가 Number인스턴스를 참조한다.

/* this 참조 변경(굉장히 유용) */
var book = {
  value: 123,
  point: {
    value: 456,
    get: function (){
      console.log(this.value);
    }
  }
};
book.point.get.call(book);
book.point.get.call(book.point);
// 1. book.point.get.call(book); : book.point의 get()호출. get()에서 this로 book오브젝트 참조. this.value가 book.value이므로 123 출력
// 2. book.point.get.call(book.point); : book.point의 get()호출. get()에서 this로 book.point 오브젝트 참조
// this.value가 book.point.value이므로 456 출력

/* this와 apply() */
// getTotal.apply(this, [10, 20]) 형태로 호출
// 함수 호출 방법은 call()과 같으며 파라미터가 배열인 것이 다르다.
// [10, 20]을 파라미터 값으로 넘겨준다.
// 두 번째 파라미터 수가 유동적일 때 사용! call()은 파라미터 수가 고정일 때 사용

/* this와 argument */
var obj = {0: 10, 1: 20, 2: 30};
var data = [4,5,6];

function get(){
  for (k = 0; k < arguments.length; k++){
    console.log(arguments[k] + this[k]);
  };
};
get.apply(obj, data);
// 1. get.apply(obj, data); : get() 함수에서 obj를 this로 참조한다.
// 2. 두번쨰 파라미터 [4,5,6]을 arguments를 사용하여 계산. 파라미터 수가 유동저기므로 arguments가 편리하다.
// 3. get()의 함수 코드는 바뀌지 않으며 넘겨 주는 파라미터 값과 this로 참조할 오브젝트만 변경하면 된다.
// 4. Array-like 형태

/* this와 콜백 함수 */
var obj = {value: 100};
var data = [5,6,7];

function callback(element, index, data) {
  return element + this.value;
};
function get(data) {
  return data.map(callback, obj);
};
var result = get(data);
console.log(result);
// 1. ES5의 map(), forEach()처럼 콜백 함수가 있는 메소드는 두 번째 파라미터에 this로 참조할 오브젝터를 작성(option)
// 2. function callback(element, index, data) {...} : map()에서 호출하는 콜백 함수
// 3. return data.map(callback, obj); : map()의 두 번째 파라미터에 obj를 작성. callback()에서 obj를 this로 참조한다.
// 4. map()의 코드는 바꾸지 않고 obj 값과 data 파라미터 값만 바꾸면 된다.
// map()은 callback함수를 호출하면서두번째 파라미터에 작성된 obj를 this로 넘겨주는것! callback()함수에서 무엇을 하는지는 map()메소드가 알 필요는 없다.
// 바로 이것이 독립성. 너는너대로 나는 데이터에 따라 너를 호출해주기만 할께!
// map() 메소드는 데이터를 넘겨주는게 목적이다. 나머지는 callback함수에서 처리한다. 남은 this는 map()메소드에서 두번째 파라미터에 적힌 아이를 참조로 넘겨준다.

/* this와 bind() */
/* bind() - 시멘틱 그대로 묶는 것 */
// 두 번에 나누어 처리. 1단계: function 오브젝트 생성. 2단계: 생성한 function 오브젝트를 함수로 호출.
// 나눈 이유는 바인드를 위해서 묶기위해서 나눈 것이다.
// 파라미터 : 1번째 파라미터에 함수ㄹ에서 rthis로 참조할 오브젝트를 작성
// 2번째 파라미터에 호출된 함수의 파라미터 값 즉, 파라미터값과 this로 참조할 오브젝트를 묶는 것!
// 생성한 function을 호출할 때에도 파라미터 작성 가능! 두개의 파라미터를 병합하여 사용할 수 있다.

/* function 오브젝트 생성, 호출 */
var book = {
  point: 123,
  get: function(){
    return this.point;
  }
};
var obj = book.get.bind(book);
console.log(typeof obj);
var result = obj();
console.log(result);
/* var obj = book.get.bind(book);
book.get()을 호출하지 않고 function 오브젝트를 생성하여 반환한다.
생성한 function 오브젝트를 생성한 오브젝트의 내부프로퍼티인 [[TargetFunction]]에 설정한다.
처리(실행)를 나누어서 하므로 저장이 필요하다. */
/* console.log(typeof obj);
obj의 타입은 function 오브젝트이다. */
/* bind()의 첫 번째 파라미터
get()함수에서 this로 참조할 오브젝트 작성한다.
get()함수 앞에 작성한 오브젝트를 this로 참조하지 않고 bind()함수의 첫 번째 프로퍼티를 this로 참조한다.
작성하지 않으면 undefined설정해 undefined를 참조한다.
생성한 function 오브젝트의 [[BoundThis]]에 설장한다. */
/* var result = obj();
bind()로 생성한 function 오브젝트 호출한다.
book.get() 함수가 호출된다. */
/* return this.point;
this가 [[BoundThis]]를 참조한다.
즉, book오브젝트를 참조하므로 123을 반환한다. */

/* 파라미터 병합 */
var book = {
  get: function(){
    return Array.prototype.slice.call(arguments);
  }
};
var obj = book.get.bind(this, 10, 20);
var result = obj(30, 40);
console.log(result);
/* var obj = book.get.bind(this, 10, 20);
두번째, 세번째 파라미터에 값을 작성했으며 book.get()의 파라미터 밧으로 넘겨분다.
function 오브젝트의 [[BoundArguments]]에 설정된다. */
/* get() 함수에 파라미터 이름을 작성하지 않고 arguments를 사용한다. */
/* return Array.prototype.slice.call(arguments);
slice()는 인덱스 범위의 엘리먼트를 배열로 반환한다.
인덱스를 작성하지 않으면 arguments 전체를 반환한다. */
/* var result = obj(30, 40);
book.get()함숮가 호출되며 book.get.bind(this, 10, 20);에서 10과 20을 [10,20]형태로 반환한다.
여기에 obj(30,40)의 30과 40을 병합(첨부)하여 반환한다.*/

/* bind()활용, 이벤트 처리 */
/* 시나리오 : "값 출력" 버튼을 클릭하면 값 표시 */
var book = {
  myPoint: 100,
  setEvent: function(){
    var node = document.getElementById("point");
    node.onclick = this.show.bind(book, node);
  },
  show: function(node, event){ // show는 핸들러 함수
    console.log(node.textContent);
    console.log(this.myPoint);
  }
};
book.setEvent();
/* HTML형태:
<script src="point.js" defer></script>
<button id="point"> 값 출력</button> */
// 이벤트 처리의 어려움은 이벤트를 설정할 때의 오브젝트를 핸들러에서 this로 참조할 수 없다는 것!
// bind()로 해결 가능
/* document.getElementById("point");
button#point로 엘리먼트 오브젝트 생성 */
/* node.onclick = this.show.bind(book, node);
show()는 onclick 이벤트의 핸들러
show()에서 this로 book 오브젝트를 참조하기 위해 바인드한다.
show() 파라미터 값으로 node를 넘겨준다. */
/* show: function(node, event){
button#point를 클릭했을 때 호출된다.
node: 이벤트를 설정한 엘리먼드
event: Event 오브젝트 */
/* console.log(this.myPoint);
binde() 첫 번째 파라미터에 book 오브젝트를 작성했으며
이를 this로 참조하므로 100이 표시됩니다. */











