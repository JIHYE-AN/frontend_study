/* 변수 선언 방식*/
var book = "책"; /* var(variable) 변수: book 값: 책  => book이라는 변수에 책이라는 값을 할당 */

/* 변수를 여러개 선언하는 방법 */
var book = "책", point = "123"; /* 변수를 여러개 선언 시 콤마(,)를 이용해 여러개 선언 후 세미콜론(;)으로 닫아준다 */
var book = "책",
    point = "123";
var book = "책"
    , point = "123"; 

/* 변수에 의미를 부여해 작명(시멘틱)해야한다. 포괄적 X 구체적O */

var point = 123, point = 456; /* 왼쪽에서 오른쪽으로 실행 point 할당 값은 123 -> 456으로 바뀐다. */
