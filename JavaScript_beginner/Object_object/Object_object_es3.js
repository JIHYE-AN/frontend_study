/* 호스트 오브젝트 - DOM오브젝트 */
// var node = document.querySelector("div");
// console.log(node.nodeName);
// querySelector()는 DOM에서 제공하는 함수

/* newObject(), Object(), {} */
// Object의 인스턴스 생성 방법
var obj1 = new Object({num:123}); /* 파라미터의 데이터 타입에 따라 생성할 인스턴스를 결정 */
console.log(typeof obj1);
console.log(obj1);

var obj2 = Object({num:123});
console.log(typeof obj2);
console.log(obj2);

var obj3 = {num:123};
console.log(typeof obj3);
console.log(obj3);

/* hasOwnProperty() */
// 인스턴스에 파라미터 이름이 존재하면 true반환, 존재하지 않으면 false 반환
var obj = {value: 123};
var own = obj.hasOwnProperty("value");
console.log(own);

var obj = {value: undefined};
var own = obj.hasOwnProperty("value");
console.log(own);
// undefined가 값이지만 false로 인식 하지만, 값은 체크하지 않고 존재 여부만 체크하므로 true 반환
var obj = {};
var own = obj.hasOwnProperty("hasOwnProperty");
console.log(own);
// 자신이 만든 것이 아니라 상속받은 프로퍼티이면 false반환
//hasOwnProperty는 내가 만든 것이 아니라 빌트인 오브젝트에서 만든것

/* propertyIsEnumerable() */
// 오브젝트에서 프로퍼티를 열거할 수 잇으면 true반환, 할 수 없으면 false반환
var obj = {sports: "축구"};
console.log(obj.propertyIsEnumerable("sports"));

var obj = {sports: "축구"};
Object.defineProperty(obj, "sports", {
  enumerable: false
});
// enumerable: false는 열거할 수 없는 상태로 설정하는 것
// defineProperty(오브젝트, 프로퍼티이름, {enumerable: false});
console.log(obj.propertyIsEnumerable("sports"));

for(var name in obj){
  console.log(name);
}; /* -> obj는 열거 할 수 없는 상태 */

/* isPrototypeOf() */
// 파라미터에 작성한 오브젝트에 object위치에 작성한 prototype이 존재하면 true반환, 존재하지 않으면 false반환
var numObj = new Number(123);
console.log(Object.prototype.isPrototypeOf(numObj));
// Object.prototype이 numObj인스턴스에 존재하는가를 물어보는 것

/* toStrimg() */
// 인스턴스 타입을 문자열로 표시
var point = {book:"첵"};
console.log(point.toString());
// [object Obect] 중 object는 인스턴스, Object는 빌트인 Object를 나타낸다.
var obj = new Number(123);
console.log(Object.prototype.toString.call(obj));

/* toLocaleString() */
// 지역화 문자 변환 메소드 대체 호출
// Array, Numver, Date 오브젝트의 toLocaleString() 메소드가 먼저 호출
// Array, Numver, Date 오브젝트 가 아닐 경우 빌트인 오브젝트의 toLocaleString()가 호출
console.log(1234.56.toLocaleString());
console.log("4567.89".toLocaleString());
/* "4567.89"는 String 타입이며 String.prototypr.toLocaleString()이 없으므로 
빌트인 오브젝트의 Object.prototypr.toLocaleString()가 호출된다. */
