/** 정리시간 - 1!! 
 * 마지막 줄에서 fn()을 호출하면 book.get()함수가 호출된다.
 * console.log(this===window)에서 true가 출력되는 논리를 제시해라.
 * console.log(this.value)에서 undefined가 출력되는 논리는 제시해라.
*/
var book = {
  value: 123,
  get: function(){
    var value = 456;
    console.log(this === window);
    console.log(this.value);
  }
};
var fn = book.get;
fn();
// book()를 글로벌 오브젝트에 작성된 함수
// 1. 마지막 줄에서 fn()을 호출! -> fn()은 글로벌 함수이므로 window를 생략하고 작성된 것! -> this는 window를 참조한다.
// 2. console.log(this === window); : this는 window를 참조하므로 this === window는 window === window이므로 true가 반환된다.
// 3. console.log(this.value); : this는 window를 참조므로 this바인딩 컴포넌트에는 window가 바인딩 되는데 그곳에는 value 프로퍼티가 없으므로 undefined가 반환된다.


/** 정리시간 - 2!!
 * 마지막 줄에서 book()을 호출한다.
 * [실행 결과] 값이 출력된 논리를 제시하라
 * this.getTitle()
 * getTitle() 
 */
function getTitle() {
  console.log("HTML책");
};
var book = function(){
  function getTitle() {
    console.log("JS책");
  };
  this.getTitle();
  getTitle();
};
book();
// getTitle()과 book() 글로벌 오브젝트에 작성된 함수
// 1. 마지막 줄에서 book()함수를 호출! -> book()은 글로벌 함수이므로 window를 생략하고 작성된 것! 
// -> this는 window를 참조하며 this 바인딩 컴포넌트에는 window가 바인딩 된다.
// 2. this.getTitle(); : this는 window를 참조하므로 this.getTitle() === window.getTitle()이라고 볼 수 있다. 
// window가 바인딩 된 this 바인딩 컴포넌트에 getTitle()함수의 값은 console.log("HTML책")으로 콘솔 창에 HTML책이 반환된다.
// 3. getTitle(); : 이 코드는 book()함수 안에 작성되어 있으므로 우선적으로 book()함수의 선언적 레코드 컴포넌트에서 getTitle()함수를 찾는다.
// book()함수의 선언적 레코드 컴포넌트 안에 있는 getTitle()함수의 값은 console.log("JS책");으로 콘솔 창에 JS책이 반환된다.

