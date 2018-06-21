# Call by Sharing

**넘긴게 object 일때 해당 속성은 sharing.. but 새로운 object 할당 불가능**

```javascript
let number = 10;
let hey = { text: 'hey' };
let man = { text: 'man' };

function update(one, two, three) {
  one = 9999;
  two.text = 'wow man';
  three = { text: 'real?' };
}

update(number, hey, man);

console.log(number); // 10
console.log(hey); // { text: 'wow man' }
console.log(man); // { text: 'man' }
```
