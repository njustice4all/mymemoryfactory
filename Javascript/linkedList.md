# 자료구조의 LinkedList 구현

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(data) {
    const addNode = new Node(data);
    let currentNode;

    if (this.head === null) {
      this.head = addNode;
    } else {
      currentNode = this.head;

      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }

      currentNode.nextNode = addNode;
    }

    this.length++;
  }

  get(index) {
    let currentNode = this.head;
    let count = 0;

    if (index > this.length) return 'wrong index';

    while (count < index) {
      currentNode = currentNode.nextNode;
      count++;
    }

    return currentNode;
  }

  remove(index) {
    let currentNode = this.head;
    let count = 0;
    let prevNode = null;

    if (index > this.length) return 'wrong index';

    if (index === 0) {
      this.head = currentNode.nextNode;
      this.length--;

      return this.head;
    }

    while (count < index) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
      count++;
    }

    prevNode.nextNode = currentNode.nextNode;
    currentNode = null;
    this.length--;

    return this.head;
  }
}
```
