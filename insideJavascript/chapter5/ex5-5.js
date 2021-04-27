var value = 'value1';

function printFunc() {
  var value = 'value2';

  function pringValue() {
    return value;
  }

  console.log(pringValue());
}

printFunc();
