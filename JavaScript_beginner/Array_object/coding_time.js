/**
 * 변수이름을 value로 설정 Array 오브젝트를 생성 -> 엘리먼트를 받는 오브젝트
 * value에 push()를 이용해 0번 인덱스에 <ul> 삽입
 * for() 사용 -> Array 오브젝트에 <li></li> 엘리먼트 삽입
 * value에 push()를 이용해 마지막 인덱스에 </ul> 삽입
 * join()을 이용해 문자열로 연결 -> 그것을 result변수로 받음
 * document.body.innerHTML를 사용해 html에 문자열 삽입
 */

/*
var value = [];
value.push("<ul>");
for (k=1; k<=10 ; k++){
  value.push("<li id=id",k,">","id",k,"</li>");
};
console.log(value);
value.push("</ul>")
var result = value.join("");
console.log(result);

document.body.innerHTML = result;

var value = [];
for (k=0; k<10 ; k++){
  value[k] = "<li id=id" + (k+1) +">" + "id" + (k+1) + "</li>"; 
};
console.log(value);

document.body.innerHTML = "<ul>" + value.join("") + "</ul>";
*/

var value = [101, 26, 7, 1234];
value.sort( function (one, two) {
  return two - one;
});
console.log(value);