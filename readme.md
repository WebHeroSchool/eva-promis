# h1  JavaScript Style Guide

---

__1. ������ ����������� let ��� const ��� ���������� ����������.__

��������� :-)

```
let date = new Date();
const name = new Name;
```

�� ��������� :-(

```
var date = new Date();
```

__2. �� �������� �������������� ����������.__

��������� :-)

```
let x = 0;

function getX() {
    return x + 1;
}
```

�� ��������� :-(

```
let x = 0;
let y = 1; // ���������� �� ������������

function getX() {
    return x + 1;
}
```

__3. ������ ������� ����� � ������� � ����� ���������.__

��������� :-)

```
function getX() {
    return x + 1;
}
```

�� ��������� :-(

```
function getX() {
    return x + 1
}
```

__4.  �� �������� ������ ����� � ������� ����.__

��������� :-)

```
function getX() {
}
```

�� ��������� :-(

```
function getX() {
    // empty
}
```

__5.  ��� ���������� ������� ��������� �������� ������.__

��������� :-)

```
const item = {};
```

�� ��������� :-(

```
const item = new Object();
```


__6.   � �������� ���� ������ ���� ���� �������� � ����� ������.__

��������� :-)

```
const obj0 = { 
  foo: "foo", 
  bar: "bar", 
  baz: "baz" 
};
```

�� ��������� :-(

```
const obj0 = { foo: "foo", bar: "bar", baz: "baz" };
```

__7.   �� �������� ����� ����� (������) � ��������.__

��������� :-)

```
let items = ["red", "blue"];
```

�� ��������� :-(

```
let items = ["red",, "blue"];
```

__8.   ���� � ������ �� ����������� � �����-���� ���������� ����� ${variable} , �� ����� ������ ������ ���� �������� � �������� ������� .__

��������� :-)

```
`Hello ${name}!`;
```

�� ��������� :-(

```
'Hello ${name}!';
```


__9.   ��������� ��������� ������ ������ ������������.__

��������� :-)

```
function sayHi(name) {
  return `How are you, ${name}?`;
}
```

�� ��������� :-(

```
function sayHi(name) {
  return 'How are you, ' + name + '?';
}
```


__10.   ��������� function expressions (�������������� ���������) � ���������� �� ���������� ������ function declarations (���������� �������).__

��������� :-)

```
const sayHi = function(name) {
  console.log(name);
}
```

�� ��������� :-(

```
function sayHi(name) {
  console.log(name);
}
```












