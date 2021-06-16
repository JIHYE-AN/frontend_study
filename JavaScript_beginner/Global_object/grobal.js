// 글로벌 오브젝트는 실체가 없는데 글로벌이라고 표시된 것은 툴에서 글로벌로 표시한 것으로 생각
// 글로벌 오브젝트의 함수와 프로퍼티가 윈도우 오브젝트에 설정되어 있다는 것
console.log(undefined);
console.log(window.undefined);
// undefined로 값을 구하나 window.undefined로 값을 구하나 같다.
// use strict 환경이 아닐 경우에는 프로퍼티 이름만 작성하면 글로벌 오브젝트의 프로퍼티로 자바스크립트 엔진이 간주해서 처리해주는 것 뿐
// 일반적인 구조에서 본다면 window.undefined해주는 것이 정확하다.
// 프로퍼티는 반드시 오브젝트안에 있어야하고 오브젝트.프로퍼티이름 또는 오브젝트.함수이름 형태로 불러주는 것이 정확한 표현
// 그러나 글로벌 오브젝트는 하나밖에 없기 때문에 처음부터 설계할 때 그렇게 한 것

/* parceInt() */
// 값을 정수로 변환하여 반환
console.log(parseInt(123.56));
// 소수를 제외한 정수 반환
// String타입 이더라도 값이 숫자면 변환
console.log(34+parseInt("124px"));
// 0 또는 빈문자열 무시하고 변환
// 값을 작성하지 않으면 NaN 변환

/* parseFloat() */
// 값을 실수로 변환하여 반환
// 문자열을 실수로 변환은 의미가 있다.
console.log(parseFloat("-123.56")+12);
// 값을 작성하지 않으면 NaN 변환

/* isNaN() */
// 숫자 값이 아니면 true 반환 숫자 값이면 false 반환
// 값이 숫자로 변환되면 숫자로 인식 
// null 은 0
console.log(isNaN(true));
console.log(isNaN(null));
// NaN === NaN는 true가 나와야 하는데 설계의 실수로 false가 나온다.
// 이것을 정확하게 비교를 하기 위해서는 Object.is()사용
console.log(NaN===NaN);
console.log(Object.is(NaN,NaN));

/* isFinite() */
// 무한대 또는 NaN이면 false, 유한대이면 true
console.log(isFinite(34/3));

/* encodeeURI() */
// URI를 인코딩하여 반환
// 인코딩 제외 문자를 지와하고 %16진수 %16진수" 형태로 변환
var uri = "data?a=번&b=호";
console.log(encodeURI(uri));
var uri2 = "자바스크립트-비기너";
console.log(encodeURI(uri2));
//

/* eval() */
//파라미터의 문자열을 JS 코드로 간주하여 실행
// 보안 문젝가 있다고 알려져 있어 사용 비권장