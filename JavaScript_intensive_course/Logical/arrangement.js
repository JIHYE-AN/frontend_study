/** 정리 시간-1!!
 * 재귀 함수로 데이터를 출력하라
 * 오브젝트이면 프로퍼티 이름(title, amount)과 값을 출력
 * 배열이면 값([10,20,30])을 출력하고 값을 누적하라
 * 재귀 호출이 끝나면 누적한 값을 출력하라
*/

var member = {
  Jan: {
    item: {title:"JS북", amount: 100},
    point: [10, 20, 30]
  },
  Feb: {
    item: {title:"JS북", amount: 200},
    point: [40, 50, 60]
  }
};
var arrayResult = 0;

function arraySum(list) {
  for (var k=0; k < list.length; k++){
    arrayResult = arrayResult + list[k];
  }
};

function show(param) {
  for (var type in param){
    if(typeof param[type] === "object"){
      if(Array.isArray(param[type])){
        console.log(type+":", param[type]);
        arraySum(param[type]);
      } else{
      show(param[type]);
      }
    } else{
      console.log(type+":", param[type]);
    }
  }
};
show(member);
console.log(arrayResult);


/** 정리시간-2!!
 * 값이 출력되는 논리를 설명하세요
 */
function book(bookParam) {
  var point = 100;
  function gerPoint(pointParam){
    point = point + bookParam + pointParam;
    return point;
  };
  return getPoint;
};
var obj = book(200);
console.log(obj(400));

