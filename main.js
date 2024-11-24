// тема: Типы данных. Объявление переменных. 
BigInt - большие данные (let a = 12415n) наборчисел, которые не имеют конечного значения;
Symbol - идентификатор, уникальное значение (let a = Symbol() )
String - строка или набор букв, которые записываются так ( let a = 'artem', let a = "artem", let a = '123', let a = '1+1' )
Number - набор чисел, цифра ( let a = 1324, let a = 0 )
Object - сущность, которая имеет в себе набор данных (
  object [
    ключ:значение;
    ключ:значение;
    ключ:значение;
    ключ:значение;
  ]
)
Boolean - логический тип данных, который имеет в себе ( 
  true|false === 1|0
 )
Function - (object) набор данных и алгоритмов, которые могут быть переиспользованы и вызваны из вне тела функции.
function имя(параметры) {
  тело функции
}

let a = 5;
let b = 2
function summ(a, b) {
  console.log(a + b);
}

NaN - not a number, не число (для проверки на число или не число), так же (let a = 1, let b = 'a')- в таком случае математические и сравнительные операции выдадут в консоли NaN. 
null - ничего (let a, let b = 4) нельзя пустоту сложить с числом
undefined - не определенное значение (let a) 

+++++++++++++++++++++++++++++++++++++++++++++++++++++

Переменная-именованый участок памяти. Все переменные которые объявляются они записываются в ячейку памяти под каким-то именем.
переменная-это имя переменной (а), оператор (=), значение, то что идет после равно.

let a = 1; она тоже меняет свое значение. Но видимость этой переменной ограничивается блоком кода

function abc() {
  let a = 5;
  console.log(a); // 5
}
console.log(a); // ReferenceError


var b = 3; сама переменная имеет возмость менять свое значение и она видна в блоке функции и за ее пределами. 

function abc() {
  var a = 5;
  console.log(a); // 5
}
console.log(a); // 5


const c = 4; - константа, переменная ,которая создается посредством ключевого слова const не имеет возмости менять свое значение.



Оператор - это то, что находится между двума операндами.
let a = 4; (присваивание)
let b = a; (присваивание)
a > b; (сравнение) (бинарный оператор)
a < b; (сравнение) (бинарный оператор)
a => b (сравнение) (бинарный оператор)
a <= b (сравнение) (бинарный оператор)
a == b; (сравнение) сравнение операндов не строгое, let a = '12', let b = 12, в таком случае переменные будут равны. Сравнивает без учета типа данных.  (бинарный оператор)
a === b (сравнение) строгое сравнение, сравнивает и значение и тип данных этих значений. (бинарный оператор) 
a + b (математические операции) (бинарный оператор)
a - b (математические операции) (бинарный оператор)
a / b (математические операции) (бинарный оператор)
a * b (математические операции) (бинарный оператор)
a ** b (математические операции) (бинарный оператор)
a % b (математические операции) ответ сам остаток
a++ (математические операции) инкремент  a + 1, если а = 5, то 5 + 1 постфиксная форма (унарный оператор)
++a (математические операции)  1 + a , 1 + 5 префиксная форма (унарный оператор)
--a (математические операции)  дeкремент  1 - a (унарный оператор)
a-- (математические операции)  a - 1 (унарный оператор)
+a (математические операции) let  a = '12', console.log(+a); // 12 - как число, а не как строку (унарный оператор)
a += b (математические операции)  (бинарный оператор)
let n = 2; 
n += 5; // теперь n = 7 (работает как n = n + 5)
n *= 5 + 3 // (сначала выполнится правая часть, выражение идентично n *= 8, n = n * 8)
a *= b (математические операции)
n *= 2; // теперь n = 14 (работает как n = n * 2)

& - и
| - или
^ - исключающие или
~ - не
<< - левый сдвиг
>> - правый сдвиг
>>> - правый сдвиг с заполнением нулями
, - разделителб нескольких выражений 
for (a = 1, b = 3, c = a * b; a < 10; a++) {
  ...
 }


let messegeOpenWindow = 'You open window'; 
function dropMenu (a) {
  тело
}

Операторы, типы данных.