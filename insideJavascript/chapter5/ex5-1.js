console.log('This is global context');

function ExContext1() {
  console.log('This is Excontext1');
}

function ExContext2() {
  ExContext1();
  console.log('This is ExContext2');
}

ExContext2();
