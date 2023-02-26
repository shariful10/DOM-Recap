const valueElement = false;
if(typeof valueElement === 'boolean'){
    console.log('Boolean');
}
else{
    console.log('Not Boolean');
}

// const number = {
//     name: 'Rongila',
//     job: 'Student'
// };

// if(typeof number  === 'object'){
//     console.log('Object');
// }
// else{
//     console.log('Not Object');
// }

const number = 'dhdhhd';

if(isNaN(number)){
    console.log('Object');
}
else{
    console.log('Not Object');
}

function test(t) {
    if (t === undefined) {
      return 'Undefined value!';
    }
    return t;
  }
  
  let age = '';
  
  console.log(test(age));