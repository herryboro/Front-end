var objA = { list: [{ id: 1 }] };

// var objB = $.extend({}, objA, { list: [{ id: 2 }] });
// console.dir(objB);

var objB = $.extend(ture, {}, objA, { list: [{ id: 2 }] });
console.dir(objB);
