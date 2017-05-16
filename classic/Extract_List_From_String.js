const sentence = "Here is a list of Dodgers players: Bellinger, Kershaw, Hernandez, Urias. That was the list.";
const start = sentence.indexOf(':');
const end = sentence.indexOf('.', start + 1);

const dodgers = sentence.substring(start + 1, end).split(',');
console.log(dodgers);

//clean it up

//map() is the better immutable way to do this
dodgers.forEach((el, i, a) => {
    a[i] = el.trim();
});
console.log(dodgers);



