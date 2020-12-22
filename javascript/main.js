class Counter {
  constructor() {
    this.counter = 0;
  }

  increase(runIf5Time) {
    this.counter++;
    console.log(this.counter);
    if(this.counter % 5 === 0) {
      runIf5Time(this.counter);
    }
  }
}

const coolCounter = new Counter();

function printSomething(num) {
  console.log(`yo ${num}`);
}

function alertNum(num) {
  alert(`wow! ${num}`);
}

coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);

coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(alertNum);

coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(alertNum); 
coolCounter.increase(alertNum); 
coolCounter.increase(alertNum);  
