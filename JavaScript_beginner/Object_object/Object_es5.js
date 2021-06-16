/* Object object ES5 */

/* defineProperty() */
// 파라미터 : 대상오브젝트, 프로퍼티 이름, 속성
// 대상 오브젝트에 프로퍼티 주가 또는 프로퍼티 속성 변경
// 프로퍼티마다 상태(변경/삭제/열거 가능여부)를 갖고 있다. 상태가 가능일 때만 처리할 수 있다.
// 프로퍼티를 추가할 때 상태 결정 (enumerable)
var obj = {}; /* 상태 디폴트 값 : true */
// defineProperty에서 상태 디폴트 값 : false 그래서 상태를 true로 변경해줘야함
Object.defineProperty(obj, "book", {
  value: "JS북",
  enumerable: true
}); 
console.log(obj);

/* defineProperties() */
// 다수의 프로퍼티를 추가하거나 속성 변경
var obj2 = {};
Object.defineProperties(obj2, {
  soccer: {
    value: "축구", enumerable: true
  },
  basketball: {
    value: "농구", enumerable: true
  }
}); 
for (var name in obj2){
  console.log(name + ":" + obj2[name]);
};

/* 프로퍼티 디스크립터
프로퍼티의 속성 이름과 속성 값을 정의
디스크립터 타입 분류 - 데이터 프로퍼티 디스크립터
                     - 악세스(Access) 프로퍼티 디스크립터
                     - 공용 프로퍼티 디스크립터
디스크립터 타입에 속한 속상만 같이 사용할 수 있다.
데이터와 악세스는 함께 작성 할 수 없으므로 그것으로 어떤 프로퍼티 디스크립터인지 구분
*/
/* value 속성 */
// get/set속성과 함께 작성 불가
var obj3 = {};
Object.defineProperty(obj3, "book", {
  value: "JS북",
  enumerable: true
});
for (var name in obj3){
  console.log(name);
  console.log(obj3[name]);
};

/* writable 속성 */
// 프로퍼티 값 변경 가능, 불가능
// true: 프로퍼티 변경가능 false: 프로퍼티 변경 불가, 디폴트 값
var obj3 = {};
Object.defineProperty(obj3, "book", {
  value: "JS북",
  //변경 가능
  writable: true
});
obj3.book = "변경 가능";
console.log(obj3.book);
// fasle면 프로퍼티 변경 불가, 에러가 발생하지 않지만 값 변경되지 않음
var obj3 = {};
Object.defineProperty(obj3, "book", {
  value: "JS북",
  //변경 가능
  writable: false
});
obj3.book = "변경 불가능";
console.log(obj3.book);

/* enumerable 속성 */
// for ~ in으로 열거 가능 여부
// true : 열거 가능 false: 열거 불가능, 디폴트 값
var obj3 = {};
Object.defineProperty(obj3, "book", {
  value: "JS책",
  // 열거 가능 디폴트 값: false 이므로 무조건 작성해야함
  enumerable: true
}); 
for (var name in obj3){
  console.log(name + ":" + obj3[name]);
};

/* configurable 속성 */
// 프로퍼티 삭제 가능, 불가능
// true : 삭제 가능, value 이외 속성 변경 가능
// false : 삭제 불가능, value 이외 속성 변경 불가, 디폴트 값
var obj3 = {};
Object.defineProperty(obj3, "book", {
  value: "JS북",
  //삭제 가능
  configurable: true
});
delete obj3.book;
console.log(obj3.book);

/* get 속성 */
// getter: OOP 용어
// 프로퍼티로 값을 구할 때 value속성이 없으면 get속성 호출하게 되는데 그것이 getter
var obj3 = {};
Object.defineProperty(obj3, "book", {
  get: function () {
    return "JS책";
  }
});
var result = obj3.book;
console.log(result);

/* set 속성 */
// setter : OOP용어
// obj3.book에다가 "JS책"을 할당할 때 value속성이 없으니깐 set을 호출하게 된다 이것이 setter
var obj3 = {}, data = {};
Object.defineProperty(obj3, "book", {
  set: function(param) {
    data.title = param;
  },
  get: function() {
    return data.title;
  }
});
obj3.book = "JS책";
console.log(obj3.book);

