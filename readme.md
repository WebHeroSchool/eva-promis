# h1  JavaScript Style Guide

---

__1. Всегда используйте let или const для объявления переменных.__

Правильно :-)

```
let date = new Date();
const name = new Name;
```

Не правильно :-(

```
var date = new Date();
```

__2. Не объявляй неиспользуемые переменные.__

Правильно :-)

```
let x = 0;

function getX() {
    return x + 1;
}
```

Не правильно :-(

```
let x = 0;
let y = 1; // Переменная не используется

function getX() {
    return x + 1;
}
```

__3. Всегда ставьте точку с запятой в конце выражения.__

Правильно :-)

```
function getX() {
    return x + 1;
}
```

Не правильно :-(

```
function getX() {
    return x + 1
}
```

__4.  Не оставляй пустые блоки в рабочем коде.__

Правильно :-)

```
function getX() {
}
```

Не правильно :-(

```
function getX() {
    // empty
}
```

__5.  Для объявления объекта использую фигурные скобки.__

Правильно :-)

```
const item = {};
```

Не правильно :-(

```
const item = new Object();
```


__6.   В объектах пиши каждую пару ключ свойство с новой строки.__

Правильно :-)

```
const obj0 = { 
  foo: "foo", 
  bar: "bar", 
  baz: "baz" 
};
```

Не правильно :-(

```
const obj0 = { foo: "foo", bar: "bar", baz: "baz" };
```

__7.   Не оставляй пусты места (“дыры”) в массивах.__

Правильно :-)

```
let items = ["red", "blue"];
```

Не правильно :-(

```
let items = ["red",, "blue"];
```

__8.   Если в строке ты обращаешься к какой-либо переменной через ${variable} , то такая строка должна быть обернута в обратные кавычки .__

Правильно :-)

```
`Hello ${name}!`;
```

Не правильно :-(

```
'Hello ${name}!';
```


__9.   Используй шаблонные строки вместо конкатенации.__

Правильно :-)

```
function sayHi(name) {
  return `How are you, ${name}?`;
}
```

Не правильно :-(

```
function sayHi(name) {
  return 'How are you, ' + name + '?';
}
```


__10.   Используй function expressions (Функциональное Выражение) и присваивай ее переменной вместо function declarations (Объявление Функции).__

Правильно :-)

```
const sayHi = function(name) {
  console.log(name);
}
```

Не правильно :-(

```
function sayHi(name) {
  console.log(name);
}
```












