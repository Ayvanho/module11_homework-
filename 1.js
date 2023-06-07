Выбрал этот модуль тренажера 9/24 (Замыкания)
https://apps.skillfactory.ru/learning/course/course-v1:Skillfactory+FR+2020/block-v1:Skillfactory+FR+2020+type@sequential+block@068083151d5444cebc1cdd0374b008b8/block-v1:Skillfactory+FR+2020+type@vertical+block@0c94664825fc4293b10ed3578261e6e1








Задание 1:






const sayHelloLimited = (() => {
let count = 0;
return name => {
if (count < 3) {
console.log(Hello, ${name});
count++;
}
}
})();

sayHelloLimited('Andrew')
sayHelloLimited('Andrew')
sayHelloLimited('Andrew')
sayHelloLimited('Andrew')
sayHelloLimited('Andrew')
sayHelloLimited('Andrew')
sayHelloLimited('Andrew')

Задание 2:

const printNumbers = (() => {
for (var i = 1; i <= 10; ++i) { ((j) => {
setTimeout(() => console.log(j), 0);
})(i);
}
})();

// Вывод:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

Для решения второй задачи объявляем функцию-замыкание, в которой создаётся цикл for с переменной i объявленной через var. Внутри цикла создаётся ещё одна функция-замыкание, которая принимает переменную j (которую мы передаём в качестве аргумента) и внутри вызывает setTimeout с задержкой 0 мсек и функцией, которая выводит переменную j в консоль. На каждой итерации цикла мы вызываем функцию-замыкание, передавая в неё текущее значение i. Таким образом, после выхода из цикла в консоль последовательно и с задержкой 0 мсек выводятся числа от 1 до 10.





Задание 1:

Тест-кейсы:

Успешное выполнение:

Входные данные: sayHelloLimited('Alice'). Выходные данные в консоли: "Hello, Alice"
Входные данные: sayHelloLimited('Bob'). Выходные данные в консоли: "Hello, Bob"
Входные данные: sayHelloLimited('Charlie'). Выходные данные в консоли: "Hello, Charlie"
Неуспешное выполнение:

Входные данные: sayHelloLimited(). Выходные данные в консоли: ничего не должно выводиться
Входные данные: sayHelloLimited(null). Выходные данные в консоли: ничего не должно выводиться
Входные данные: sayHelloLimited(1, 'test'). Выходные данные в консоли: "Hello, 1"
Корнер-кейсы:

Входные данные: sayHelloLimited(''). Выходные данные в консоли: "Hello, "
Входные данные: sayHelloLimited([]). Выходные данные в консоли: "Hello, "
Входные данные: sayHelloLimited({}). Выходные данные в консоли: "Hello, [object Object]"
Unit-тесты:

Тест успешного выполнения:
test('Say hello to "Alice" three times', () => {
  console.log = jest.fn();
  sayHelloLimited('Alice');
  sayHelloLimited('Alice');
  sayHelloLimited('Alice');
  expect(console.log.mock.calls.length).toEqual(3);
  expect(console.log.mock.calls[0][0]).toEqual('Hello, Alice');
  expect(console.log.mock.calls[1][0]).toEqual('Hello, Alice');
  expect(console.log.mock.calls[2][0]).toEqual('Hello, Alice');
});

Копировать
Тест неуспешного выполнения:
test('Say hello with no name', () => {
  console.log = jest.fn();
  sayHelloLimited();
  expect(console.log.mock.calls.length).toEqual(0);
});
Тест на корнер-кейс:
test('Say hello to an empty string', () => {
  console.log = jest.fn();
  sayHelloLimited('');
  expect(console.log.mock.calls.length).toEqual(1);
  expect(console.log.mock.calls[0][0]).toEqual('Hello, ');
});
Задание 2:

Тест-кейсы:

Успешное выполнение:

Вывод в консоли должен содержать числа от 1 до 10 в возрастающем порядке с задержкой 0 мс между ними.
Неуспешное выполнение:

Нет неуспешных вариантов в данной задаче.
Корнер-кейсы:

Входные данные: printNumbers(). Выходные данные в консоли: ничего не должно выводиться.
Входные данные: printNumbers(null). Выходные данные в консоли: ничего не должно выводиться.
Входные данные: printNumbers(1,2,3). Выходные данные в консоли: "1", "2", "3".
Unit-тесты:

Тест успешного выполнения:
test('Print numbers from 1 to 10', (done) => {
  console.log = jest.fn();
  printNumbers();
  setTimeout(() => {
    expect(console.log.mock.calls.length).toEqual(10);
    expect(console.log.mock.calls[0][0]).toEqual(1);
    expect(console.log.mock.calls[1][0]).toEqual(2);
    expect(console.log.mock.calls[2][0]).toEqual(3);
    expect(console.log.mock.calls[3][0]).toEqual(4);
    expect(console.log.mock.calls[4][0]).toEqual(5);
    expect(console.log.mock.calls[5][0]).toEqual(6);
    expect(console.log.mock.calls[6][0]).toEqual(7);
    expect(console.log.mock.calls[7][0]).toEqual(8);
    expect(console.log.mock.calls[8][0]).toEqual(9);
    expect(console.log.mock.calls[9][0]).toEqual(10);
    done();
  }, 0);
});
Тест на корнер-кейс:
test('Print nothing with no input', () => {
  console.log = jest.fn();
  printNumbers();
  expect(console.log).not.toHaveBeenCalled();
});
Тест на корнер-кейс:
test('Print given numbers', (done) => {
  console.log = jest.fn();
  printNumbers(1, 2, 3);
  setTimeout(() => {
    expect(console.log.mock.calls.length).toEqual(3);
    expect(console.log.mock.calls[0][0]).toEqual(1);
    expect(console.log.mock.calls[1][0]).toEqual(2);
    expect(console.log.mock.calls[2][0]).toEqual(3);
    done();
  }, 0);
});














