/* Array 오브젝트 */
/* 배열 차원 */
// 1차원 배열
var list = [12, 34, 56];
for (var k = 0; k < list.length; k++){
  console.log(list[k]);
};
// 2차원 배열
// one에 [12, 34, 56]을 할당시키고 난 후 다시 for문을 작성하여 값을 구한다.
var list = [[12, 34, 56]];
for (var k = 0; k < list.length; k++){
  var one = list[k];
  for (var m = 0; m < one.length; m++){
    console.log(one[m]);
  };
};
// 3차원 배열
// 2차원 배열에 for문을 하나 더 사용한 것
// for문을 통과 할때마다 []가 하나씩 벗겨진다고 생각하면 됨.

/* newe Array() */
// Array 인스턴스를 생성, 반환
var obj = new Array();
console.log(typeof obj);
console.log(obj.length);

// 파라미터 배열의 차원에 일차원을 더한 차원을 반환
var one = new Array(10, 20);
console.log(one);
var two = new Array([30, 40]);
console.log(two);

// 파라미터에 숫자를 작성하면 숫자만큼의 엘리머트를 생성 -> 그 엘리먼트의 값은 undefined이다.
var obj = new Array(3);
console.log(obj);

/* Array() */
// new Array()의 같음
/* new Array()외 Array()의 차이점 : 
new연산자로 Array()생성자 함수를 호출하면 인스턴스를 생성 
-> 이때 prototype에 연결되어 있는 contructor가 호출됨 
-> contructor가 인스턴스를 생성하여 반환
반면 Array()함수는 바로 생성자 함수를 호출 그래서 Array()를 생성자 함수라고 부를 수 있다.
new 연산자를 사용하지 않아 함수라고 부른 것 
그러나 앞에가 대문자여서 이것을 보면 생성자 함수라고 볼 수 있다.
소문자이면 그것은 매소드나 함수로 볼 수 있지만 
대문자 이므로 new연산자를 사용하지 않은 생성자함수라고 보면 된다. */

/* length */
// {length : 3} 형태로 설정되어 있음
// 열거 삭제는 불가, 변경은 가능 -> length값을 변경하면 배열 엘리먼트 수가 변경
var value = [1,2,3];
console.log(value.length);

var value = [1,2,3];
value.length = 5;
console.log(value);
// 가능하지만 가독성이 떨어지고 코드를 자세히 봐야한다.
var value = [1,2,3];
value.length = 2;
console.log(value);

/* 엘리먼트 추가 */
// 삽입할 위치에 인덱스 지정
var value = [1,2];
value[4] = 5;
console.log(value);
// 표현식으로 인덱스 지정
var value = [1,2];
value[value.length + 2] = 5;
console.log(value);

/* delete 연산자 */
// 삭제 성공 : true, 실패 : false
// ES5에서 삭제 불가 설정 가능
// var 변수는 삭제 불가
// 함수안에 작성하지 않아 밑에 것도 글로벌 변수이지만 var키워드를 사용하면 변수를 delete로 삭제할 수 없다.
// 그래서 var키워드 사용은 필수!
var value = 123;
console.log(delete value);
// 글로벌 변수는 삭제 가능
value2 = "글로벌 변수";
console.log(delete value2);

try {
  console(value2);
} catch(e){
  console.log("존재하지 않음");
};
// 프로퍼티 삭제 방법
// 프로퍼티로 접근하면 에러가 나지 않고 undefined로 반환
var book = {title : "책"};
console.log(delete book.title);
console.log(book.title);

// var를 사용해 선언한 변수는 비록 오브젝트라고 관계없이 삭제 불가능
var book2 = {title : "JS책"};
console.log(delete book2);
sports = {item: "축구"};
console.log(delete sports);

// 인덱스로 배열의 엘리먼트 삭제
// 삭제를 해도 length가 변경되지 않는다.
// 삭제된 인덱스에 undefined가 설정
var value = [1,2,3,4];
console.log(delete value[1]);
console.log(value.length);
console.log(value);

for (var k = 0; k < value.length; k++){
  console.log(value[k]);
};

/* unshift() */
// 0번 인덱스에 파라미터 값 삽입
var value3 = [1,2];
value3.unshift(345, 67);
console.log(value3);

/*  push() */
// 배열 끝에 파라미터 값 첨부
/* 서버에서 데이터를 받아서 행과 열이 있는 형태로 만들려고 하는데
만약 100줄을 받았다고 생각하면 100번을 html에다 인서트를 시켜야 하는데 
그때마다 html은 렌더링을 해서 즉 DOM구조를 만들어서 웹페이지에 표시
그렇다면 100개가 있다면 100번을 렌더링을 해야하는데 그것은 좀 별로인데 그럴때 사용
서버에서 받은 데이터를 이와 같은 형태로 문자열로 html을 만들고 100개를 push()형태로
배열에다가 집어넣어 나중에 배열 전체를 읽어 문자열로 정리 그러면 한번만 렌더링해도 가능 */
var value4 = [1,2];
value4.push(345, 67);
console.log(value4);

