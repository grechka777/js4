// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
//
//     Сделайте функцию, которая возвращает сумму двух чисел.
//
//     Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
//
//     Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.


function cv(a) {
    return a = a * a;
}

function sum(a, b) {
    return b + a;
}
function f2(a, b, c) {
    return (a - b) / c;
}

function f3(a) {
    switch (a) {
        case 1: return a = "Пн";
        case 2: return a = "Вт";
        case 3: return a = "ср";
        case 4: return a = "чт";
        case 5: return a = "Пт";
        case 6: return a = "сб";
        case 7: return a = "вс";
    }


}


alert(cv(2));
alert(sum(2, 3));
alert(f2(9, 3, 2));
alert(f3(5));