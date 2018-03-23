const votes = [
  'bmw',
  'audi',
  'hyundai',
  'kia',
  'porche',
  'bmw',
  'bmw',
  'porche',
  'lexus',
  'lexus',
  'benz',
  'benz',
  'benz',
];

const initial = {};

const reducer = (accumulator, value) => {
  // let count = 1;
  // if (accumulator[value]) {
  //   count = accumulator[value] + 1;
  // }
  // accumulator[value] = count;
  
  if (!accumulator[value]) {
    accumulator[value] = 1;
  } else {
    accumulator[value] = accumulator[value] + 1;
  }

  return accumulator;
};

const result = votes.reduce(reducer, initial);
console.log(result);
