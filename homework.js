/* 
Andres Felipe Cardona Millan
*/

//1
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concat = array1.concat(array2);
console.log(concat);
//2
const array3 = ['a', 'b', 'c', 'd', 'e'];
console.log(array3.copyWithin(0, 3, 4)); //(target, inicio, fin)
//3
const array4 = ['a', 'b', 'c'];
const iterator = array4.entries();
for (let entries of iterator) {
  console.log(entries);
}
//4
const array5 = [1, 30, 39, 29, 10, 13];
const  every = array5.every(x => x <40)
console.log(every);
//5
const array6 = [1, 2, 3, 4];
console.log(array6.fill(0, 2, 3)); //(valor, inicio, fin)
//6
const palabras = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const res = palabras.filter((x) => x.length > 6);
console.log(res);
//7
const array7 = [5, 12, 8, 130, 44];
const found = array7.find((element) => element > 10);
console.log(found); 
//8
const array8 = [5, 12, 8, 130, 44];
const foundIndex = array8.findIndex((element) => element > 10);
console.log(foundIndex); 
//9
const array9 = [0, 1, 2, [3, 4]];
console.log(array9.flat()); 
//10
const array10 = ['hola', 'como', 'estas'];
array10.forEach((element) => console.log(element));
//11
const array11 = [1, 2, 5];
console.log(array11.includes(2));
console.log(array11.includes(4)); 
//12
const array12 = [1, 2, 3, 4, 5];
console.log(array12.indexOf(4)); 
console.log(array12.indexOf(6)); 
//13
const array13 = ['Wind', 'Rain', 'Fire'];
console.log(array13.join(' - '));
//14
const array14 = ['a', 'b', 'c'];
const iterador = array14.keys();
for (let key of iterador) {
    console.log(key);
}
//15
const array15 = ['aguacate', 'manzana', 'brocoli', 'manzana'];
console.log(array15.lastIndexOf('manzana')); 
//16
const array16 = [1, 2, 3];
console.log(array16.length);
//17
const array17 = [1, 4, 9, 10];
const newArray = array17.map((x) => x * 2);
console.log(newArray);
//18
const array18 = [1, 2, 3];
const ultimoElemento = array18.pop();
console.log(ultimoElemento);
console.log(array18);
//19
const array19 = [1, 2, 3];
const newLength = array19.push(4, 5);
console.log(array19);
//20
const array20 = [1, 2, 3, 4];
const sum = array20.reduce((inicio, fin) => inicio * fin);
console.log(sum); 
//21
const array21 = ['a', 'b', 'c', 'd'];
const reversedString = array21.reduceRight((acumulador, valorActual) => acumulador + valorActual);
console.log(reversedString);
//22
const array22 = [1, 2, 3];
array22.reverse();
console.log(array1);
//23
const array23 = [1, 2, 3];
const primerElemento = array23.shift();
console.log(primerElemento); 
console.log(array23);
//24
const array24 = [1, 2, 3, 4, 5];
const slicedArray = array24.slice(1, 4);
console.log(slicedArray);
//25
const array25 = [3, 1, 4, 1, 5, 9, 2, 6, 5];
array25.sort();
console.log(array25);
//26
const array26 = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array26.some(even));
//27
const array27 = [1, 2, 3, 4, 5];
const removedElements = array27.splice(2, 2, 'a', 'b', 'c');
console.log(removedElements);
console.log(array1);
//28
const array28 = [1, 2, 'a', 'b'];
const arrayString = array28.toString();
console.log(arrayString);
//29
const array29 = [1, 2, 3];
array29.unshift(4, 5);
console.log(array29);



