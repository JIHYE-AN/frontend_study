/** 코딩시간!
 * JS의 {name: value} 이해
 * 함수 표현식과 함수 선언문 이해
 * 1. 함수 선언문, 함수 호출(), 함수 선언문
 * 2. 함수 표현식, 함수 호출(), 함수 표현식
 * 3. 함수 선언문, 함수 호출(), 함수 표현식
 * 4. 함수 표현식, 함수 호출(), 함수 선언문
*/

/* 1. 함수 선언문, 함수 호출(), 함수 선언문 */
function book1() {
  function getBook() {
    return "책1";
  };
  // 여기서 함수 호출
  console.log(getBook());
  function getBook() {
    return "책2";
  };
};
book1();
/* 1. 함수 선언문 초기화
처음 돌면서 함수 안 함수 선언문을 추려 순서대로 해석 시작
첫번째 function getBook(){} -> getBook을 function 오브젝트를 생성 {getBook : return "책1";} 프로퍼티를 갖는다.
console.log(getBook()); 은 실행 코드니까 넘어간다.
두번째  function getBook(){} -> getBook이름을 가진 function 오브젝트를 생성한다.
같은 함수 이름을 가진 getBook 존재하므로 getBook의 값을 두번째 getBook의 값으로 대체한다.  {getBook : return "책2"; }
*/
/* 2. 변수 초기화
두번째 돌면서 변수를 추려 순서대로 해석 변수 이름을 선언하고 값은 할당하지 않는다. 초기값 undefined
하지만 위의 코드에는 변수가 없으므로 넘어가 처음으로 돌어간다.
*/
/* 3. 코드 실행
book1()함수 안의 console.log(getBook());에서 getBook()함수를 호출한다.
getBook함수의 안의 값은 return "책2"로 책2를 반환한다. console.log(getBook()); = console.log("책2");
book1()함수의 값이 console.log("책2");로 마지막에 book1()함수를 호출 콘솔창에 책2가 반환되어 보여진다.
*/

/* 2. 함수 표현식, 함수 호출(), 함수 표현식 */
function book2() {
  var getBook = function() {
    return "책1";
  };
  // 여기서 함수 호출
  console.log(getBook());
  var getBook = function() {
    return "책2";
  };
};
book2();
/* 1. 함수 선언문 초기화
처음 돌면서 함수 안 함수 선언문을 추려 순서대로 해석 시작
코드안에 함수 선언문이 없으므로 넘기고 처음으로 돌어간다.
*/
/* 2. 변수 초기화
두번째 돌면서 변수를 추려 순서대로 해석 변수 이름을 선언하고 값은 할당하지 않는다. 초기값 undefined
첫번째 var getBook = function(){}; -> getBook 변수 이름을 선언하고 값은 할당하지 않는다. getBook = undefined
console.log(getBook());는 실행 코드이므로 넘긴다.
두번째 var getBook = function(){}; -> getBook변수가 이미 선언이 되어 있지만 다시 getBook변수를 만나 다시 선언된다.
더이상 초기화할 변수 없으므로 처음으로 돌아간다.
*/
/* 3. 코드 실행
getBook의 값이 function(){return "책1";}이 할당된다.
console.log(getBook());에서 getBook()을 호출하고 getBook()의 값인 function(){return "책1";}에서 "책1"이 반환된다.
console.log(getBook()); = console.log("책1");
그 후 다음 코드에서 getBook의 값이 function(){return "책1";}에서 function(){return "책2";}로 변경되지만 console.log()가 실행된 다음에 변경된 것이므로
console.log()에 영향을 끼치지 않는다.
book2()의 값은 console.log("책1"); 로 마지막에 boo2()함수가 호출되면서 콜솔창에 책1이 반환된다.
*/

/* 3. 함수 선언문, 함수 호출(), 함수 표현식 */
function book3() {
  function getBook() {
    return "책1";
  };
  // 여기서 함수 호출
  console.log(getBook());
  var getBook = function() {
    return "책2";
  };
};
book3();
/* 1. 함수 선언문 초기화
처음 돌면서 함수 안 함수 선언문을 추려 순서대로 해석 시작
function getBook(){} -> getBook을 function 오브젝트로 생성 {getbook : return"책1";}
더이상 초기화 할 함수 선언문이 없으면 처음으로 돌아간다.
*/
/* 2. 변수 초기화
두번째 돌면서 변수를 추려 순서대로 해석 변수 이름을 선언하고 값은 할당하지 않는다. 초기값 undefined
var getBook = function(){} -> 변수이므로 초기화를 해야하지만 이미 같은 이름의 getBook function오브젝트가 존재
이미 값이 있으므로 초기화 하지 않고 넘어간다.
더이상 초기화 할 변수가 없으면 처음으로 돌아간다.
*/
/* 3. 코드 실행
console.log(getBook());에서 getBook()을 호출하고 getBook()의 값인 return "책1";에서 "책1"이 반환된다.
*/

/* 4. 함수 표현식, 함수 호출(), 함수 선언문 */
function book4() {
  var getBook = function() {
    return "책1";
  };;
  // 여기서 함수 호출
  console.log(getBook());
  function getBook() {
    return "책2";
  };
};
book4();
/* 1. 함수 선언문 초기화
처음 돌면서 함수 안 함수 선언문을 추려 순서대로 해석 시작
function getBook(){} -> getBook을 function 오브젝트로 생성 {getbook : return"책2";}
더이상 초기화 할 함수 선언문이 없으면 처음으로 돌아간다.
*/
/* 2. 변수 초기화
두번째 돌면서 변수를 추려 순서대로 해석 변수 이름을 선언하고 값은 할당하지 않는다. 초기값 undefined
var getBook = function(){} -> 변수이므로 초기화를 해야하지만 이미 같은 이름의 getBook function오브젝트가 존재
이미 값이 있으므로 초기화 하지 않고 넘어간다.
더이상 초기화 할 변수가 없으면 처음으로 돌아간다.
*/
/* 3. 코드 실행
console.log(getBook());에서 getBook()을 호출하고 getBook()의 값인 return "책2";에서 "책2"이 반환된다.
*/