/* concat() */
// 배열에 파라미터 값으 연결하여 반환
var value5 = [1,2];
var result = value5.concat(3, 4);
console.log(result);
// 파라미터가 1차원 배열이면 값만 반영
var value5 = [1,2];
var result = value5.concat([3],[4]);
console.log(result);

/* slice() */
// 배열의 일부 또는 전부를 복사하여 배열로 반환 -> 다수를 반환
// 첫번째 파라미터의 인덱스부터 두 번째 인덱스 직전까지
var origin = [1,2,3,4,5];
var result = origin.slice(1,3);
console.log(result);
console.log(origin);
// true, false를 숫자로 변환
var value6 = [1,2,3,4,5];
console.log(value6.slice(true, 3)); /* true = 1 */
console.log(value6.slice(false, 3)); /* false = 0 */
// 첫 번째 파라미터 값만 작성하면 첫번째 인덱스에서 끝까지 반환
// 첫 번째 파라미터 값이 두번째 보다 클때 빈 배열 반환
// 파라미터에 음수를 작성하면 length값을 더해 실행하여 반환

/* join() */
// 분리자 작성은 선택 - 작성하지 않으면 콤마가 기본값
// 엘리먼트와 분리자를 하나씩 결합하여 문자열로 연결 [0]인덱스, 분리자, [1]인덱스, 분리자 형태
// 마지막 엘리먼트는 불리자를 연결하지 X
var value7 = [1,2,3];
var result = value7.join("##");
console.log(result);
console.log(typeof result);

/* toString() */
// 배열의 엘리먼트 값을 문자열로 연결. 콤마로 구분
var result = ["A", "B", "C"].toString();
console.log(result);
// 2차원 배열의 각 엘리먼트 값을 1차원 배열로 펼치고 다시 1차원을 문자열로 연결하여 반환
console.log([["가"], ["다"]].toString());

/* toLocaleString() */
// 엘리먼트 값을 지역화 문자로 변환. 콤마로 연결
var value8 = [12.34, 56];
console.log(value8.toLocaleString("zh-Hans-CN-u-nu-hanidec"));

/* shift() */
// 배열의 첫 번째 엘리먼트 삭제 - 삭제한 엘리먼트 반환
// 삭제한 엘리먼트 값이 undefined로 남지 않고 완전히 삭제 -> length값 줄어듬
// 빈 배열이면 undefined가 반환 -  삭제할 것이 없다 라는 뜻 
var value9 = [1,2,34];
console.log(value9.shift());
console.log(value9);

var result = [].shift();
console.log(result);

/* pop() */
// 배열의 마지막 엘리먼트 삭제 - 삭제한 엘리먼트 반환
// 삭제한 엘리먼트 값이 undefined로 남지 않고 완전히 삭제 -> length값 줄어듬
// 빈 배열이면 undefined가 반환 -  삭제할 것이 없다 라는 뜻
var value9 = [1,2,34];
console.log(value9.pop());
console.log(value9);

/* splice() */
// 파라미터 : 시작인덱스(디폴트:0), 삭제할 엘리먼트 수, 추가할 엘리먼트
// 엘리먼트를 삭제하고 삭제한 엘리먼트 반환
// 삭제한 위치에 엘리먼트 삽입
// 파라미터를 작성하지 않으면 삭제하지 X -> 빈 배열 반환
var value10 = [1,2,3,4,5];
console.log(value10.splice(1,3,"A","B"));
console.log(value10);

/* sort() */
// 엘리먼트 값을 승순으로 정렬
// 승순 : 작은값 -> 큰값
// 정렬기준 : Unicode
var value = [4,2,3,1];
console.log(value.sort());
// 문자를 하나씩 비교하여 정렬 - 첫번째 자리부터 비교
var value = ["A1","A01","B2","B02"];
console.log(value.sort());
// sort()를 사용하면 대상 데이터도 정렬됨
// 값이 undefined면 끝으로 이동

/* sort() 알고리즘 */
// sort()메소드를 호출하면서 콜백함수를 호출하고 파라미터 값을 2개 던져준다.
// 첫 번째 파라미터 값에서 두 번째 파라미터 값을 빼고 그 결과가 양수이면 값의 위치를 바꾸고 음수이면 바꾸지 않는다.
// 위치 바꿈이 없을때까지 계속 콜백함수를 호출한다.
var value = [101, 26, 7, 1234];
value.sort(function(one, two) {
  return one - two;  
});
console.log(value);

/* reverse() */
// 배열의 엘리먼트 위치를 역순을 바꿈(인덱스 기준)
// 대상 데이터의 배열도 바뀜
var value = [101, 26, 7, 1234];
console.log(value.reverse());
