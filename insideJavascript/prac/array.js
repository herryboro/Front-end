var array = [
    '1.text',  '1.wav',   '1.json',  '2.text',
    '2.wav',   '2.json',  '3.text',  '3.wav',
    '3.json',  '4.text',  '4.wav',   '4.json',
    '5.text',  '5.wav',   '5.json',  '6.text',
    '6.wav',   '6.json',  '7.text',  '7.wav',
    '7.json',  '8.text',  '8.wav',   '8.json',
    '9.text',  '9.wav',   '9.json',  '10.text',
    '10.wav',  '11.text', '11.wav',  '12.text',
    '12.wav',  '13.text', '13.wav',  '14.text',
    '14.wav',  '15.text', '15.wav',  '16.text',
    '16.wav',  '16.json', '17.text', '17.wav',
    '17.json', '18.text', '18.wav',  '18.json',
    '19.text', '19.wav',  '19.json', '20.text',
    '20.wav',  '20.json'
];
let re = /.+(?=\.)/;
let array2 = [];

let i = 0;
do {
    array2.push(re.exec(array[i])[0]);
    if(re.exec(array[i])[0] == re.exec(array[i+1])[0]) {
        array2.push(re.exec(array[i+1])[0]);
    }
    i++;
} while(i < array.length); 

console.log(array2);

