/*
//возможности обратных кавычек
let textHil = "Hello";
let textAll = `${textHil} Im String`;
console.log(textAll);
//возможность встроить функцию
function someSumm(a, b){
    return a + b;
}
console.log(`Total: ${someSumm(4, 7)}`);

//многострояная запись
let text = `Dear passangers, 
speaking your capitan.
We ready leave this planet!`;
console.log(text);
//Спец символы
//перевод строки \n
let textOne = "Dear passangers,\nspeaking your capitan\nWe ready leave this planet!";
console.log(textOne);
//Табуляция
let textTwo = "Dear passangers,\n\tspeaking your capitan.\n\t\tWe ready leave this planet!";
console.log(textTwo);
//обратные слеши для кавычек \\
let textSlesh = "Welcome too \"Savage\"";
console.log(textSlesh);
//Иконки, символы UTF - 16 \uкод , UTF - 32 \u{код}
let textSleshTwo = "We leave Eath \u{1F602}";
console.log(textSleshTwo);
//Длинна строки. Свойство Length 
//считает количество символов в строке 
let textLength = "Hello, Swetty";
console.log(textLength.length);
//получаем символы со строки 
let textLengthTwo = "Hello!";
let firstSymbol = textLengthTwo[0];
let lastSymbol = textLengthTwo[textLengthTwo.length -1];
console.log(firstSymbol);
console.log(lastSymbol);
//получаем символы с помощью цикла for of
for (const char of textLengthTwo){
    console.log(char);
};
*/
//изминение регистра 
let textUpperCase = "Hello, Yuna";
console.log(textUpperCase.toUpperCase());
console.log(textUpperCase.toLowerCase());
let textIndex = "Hello, IndexOf";
console.log(textIndex.indexOf('ello'));
console.log(textIndex.indexOf('ello', 3));
//includes 
let textIncludes = "Hello, Includes";
console.log(textIncludes.includes('ello'));
console.log(textIncludes.includes('ello', 3));

console.log(textIncludes.startsWith('ello'));
console.log(textIncludes.endsWith('s'));
//регистр имеет значение!
let textRegist = "Aloha";
let searchText = "aL";
console.log(textRegist.toLowerCase().includes(searchText.toLowerCase()));
//используется переменная
//вместо подстроки в параметрах инклудес
//
let textSlice = "hello, Im Slice";
console.log(textSlice.slice(1, 2));
console.log(textSlice.slice(-2, -1));
console.log(textSlice.slice(1));