### concat() 

return 두개 합친 new array.. 기존배열 변형 안됨!!! 배열두개 합칠때 써라

### filter() 

return filter 조건에 만족한 new array.. 기존배열 변형 안됨!!! 배열의 요소를 필터링할때 써라 ★★★★★

### forEach() 

return nothing 1. 밸류 2. 인덱스... 기억... 배열의 요소를 반복작업할때 써라 ★★★★★

### reduce() 

return single value... 기존배열 변형 안됨

initial value가 없는경우 previousValue는 배열의 첫번째값 currentValue는 배열의 두번째값

initial value가 있는경우 previousValue는 initialValue고 currentValue는 배열의 첫번째 값

[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, currentIndex, array) {
  return previousValue + currentValue;
});

```javascript
// 배열의 값 모두 더하기
var total = [0, 1, 2, 3].reduce(function(a, b) {
  return a + b;
}); // total == 6

// 2차원배열 1차원으로 내리기
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
}, []); // flattened is [0, 1, 2, 3, 4, 5]
```

### map() 

return 새 배열..  익스플로러9 이상 지원 파폭 1.5이상

### every() 

return boolean.. testing function을 만족하면 true.. 검사중 한개라도 true면 검사를 중단하고 true를 반환..

### push() 

return new array의 length.. 기존배열 변형됨 stack의 개념...

### pop()

removes the last element from an array and returns that element

기존배열 ***변형됨!!!***

### for문 안에서 splice() 하지마라
