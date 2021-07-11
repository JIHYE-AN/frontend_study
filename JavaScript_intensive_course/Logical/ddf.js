var member = {
  Jan: {
      item: {
          title: 'JSBook1',
          amount: 100
      },
      point: [10, 20, 30]
  },

  Feb: {
      item: {
          title: 'JSBook2',
          amount: 200
      },
      point: [40, 50, 60]
  }

};

var sumResult = 0;


function arrayShow(list) {
  console.log(list);

  for (k = 0; k < list.length; k++) {
      sumResult += list[k];
  }
}

function show(param) {
  for (var type in param) {
      if (typeof param[type] === 'string' || typeof param[type] === 'number') {
          console.log(type + ' : ' + param[type]);
      } else if (param[type] instanceof Array) {
          arrayShow(param[type]);
      } else {
          show(param[type]);
      }

  }
}

show(member);
console.log(sumResult);