/* getPrototypeOf() */
// 파라미터에 인스턴스를 작성하는데 인스턴스의 prototype에 연결된 프로퍼티 반환
function Book(point) {
  this.point = point;
};
Book.prototype.getPoint = function () {};
Book.prototype.setPoint = function () {};
var obj = new Book(100);

var result = Object.getPrototypeOf(obj);
for (var key in result){
  console.log(key + ":" + result[key]);
};

/* getOwnPropertyNames() */
// 파라미터에 오브젝트 작성. 오브젝트의 프로퍼티 이름을 배열로 반환
// 열거 가능 여부 체크하지 않음
// 자신이 만든 프로퍼티가 대상. 다른 오브젝트에서 받은 프로퍼티는 제외
var obj = {};
Object.defineProperties(obj, {
  book: {value: "책"},
  point: {value: 123}
});
var names = Object.getOwnPropertyNames(obj);
for (var k = 0; k < names.length; k++) {
  console.log(names[k]);
};

/* keys() */
// 파라미터에 오브젝트 작성. 열거 가능 프로퍼티 이름 반환
var obj = {};
Object.defineProperties(obj, {
  book: {
    value: "책", enumerable: true},
  point: {value: 123}
});
var names = Object.keys(obj);
for (var k = 0; k < names.length; k++) {
  console.log(names[k]);
};

/* getOwnPropertyDescriptor() */
// 프로퍼티 디스크립터의 속성 이름, 값 반환
// 다른 오브젝트에서 받은 프로퍼티는 제외
var obj = {};
Object.defineProperty(obj, "book", {
  value : "책",
  writable: true, enumerable: true
});
var desc = Object.getOwnPropertyDescriptor(obj, "book");
for (var key in desc) {
  console.log(key + ":" + desc[key]);
};

/* preventExtensions() */
// 오브젝트에 프로퍼티 추가 금지 설정
// 프로퍼티 삭제, 변경 가능
// 추가 금지를 설정한 후에는 추가 가능을 변경 불가
var obj = {};
Object.preventExtensions(obj);
try {
  Object.defineProperty(obj, "book", {
    value: "책"
  });
} catch (e) {
  console.log("추가 불가");
};

/* isExtensible() */
// 오브젝트에 프로퍼티 추가 금지 여부 반환
// true: 추가 가능 false: 추가 불가능
var obj = {};
Object.defineProperty(obj, "book", {
  value : "책",
});
console.log(Object.isExtensible(obj));

Object.preventExtensions(obj);
console.log(Object.isExtensible(obj));

/* seal() */
// 프로퍼티 추가, 삭제 금지 설정
// 추가 금지 - 오브젝트 단위, 삭제 금지 - 프로퍼티 단위
var obj = {};
Object.defineProperty(obj, "book", {
  value : "책", writable: true
});

Object.seal(obj);
try {
  Object.defineProperty(obj, "sports", {
    value: "스포츠"
  });
} catch (e) {
  console.log("추가 불가");
};

/* isSealed() */
// 추가, 삭제 금지 여부 반환
// true : 불가, false: 기능
var obj = {};
Object.defineProperty(obj, "book", {
  value : "책", writable: true
});
console.log(Object.isSealed(obj));

Object.seal(obj);
console.log(Object.isSealed(obj));

/* freeze() */
// 추가, 삭제, 변경 금지 설정
var obj = {};
Object.defineProperty(obj, "book", {
  value : "책", writable: true
});

Object.freeze(obj);
try {
  Object.defineProperty(obj, "sports", {
    value: "스포츠"
  });
} catch (e) {
  console.log("변경 불가")
}
console.log(obj.book);

/* isFrozen() */
// 추가, 삭제, 변경 금지 여부 반환
var obj = {};
Object.defineProperty(obj, "book", {
  value : "책", writable: true
});
console.log(Object.isFrozen(obj));

Object.freeze(obj);
console.log(Object.isFrozen(obj));