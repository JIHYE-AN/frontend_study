/* function 인스턴스 기준 */
// function 구분
// 빌트인 Function 오브젝트
// function 오브젝트: function 키워드로 생성
// function 인스턴스: new 연산자로 생성
// function 오브젝트도 인스턴스이다. 빌트인 Function 오브젝트로 생성하기 때문
// 성격적으로 인스턴스이지만 new 연사나로 생성한 인스턴스와 구분하기 위해 강좌에서 function 오브젝트로 표기
// new 연산자로 생성하는 인스턴스는 일반적으로 prototype에 프로퍼티를 작성

/* function 인스턴스 생성 */
function Book(point) {
  this.point = point;
};
Book.prototype.getPoint = function (){
  return this.point + 200;
};
var obj = new Book(100);
console.log(obj.point);
console.log(obj.getPoint());
// 1. function Book(point){...} : Book 오브젝트를 생성. Book.prototype이 만들어진다(엔진이 자동으로 만든다.)
// 2. Book.prototype.getPoint = function (){} : Book.prototype에 getPoint를 연결하고 function (){} 을 할당. Book.prototype이 오브젝트 이므로 프로퍼티를 연결할 수 있다.
// 3. var obj = new Book(100); : Book()을 실행하며 인스턴스를 생성하고 생성한 인스턴스에 point값을 설정. Book.prototype에 연결된 프로퍼티를 생성한 인스턴스에 할당한다.
// 4. console.log(obj.point); : obj 인스턴스에서 프로퍼티 이름으로 값을 구해 출력한다. 식별자 해결을 하는 것.
// 5. console.log(obj.getPoint()); : obj 인스턴스의 메소드를 호출
// 6. return this.point + 200;에서 this가 obj 인스턴스를 참조
// 7. 강조의 함수/ 메소드 사용 기준 Book(): 함수, getPoint(): 메소드, prototype에 연결

/* 생성자 함수 */
// new 연산자와 함꼐 인스턴스를 생성하는 함수
// new Book()에서 Book()이 생성자 함수
// new 연산자 : 인스턴스 생성을 제어(new 연산자에서 인스턴스를 만드는 것이 아니다), 생성자 함수 호출
// 생성자 함수 : 인스턴스 생성, 반환, 인스턴스에 초깃값 설정
// new 연산자가 생성자 함수를 호출하면 생성자 함수에서 인스턴스를 생성하여 반환하면 new 연산자는 이것을 받아 반환
// 코딩 관례: 생성자 함수의 첫 문자는 대문자로!

/* 생성자 함수 실행 과정 */
function Book(point) {
  this.point = point;
};
Book.prototype.getPoint = function (){
  return this.point;
};
var obj = new Book(10);
// 1. 엔진이 new 연산자를 만나면 function의 [[Construct]]를 호출하면서 파라미터 값으로 10을 넘겨준다.
// 2. function 오브젝트를 생성할 때 Book() 함수 전체를 참조하도록 [[Construct]]에 설정하였다.
// 3. [[Construct]]에서 인스턴스를 생성하여 반환
// 4. 반환된 인스턴스를 new 연산자가 받아 new연산자를 호출한 곳으로 반환한다.
// 5. new라는 뉘앙스로 인해 new 연산자가 인스턴스를 생성하는 것으로 생각할 수 있지만 function 오브젝트의 [[Construct]]가 인스턴스를 생성한다.
// 그래서 Book()이 생성자 함수이다.

/* 인스턴스 생성 과정 */
function Book(point) {
  this.point = point;
};
Book.prototype.getPoint = function (){
  return this.point;
};
var obj = new Book(10);
// 1. new Book(10) 실행하면 Book 오브젝트의 [[Construct]](내부프로퍼티) 호출해 파라미터 값을 넘겨줍니다.
// 2. 빈 Object를 생성합니다. 이것이 인스턴스이며 지금은 빈 오브젝트{ }이며 이제부터 하나씩 채워갑니다.
// 3. 오브젝트에 내부 처리용 프로퍼티를 설정합니다. 공통 프로퍼티와 선택적 프로퍼티
// 4. 오브젝트의 [[Class]]에 "Object" 설정. 따라서 생성한 인스턴스 타입은 Object입니다.
// 5. Book.prototype에 연결된 프로퍼티(메소드)를 생성한 인스턴스의 [[Prototype]]에 설정하고 constructor(외부프로퍼티)도 같이 설정됩니다.
/* Book 인스턴스: {
    point: 10,
    __proto__ = {
      constructor: Book,
      getPoint: function(){},
      __proto__: Object
    }
  }
*/

