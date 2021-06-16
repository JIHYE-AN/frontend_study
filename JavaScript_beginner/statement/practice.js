/**
 * 1 ~ 50까지 반복
 * 홀수 값과 짝수 값을 따로 누적
 * 홀수, 짝수, 전체 누적 값을 반환
 */

// odd_num : 홀수, even_num : 짝수
var odd_num=0, even_num=0;
for (k = 1;k <= 50; k++) {
  if(k%2===1){ /* k를 2로 나눠 나오는 나머지 값이 1이면 홀수 값이고 아니면 짝수 값 */
    odd_num = odd_num + k; /* 홀수 값 누적 */
  } else {
    even_num = even_num + k; /* 짝수 값 누적*/
  };
};

console.log(odd_num);
console.log(even_num);
console.log(odd_num + even_num);