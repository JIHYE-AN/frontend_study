/* isArray() */
// 체크 대상이 배열이면 true, 아니면 false
// isArray()는 함수이므로 Array.isArray()형태로 호출
console.log(Array.isArray([1,2]));
console.log(Array.isArray(123));
// typeof 연산자로 데이터 타입을 구하면 모두 object이므로 배열 여부 체크 불가
// 그래서 isArray()함수가 필요한 것
console.log(typeof {a:1});
console.log(typeof [2,1]);
console.log(typeof null);

/* indexOf() */
// 파라미터 값과 같은 엘리먼트의 인덱스 반환
// 값이 같은 엘리먼트가 있으면 검색 종료
var value = [1,2,5,2,5];
console.log(value.indexOf(5));
// 값의 데이터 타입까지 체크 값이 없으면 -1 반환
console.log(value.indexOf("5"));
// 두번째 파라미터 : 검색 시작 인덱스 ,디폴트값 : 0
console.log(value.indexOf(5, 3));
// String오브젝트는 음수를 작성하면 0으로 간주하여 처음부터 검색
// Array오브젝트는 음수에 length를 더해 시작 인덱스로 사용
console.log("ABCBC".indexOf("C", -2));
var value2 = ["A", "B", "C", "B", "C"];
console.log(value2.indexOf("C", -2));

/* lastIndexOf() */
// 파라미터 값과 같은 엘리먼트의 마지막 인덱스 반환
// 같은게 있더라도 끝까지 가서 확인 해서 마지막 인덱스를 반환하는 것
console.log(value.lastIndexOf(5));
// 뒤에서 앞으로 검색한다 라는 표현이 더 낫다.

/* 콜백함수를 가진 Array 메소드 */
// 7개의 메소드는 모두 콜백 함수를 호출 키워드는 시맥틱과 독립성이다.
/* forEach() */
// 배열의 엘리먼트를 하나씩 읽어 가면서 콜백 함수 호출
// 콜백 함수 파라미터 -> 엘리먼트 값, 인덱스, 배열전체를 넘겨줌
// 콜백함수에 breack, continue 사용불가 -> 따라서 처음부터 끝까지 다 반복 이것이 fotEach()의 특성이며 시멘틱이다.
var list = ["A", "B", "C"];
list.forEach(function (el, index, all) {
  console.log(el + ":" + index + ":" + all);
});
// 콜백 함수 분리(독립성) - 코드 중복을 피하기위해 콜백 함수를 분리하여 사용
var list2 = ["A", "B", "C"];
var fn = function (el, index, all) {
  console.log(el + ":" + index + ":" + all);
};
/* forEach()문에 함수를 호출하는 기능을 가지고 있기 떄문에 이름만 작성하면 된다. */
list2.forEach(fn); 
// 두번째 파라미터 : this로 참조할 오브젝트 (선택)
var list3 = [1, 2];
var fn = function (el, index, all) {
  console.log(el + this.ten);
};
list2.forEach(fn, {ten:10}); 
// 함수 안에서 값(데이터)을 사용하는 방법
// 파라미터, 변수, this로 참조, 함수 호출(반환값)

/* for()와 forEach() 차이 */
// forEach()를 시작할 때 반복 범위 결정 (반복 수 결정)
// 반복 범위가 결정되기 때문에 엘리먼트를 추가해도 처리하지 않음
var list3 = [1, 2, 3];
var fn = function (el, index, all) {
  if (index === 0) {
    list3.push("AB");
  };
  console.log(el);
};
list3.forEach(fn); 
// 현재 인덱스보다 큰 인덱스의 값을 변경하면 변경된 값을 사용
var list4 = [1, 2, 3];
var fn = function (el, index, all) {
  if (index === 0) {
    list4[2] = 345;
  };
  console.log(el);
};
list4.forEach(fn); 
// 현재 인덱스보다 큰 인덱스의 엘리먼트를 삭제하면 배열에서 삭제 -> 반복에서 제외
// 추가는 반영X, 삭제는 반영
var list5 = [1, 2, 3];
var fn = function (el, index, all) {
  if (index === 0) {
    delete list5[2];
  };
  console.log(el);
};
list5.forEach(fn); 

// forEach()는 시멘틱 접근 - 처음부터 끝까지 반복한다, 반복 중간에 끝나지 않는다.
// for()는 함수 코드를 읽어야함 - 처음부터 끝까지 반복을 안할 수 있음, 반복 중간에 끝날 수 있음(break, continue)
// forEach()는 반복만 하며 콜백 함수에서 기능 처리, this 사용 가능
// forEach()는 인덱스 0부터 시작, 증가 값 조정X, 뒤에서 앞으로 읽을 수 없음
// for()은 변수를 사용해 시작 값 조정 가능, 증가 값 조정O, 뒤에서 앞으로 읽을 수 있음

// 프로그램은 코드가 아닌 시나리오로 풉니다.

/* every() */
// 시맨틱 접근
// false를 반활할 때까지 콜백 함수 호출
// false가 반환되면 반복 종료
// false를 반환하지 않으면 true반환
// false가 되는 조건이 배열 앞에 있을 때 효율성이 높음
var value3 = [20, 10, 30, 40];
var fn = function (el, index, all) {
  console.log(el);
  return el > 15;
};
var result = value3.every(fn);
console.log("결과:", result); 

/* some() */
// 시맨틱 접근
// true가 반환할 때까지 콜백 함수 호출
var value3 = [10, 20, 30, 40];
var fn = function (el, index, all) {
  console.log(el);
  return el > 15;
};
var result = value3.some(fn);
console.log("결과:", result);

/* filter () */
// true일 때의 엘리먼트를 배열로 반환
// 콜백 함수에서 true를 반환하면 현재 읽은 엘리먼트를 반환
// 조건에 맞는 엘리먼트를 추려낼 때 유용
var value3 = [10, 20, 30, 40];
var fn = function (el, index, all) {
  return el > 15;
};
var result = value3.filter(fn);
console.log(result);

/* map () */ 
// 콜밴 함수에서 반환한 엘리먼트를 배열로 반환
// 두 번째 파라미터 : this로 참조할 오브젝트(선택)
var value3 = [10, 20, 30];
var fn = function (el, index, all) {
  return el + this.add;
};
var point = {add: 100};
var result = value3.map(fn, point);
console.log(result);

/* reduce() */
// 배열 끝까지 콜백 함수 호출
// 파라미터 작성 여부에 따라 처리가 다름
// 첫번째 파라미터 : 콜백함수, 두번째 파라미터 : 초깃값(선택)
var value4 = [1,3,5,7];
var fn = function (prev, curr, index, all) {
  console.log(prev + "," + curr);
  return prev + curr;
};
var result = value4.reduce(fn);
console.log("결과:",result);
// 두 번째 파라미터 값이 있는 경우
var value4 = [1,3,5,7];
var fn = function (prev, curr, index, all) {
  console.log(prev + "," + curr);
  return prev + curr;
};
var result = value4.reduce(fn, 7);
console.log("결과:",result);

/* reduceRight() */
// reduce()와 처리 방법 같음
// 배열 끝에서 앞으로 하나씩 읽어가면서 콜백 함수에서 반환한 값을 반환
var value4 = [1,3,5,7];
var fn = function (prev, curr, index, all) {
  console.log(prev + "," + curr);
  return prev + curr;
};
var result = value4.reduceRight(fn);
console.log("결과:",result);