/* constructor 프로퍼티 */
// 생성하는 function 오브젝트를 참조! function 오브젝트를 생성할 때 설정하며 prototype에 연결되어 있다.
/* Book function 오브젝트: {
    prototype: {
      constructor: Book(Book function 오브젝트 전체를 참조)
    }
  }
*/
// constructor가 없더라도 인스턴스가 생성된다. 하지만 필요하지 않다는 것은 아니다.
// ES5 : constructor 변경 불가. 생성자를 활용할 수 없음
// ES6: constructor 변경 가능. 활용성 높음

/* constructor 비교 */
var Book = function(){};
var result = 
  Book === Book.prototype.constructor;
console.log("1:", result);

var obj = new Book();
console.log("2:", Book === obj.constructor);

console.log("3:", typeof Book);
console.log("4:", typeof obj);
/* 1. Book === Book.prototype.constructor;
[실행결과] 1번에 true 출력 이유는?
Book오브젝트와 Book.prototype.constructor가 타입까지 같다는 뜻!
Book 오브젝트를 생성할 떄 Book.prototype.constructor가 Book 오브젝트를 참조하기 때문
*/
/* 2. Book === obj.constructor
[실행결과] 2번에 true 출력 이유는?
obj의 constructor가 Book 오브젝트를 참조하므로 true가 출력!
*/
/* 3. typeof Book;
Book 오브젝트 타입은 function
*/
/* 4. typeof obj;
obj 인스턴스의 타입으 object
function 오브젝트를 인스턴스로 생성했더니 object로 타입이 변경되었다?
이것은 [[Construct]]가 실행될 때 생성한 오브젝트의 [[Class]]에 'Object'를 설정하기 때문!\
*/
// 오브젝트 타입이 바뀐다는 것은 오브젝트 성격과 목적이 바뀐 것을 뜻한다.
// 즉 인스턴스는 일반적인 함수 개념으로 접근하는 것이 아니라 인스턴스 개념으로 접근해야한다.
// 인스턴스의 가장 큰 특징은 prototype이 있으며 그 prototype에 많은 메소드들이 연결된다. 즉, 함수가 하나가 아니라 다수라는 것
// function은 함수가 하나. 인스턴스는 함수가 다수

/* prototype 오브젝트 목적 */
// Prototype 확장. prototype에 프로퍼티를 연결하여 prototype확장 예) Book.prototype.getPront = function(){}
// 프로퍼티 공유. 생성한 인스턴스에서 원본 prototype의 프로퍼티 공유
// 인스턴스 상속. function 인스턴스를 연결하여 상속. 자바스크립트에서 상속은 prototype의 확장으로 볼 수 있다. 예) Point.prototype = new Book();

/* 인스턴스 상속 */
// prototypee에 연결된 프로퍼티로 인스턴스로 생성하여 상속받을 prototype에 연결 (prototype에 연결되지 않은 것은 들어오지 않는다.)
// prototype-based 상속이라고도 한다.
function Book(title) {
  this.title = title;
};
Book.prototype.getTitle = function(){
  return this.title;
};
function Point(title) {
  Book.call(this, title);
};
Point.prototype = Object.create(Book.prototype, {});
var obj = new Point("자바스크립트");
console.log(obj.getTitle());
// Js에서 prototype은 상속보다는 프로퍼티 연결이 의미가 더 크다. 인스턴스 연결도 프로퍼티 연결의 하나!
// ES5 상속은 OOP(객체지향프로그래밍)의 상속 기능 부족 ES6의 Class로 상속 사용

/* prototype 확장 방법 */
// prototype에 프로퍼티를 연결하여 작성 prototype.name = value 형태
// name에 프로퍼티 이름 작성
// value에 JS 데이터 타입 작성가능 일반적으로 function을 사용
// prototype에 null을 설정하면 확장 불가

/* 프로퍼티 연결 고려사항 */
// prototype에 연결할 프로퍼티가 많을 때 Book.prototype을 반복해서 작성해야 하므로 번거롭기 때문에 Book.prototype = {name1: value,....} 형태로 작성
// constructor가 지워지는 문제가 있는데 그래도 {name1: value....} 형태로 설정한 후 prototype에 constructor를 다시 연결하는 것이 더 낫다.\

