/* Boolean 오브젝트 */
// true와 false를 처리하는 빌트인 오브젝트
// 값이 있으면 true로 인식
// false인식 기준 - undefined, null, NaN, 빈 문자열, 숫자 타입의 0
// 숫자 값 변환 기준 true = 1, false = 0

/* new Boolean() */
// Boolean 인스턴스 생성
// 파라미터 값을 true 또는 false로 변환하여 프리미티브에 설정
var value = [undefined, null, NaN, 0, ""];
for (var k=0; k<value.length; k++){
  var obj = new Boolean(value[k]);
  console.log(obj+1);
};
// 문자열이면서 값이 있으면 true로 변환
var value = [12,"1", "0", "false"];
for (var k=0; k<value.length; k++){
  var obj = new Boolean(value[k]);
  console.log(obj+1);
};

/* Boolean() */
// Boolean 값으로 변환
// 인스턴스를 생성하지 않고 true 또는 false로 변환
var value = [12,"1", "0", "false"];
for (var k=0; k<value.length; k++){
  console.log(Boolean(value[k])+1);
};

/* toString() */
//data 위치의 true, false를 문자열로 변환
var result = true.toString();
console.log(result);
console.log(typeof result);

/* valueOf() */
// Boolean 인스턴스의 프리미티브 값 반환 -> true or false 반환
var obj = new Boolean(3);
console.log(obj.valueOf());