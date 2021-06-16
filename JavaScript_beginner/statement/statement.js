/* if */
var a = 1, b = 1;
if (a==b) console.log("블록X");
if (a==b)
  console.log("1번줄")
  console.log("2번줄"); /* 세미콜론(;)까지 조건 if 실행 */

var a = 1, b = 1;
if (a==b) {
  console.log("블록사용");
}; /* 블록에 작성한 내용을 다 실행. 블록 사용 권장 - 확장성과 일관성을 위해 */

// if(표현식) 문장1 else 문장2 -> 표현식이 true면 문장1을 false면 문장2를 반환
var a = 1, b = 2;
if (a===b)
  console.log("1번줄, true");
  else
  console.log("2번줄, false");

var a = 1, b = 2;
if (a===b) {
  console.log("블록사용, true");
} else {
  console.log("블록사용, false");
};   

/* debugger를 작성하면 debugger가 있는 위치에서 실행을 멈춘다.
브라우저 개발창이 열려 있을 때만 멈추고 열려 있지 않으면 멈추지 않는다.
자신이 테스트를 해야하는 줄만 테스트하고 싶을 때 많이 사용 */ 

/* while */
// 표현식의 평가가 false가 될 때까지 문장을 반복하여 실행! 반복이 종료되는 조건이 필요
var k = 1;
while (k < 3) {
  console.log(k);
  k++;
};

/* do ~ while */
//형태 : do 문장 whlie(표현식)
var k = 1;
do {
  console.log("do:", k);
  k++;
}
while (k < 3) {
console.log("while:", k);
};
/* true일 경우 do문의 블록을 실행 false일 경우 while문 블록을 실행해 반환 */
/* do {
  console.log("do:", k);
  k++;
}
while (k < 3);
console.log("while:", k);  이렇게 작성도 가능*/

/* for */
// 형태 : for (초기값; 표현식; 증감)
for (k=0; k<3; k++) {
  console.log(k);
}; 
/* A -> B -> True면 반환 -> C -> B -> True면 반환 -> C -> B -> True면 반환 false면 종료*/

/* Break */
// 형태 : break;, break 식별자; -> 반복문 종료
// for, for~in, while, do~while, switch에서 사용
var k=0, m=0;
while(k<3){
  m++
  if (m===2){
    break;
  }
  console.log(k);
}
/* break를 만나면 아래의 문장을 수행하지 않고 반복문이 종료됨, break끝에 세미콜론은 자동 첨부 */

/* continyue */
// 형태 : continue;
// for, for~in, while, do~while 에서 사용
for (var k=0; k < 5; k++) {
  if ( k === 2 || k ===3 ){
    continue;
  };
  console.log(k);
};
/* continue를 만나면 반복문 처음으로 감. k가 2와 3일 경우 if문이 ture가 되어 if문의 블록을 실행
블록 문의 continue를 실행하면 console.log(k)를 실행하지 않고 for의 k++로 가서 실행 */

/* switch */
/* 형태 : switch(표현식) {
            case 표현식 : 문장 리스트;
            default 표현식 : 문장 리스트;
          }
*/
var exp = 1;
switch(exp) {
  case 1 : console.log(100);
  case 2 : console.log(200);
}; 
/* exp의 값이 1이므로 걊이 일치하는 case 1문을 수행 해야하는데 case1의 문만이 아닌 case1의 아래 모든 문을 실행 하므로 case2도 실행이 되어
100, 200의 값이 나온 것! 이를 방지하려면 break를 작성해주는 것이 좋다.*/
var exp = 1;
switch(exp) {
  case 1 : console.log(100);
  break;
  case 2 : console.log(200);
};

var exp = 7;
switch(exp) {
  case 1 : console.log(100);
  default : console.log(700);
  case 2 : console.log(200);
};
/* exp의 값이 1이므로 일치하는 값을 가진 case가 없으므로 default문이 실행을 하는데 위와 같이 default문의 아래 모든 문을 실행 하므로 case2도 실행된다.
이를 방지하기 위해서는 break를 작성해주는 것이 좋다 */

var exp = 7;
switch(exp) {
  case 1 : value = 100;
  default : value = 700;
  case 2 : value = 200;
};
console.log(value); /* 위와 같은 이유로 default문이 실행 value = 700을 가지지만 case2가 실행되면서 value의 값이 700 -> 200으로 변경되어 200이 반환 */

var exp = 7;
switch(exp) {
  case 1 : value = 100;
  default : value = 700;
  break;
  case 2 : value = 200;
};
console.log(value); /* break를 사용하면 default가 끝나면 문장을 끝내고 빠져나가므로 case2가 실행되지 않아 value의 값은 700이 나온다 */

var exp = 3;
switch(exp) {
  case 1 :  /* case1 : 과 case2 사이에 문장과 세미콜론이 없이 한번에 작성되면 OR이라는 의미 */
  case 2 : 
    value = 200;
};

/* try-catch */
// 형태 : try 블록 catch(식별자) 블록, try 블록 finally 블록, try 블록 catch(식별자) 블록 finally 블록
var value;
try {
  value = ball;
} catch(error){
  console.log("catch 실행");
};
/* try-catch를 사용하는 이유 : try문에서 에러가 발생해도 프로그램이 죽지 않고 catch문을 실행하기 때문에 에러 발생 가능성이 있을때 사용한다. */
/* 서버에서 데이타를 가저올때 통신에서 에러가 발생할 가능성이 있기때문에 서버에서 데이터를 가저올때 try문에 작성하는 것이 좋다.*/

var sport;
try {
  sport = ball;
} catch(error){
  console.log("catch 실행");
} finally {
  console.log("finally 실행");
};
/* try문에서 에러가 발생했기 때문에 catch문 실행하고 finally문은 예외와 관계없이 기본적으로 실행한다. */

/* throw */
// 형태 : throw 표현식;  명시적으로 에러를 발생시킬때 사용 에러가 발생되면 catch문을 실행
try {
  throw "에러발생!" /*에러가 발생하면 아래문장을 수행하지 않고 바로 catch문으로 이동 */
  var sports = "swimming";
} catch(error){
  console.log(error); /* error에 "에러발생!"이라는 throw 표현식의 문자열이설정된다 */
  console.log(sport); /* var sports = "swimming";이 실행되지 않았으므로 sports의 값이 없어 undefind가 반환된다. */
}

try {
  throw {  /* throw표현식에 오브젝트 사용 가능 {name:메세지} 형태 */
    msg : "에러 발생!",
    bigo : "임의의 이름 사용"
  }
} catch(error){
  console.log(error.msg);
  console.log(error.bigo);
};

try {
  throw new Error ("에러발생!"); /* new는 새로운 오브젝트를 생성 -> Error라는 오브젝트를 생성하였음 -> 생성된 오브젝트에 "에러발생!" 이라는 메세지를 설정*/
} catch(error){
  console.log(error.message);
};

/* strict 선언 */
// 형태 : "use strict";  엄격하게 JS 문법을 사용하겠다 하고 선언
"use strict";
try {
  book = "변수를 선언하지 않음";
  console.log(book);
} catch(error){
  console.log(error.message);
};
/* 코딩 실수를 예방하기 위해서 use strict 작성은 필수! */