/* constructor 연결 */
function Book() {};
Book.prototype = {
  constructor: Book,
  setPoint: function(){}
};
var obj = new Book();
console.log(obj.constructor);
// 오브젝트 리터럴{}을 사용하여 프로퍼티를 연결할 때에는 constructor가 지워지는 것을 고려해야한다.
// constructor가 없어도 인스턴스가 생성되지만 constructor가 연결된 것이 정상이므로 코드처럼 constructor에 Book function을 할당합니다.
// ES5에서는 이런 방법을 쓰는 것이 정확하지만 ES6에서는 이런 것을 고민하지 않아도 된다.

/* Prototype 확장과 인스턴스 형태 */
function Book(point) {
  this.point = point;
};
Book.prototype.getPoint = function(){
  return this.point;
};
var obj = new Book(100);
obj.getPoint();
// prototype 확장
// 1. function Book(point) {}; : Book 오브젝트 생성
// 2. Book.prototype.getPoint = function(){} : Book.prototype에 getPoint 메소드 연결
// 3. var obj = new Book(100); : 인스턴스를 생성하여 obj에 할당
// 4. obj.getPoint() : obj인스턴스의 getPoint() 호출
// 5. 인스턴스를 생성하면 prototype에 연결된 메소드를 인스턴스.메소드이름() 형태로 호출
/* obj: {
    point: 100,
    __proto__ = {
      constructor: Book,
      getPoint: function(){},
      __proto__: Object
    }
  } */

/* this로 인스턴스 참조 */
// this로 메소드를 호출한 인스턴스 참조 objA.objB.get() 이면 this로 objB를 참조
// 인스턴스에서 메소드 호출 방법 : prototype에 연결된 프로퍼티가 __proto__설정되어 인스턴스 프로퍼티가 된다. 
// this.prototype.serProint()형태가 아닌 this.setPoint() 형태로 호출

/* this와 prototype의 관계 */
function Book(){
  console.log("1:", this.proint);
};
Book.prototype.getPoint = function(){
  this.setPoint();
  console.log("2:", this.point);
};
Book.prototype.setPoint = function(){
  this.point = 100;
};
var obj = new Book();
obj.getPoint();
/* console.log("1:", this.proint);
생성자 함수에서 this는 생성하는 인스턴스 참조
생성하는 인스턴스에 point 프로퍼티가 없더라도 에러가 나지 않고 undefined를 반환한다.
프로퍼티는 undefined를 반환하고 변수는 point변수가 없으면 에러가 난다.
*/
/* obj.getPoint();
this가 메소드를 호춣한 인스턴스를 참조 (자신을 호출한 인스턴스를 this로 참조)
즉, 메소드 앞에 작성한 인스턴스 참조
*/
/* this.setPoint();
this가 인스턴스를 참조하여 인스턴스에 있는 setPoint()를 호출
이런 점이 단일함수로 사용하는 것과 인스턴스를 사용하는 것의 차이이다.
인스턴스 안에서는 prototype에 연결되어 있는 것들은 모두 다 하나의 프로퍼티 개념이다.
그래서 this로 호출할 수 있는 것이다.
*/
/* this.point = 100;
this가 인스턴스를 참조 인스턴스의 point 프로퍼티에 100을 할당
*/

/* prototype 메소드 직접 호출 */
function Book(){
  this.point = point;
};
Book.prototype.getPoint = function(){
  return this.point
};
var obj = new Book(100);
console.log(obj.getPoint());

console.log(Book.prototype.getPoint());
/* Book.prototype.getPoint();
인스턴스를 생성하지 않고 직접 메소드를 호춣
this가 prototype을 참조하게 된다. prototype은 오브젝트이다.
prototype에 값이 있어야 하는데 없다. prototype과 인스턴스는 오브젝트가 다른 것!
저장하는 위치가 다른다. 거기서 this를 찾는다 그러면 당연히 없다
하지만 point가 프로퍼티이므로  undefined가 반환된다.
*/
// 인스턴스르 생성하여 메소드를 호출하는 것과 직접 prototype을 작성하여 호출하는 것의 차이이다.

