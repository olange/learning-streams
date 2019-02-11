const { Observable } = rxjs;

const foo = new Observable(subscriber => {
  console.log('Hello');
  subscriber.next(42);
  subscriber.next(43);
  setTimeout( () => { subscriber.next(45) }, 1000);
});

foo.subscribe(x => {
  console.log(x);
});

foo.subscribe(y => {
  console.log(y);
});