/* prototype 프로퍼티 공유 시점 */
// 사용하는 시점에 prototype의 프로퍼티 공유 즉, 메소드를 호출하는 시점에 prototype의 메소드를 공유
// prototype의 프로퍼티로 인스턴스를 생성하지만 인스턴스의 프로퍼티는 원본 prototype의 프로퍼티를 참조한다. 복사하여 인스턴스에 갖고 있는 개념이 아님!
// 인스턴스의 메소드를 호출하면 원본 prototype의 메소드를 호출 (__proto__에 보이는 것은 그냥 가독성을 위해 보여주는 것뿐 실제로 복사해서 가지고 있는 것은 아님)
// 원본 prototype에 메소드를 추가하면 인스턴스를 생성한 후라도 생성된 모든 인스턴스에서 추가한 메소드 사용 가능하다.
// 왜냐? 호출하는 시점에 원본 prototype의 메소드를 호출하기 때문

/* 프로퍼티 공유 시점 */
function Book() {
  this.proint = 100;
};
var obj = new Book();
console.log(obj.getPoint);

Book.prototype.getPoint = function(){
  return this.point;
};
var result = obj.getPoint();
console.log(result);
// 1. var obj = new Book(); : 인스턴스를 생성하여 obj에 할당
// 2. console.log(obj.getPoint); : obj 인스턴스에 getPoint()가 없음
// 3. Book.prototype.getPoint = function(){...} : Book.prototype에 getPoint() 추가 앞에서 생성한 obj인스턴스에서 getPoint()를 사용할 수 있다.
// 4. var result = obj.getPoint(); : 인스턴스를 생성할 때는 ㅇobj에 getPoint가 없었지만 getPoint()를 호출하기 전에 Book.prototype에 getPoint를 추가했으므로 호출 할 수 있습니다.
// 반대로 삭제를 해버리면 존재하지 않기때문에 에러가 날 수 있다.
// 5. return this.point; : this는 호출하는 시점에 인스턴스를 참조.
// 실행 콘텍스트 시점으로 비교하게 되면 실행 콘텍스트가 만들어지고 obj를 this바인딩컨포넌트에다가 바인딩 시키고 그것을 this로 참조!
// 이런 특징을 활용하여 상황(필요)에 따라 메소드를 추가하면 역동적인 프로그램 개발 가능하다.

/* 인스턴스 프로퍼티 */
// prototype에 연결된 프로퍼티도 인스턴스 프로퍼티가 된다. 직접 인스턴스에 연결된 프로퍼티와 차이가 있다.
/* obj 인스턴스 = {
    point: 100,
    getPoint: function(){}
    __proto__: {
      getPoint: function(){}
    }
  } */
// __proto__ 위에 표시된 것이 직접 인스턴스에 연결한 프로퍼티이다.
// prototype에 연결된 프로퍼티는 __proto__에 첨부하고 직접 연결한 것은 __proto__위에 표시
// 인스턴스의 프로퍼티를 prototype으로 만든 인스턴스 프로퍼티 보다 먼저 사용
// getPoint()를 하게되면 __proto__위에 있는 즉 인스턴스 프로퍼티로 직접 연결한 getPoint가 호출된다.
// 이것이 인스턴스에 직접연결한 것과 prototype에 연결해서 인스턴스를 만들어서 __proto__에 연결한 것과의 차이이다.
// 인스턴스마다 값을 다르게 가질 수 있다. 이것이 인스턴스를 사용하는 중요한 목적이다.
// 하지만 __proto__에 있는 프로퍼티는 똑같다.

/* 인스턴스 프로퍼티 우선 사용 */
function Book(point) {
  this.point = point;
};
Book.prototype.getPoint = function(){
  return 100;
};
var obj = new Book(200);

obj.getPoint = function() {
  return this.point;
};
console.log(obj.getPoint());
// 1. Book.prototype.getPoint = function(){...} : prototype에 getPoint를 연결. 인스튼서의 getPoint()를 호출하면 100을 반환
// 2. obj.getPoint = function(){...} : 생성한 인스턴스에 getPoint를 연결. 함수가 호출되면 200을 반환
/* 3. obj 인스턴스 구성 형태
obj 인스턴스 = {
  getPoint: function(){return this.point;},
  __proto__: {
    getPoint: function(){return 100;}
  }
} */
// 4. obj.getPoint(); : obj 인스턴스의 getPoint() 호출. prototype의 getPoint()가 호출되지 않고 인스턴스의 getPoint()가 호출됨.
// 인스턴스에 연결한 프로퍼티를 먼저 사용하지 때문
// 5. 인스턴스 프로퍼티는 공유되지 않음
// 6. Class 접근. 설계가 중요. OOP 개념 이해 필요

